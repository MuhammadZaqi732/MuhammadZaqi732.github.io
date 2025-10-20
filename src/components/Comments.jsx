import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [emoji, setEmoji] = useState("😊");

  // 🔥 Load comments from Firestore (real-time)
  useEffect(() => {
    const q = query(collection(db, "z73_comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // pastikan pinned comment tetap paling atas
      const admin = data.find((c) => c.name === "Zakyy.m");
      const others = data.filter((c) => c.name !== "Zakyy.m");
      const sorted = admin ? [admin, ...others] : others;

      setComments(sorted);
    });

    // kalau belum ada pinned admin comment, tambahkan satu kali
    const initAdmin = async () => {
      const snapshot = await getDocs(collection(db, "z73_comments"));
      const already = snapshot.docs.find((d) => d.data().name === "Zakyy.m");
      if (!already) {
        await setDoc(doc(db, "z73_comments", "admin-pinned"), {
          name: "Zakyy.m",
          body: "Thanks for visiting! Contact me if you need anything",
          emoji: "😎",
          createdAt: serverTimestamp(),
        });
      }
    };
    initAdmin();

    return () => unsubscribe();
  }, []);

  // 🚀 Submit comment ke Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return alert("Isi nama dan komentar dulu.");

    await addDoc(collection(db, "z73_comments"), {
      name,
      body,
      emoji,
      createdAt: serverTimestamp(),
    });

    setName("");
    setBody("");
    setEmoji("😊");
  };

  return (
    <>
      <form id="commentFormLocal" className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          id="commenterName"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/6"
          required
        />
        <textarea
          id="commenterBody"
          rows="3"
          placeholder="Your comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/6"
          required
        />
        <div>
          <label className="text-sm mb-1 block">Choose an emoji for your profile</label>
          <select
            id="commenterEmoji"
            className="w-full px-3 py-2 rounded bg-white/6"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          >
            <option value="😊">😊 Smiling</option>
            <option value="😍">😍 Lovely</option>
            <option value="😎">😎 Cool</option>
            <option value="👍">👍 Thumbs Up</option>
            <option value="🔥">🔥 Fire</option>
            <option value="💡">💡 Idea</option>
            <option value="🤔">🤔 Thinking</option>
            <option value="🙌">🙌 Celebration</option>
            <option value="💪">💪 Strong</option>
            <option value="❤️">❤️ Love</option>
            <option value="👏">👏 Clap</option>
            <option value="😢">😢 Sad</option>
            <option value="😂">😂 Laugh</option>
            <option value="😴">😴 Sleepy</option>
            <option value="🤝">🤝 Partnership</option>
            <option value="📚">📚 Learning</option>
            <option value="🧠">🧠 Smart</option>
            <option value="🏆">🏆 Achievement</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-yellow-400 text-black rounded">
            Post Comment
          </button>
        </div>
      </form>

      <div className="mt-4">
        <h4 className="font-medium mb-2">Comments</h4>
        <div
          id="commentsScroll"
          className="max-h-56 overflow-y-auto p-2 space-y-3 bg-white/3 rounded"
        >
          {comments.map((c, i) => (
            <div
              key={i}
              className={`p-3 bg-white/6 rounded ${
                c.name === "Zakyy.m" ? "border border-yellow-400" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{c.emoji || "😊"}</div>
                <div>
                  <strong>{c.name}</strong>
                  <div className="text-sm text-slate-300">
                    {c.createdAt?.seconds
                      ? new Date(c.createdAt.seconds * 1000).toLocaleString()
                      : ""}
                  </div>
                </div>
              </div>
              <p className="mt-2">{escapeHtml(c.body)}</p>
              {c.name === "Zakyy.m" ? (
                <span className="text-xs text-yellow-400 font-semibold">
                  📌 Pinned Comment
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
