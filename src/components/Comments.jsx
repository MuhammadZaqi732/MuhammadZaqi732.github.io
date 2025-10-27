// src/components/Comments.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [emoji, setEmoji] = useState("😊");

  // komentar admin langsung tertanam di koding
  const adminComment = {
    name: "Zakyy.m",
    body: "Thanks for visiting! Contact me if you need anything",
    emoji: "😎",
    ts: Date.now(),
    isAdmin: true,
  };

  // ambil komentar dari Firestore (real-time)
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("ts", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setComments([adminComment, ...data]);
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim())
      return alert("Isi nama dan komentar dulu ya 😄");

    try {
      await addDoc(collection(db, "comments"), {
        name,
        body,
        emoji,
        ts: Date.now(),
      });
      setName("");
      setBody("");
      setEmoji("😊");
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Gagal menambahkan komentar, coba lagi ya.");
    }
  };

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/6"
          required
        />
        <textarea
          rows="3"
          placeholder="Your comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 rounded bg-white/6"
          required
        />
        <div>
          <label className="text-sm mb-1 block">
            Choose an emoji for your profile
          </label>
          <select
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
            <option value="😂">😂 Laugh</option>
            <option value="📚">📚 Learning</option>
            <option value="🧠">🧠 Smart</option>
            <option value="🏆">🏆 Achievement</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-yellow-400 text-black rounded"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-4">
        <h4 className="font-medium mb-2">Comments</h4>
        <div className="max-h-56 overflow-y-auto p-2 space-y-3 bg-white/3 rounded">
          {comments.map((c, i) => (
            <div
              key={i}
              className={`p-3 bg-white/6 rounded ${
                c.isAdmin ? "border border-yellow-400" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{c.emoji || "😊"}</div>
                <div>
                  <strong>
                    {c.name}
                    {c.isAdmin && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                        📌 Admin
                      </span>
                    )}
                  </strong>
                  <div className="text-sm text-slate-300">
                    {new Date(c.ts).toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="mt-2">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
