import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("z73_comments") || "[]");
    if (!arr.some(c => c.name === "Zakyy.m")) {
      arr.unshift({
        name: "Zakyy.m",
        body: "Thanks for visiting! Contact me if you need anything",
        emoji: "😎",
        ts: Date.now()
      });
      localStorage.setItem("z73_comments", JSON.stringify(arr));
    }
    setComments(JSON.parse(localStorage.getItem("z73_comments") || "[]"));
  }, []);

  const loadCommentsLocal = () => {
    setComments(JSON.parse(localStorage.getItem("z73_comments") || "[]"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return alert("Isi nama dan komentar dulu.");
    let arr = JSON.parse(localStorage.getItem("z73_comments") || "[]");
    const admin = arr.find(c => c.name === "Zakyy.m");
    const others = arr.filter(c => c.name !== "Zakyy.m");
    others.unshift({ name, body, emoji, ts: Date.now() });
    arr = [admin, ...others];
    localStorage.setItem("z73_comments", JSON.stringify(arr));
    setName(""); setBody(""); setEmoji("😊");
    loadCommentsLocal();
  };

  const clearComments = () => {
    localStorage.removeItem("z73_comments");
    loadCommentsLocal();
  };

  return (
    <>
      <form id="commentFormLocal" className="space-y-3" onSubmit={handleSubmit}>
        <input type="text" id="commenterName" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded bg-white/6" required />
        <textarea id="commenterBody" rows="3" placeholder="Your comment" value={body} onChange={e=>setBody(e.target.value)} className="w-full px-3 py-2 rounded bg-white/6" required />
        <div>
          <label className="text-sm mb-1 block">Choose an emoji for your profile</label>
          <select id="commenterEmoji" className="w-full px-3 py-2 rounded bg-white/6" value={emoji} onChange={e=>setEmoji(e.target.value)}>
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
          <button type="submit" className="px-4 py-2 bg-yellow-400 text-black rounded">Post Comment</button>
          {/* <button type="button" id="clearCommentsBtn" className="px-4 py-2 bg-white/6 rounded" onClick={clearComments}>Clear</button> */}
        </div>
      </form>

      <div className="mt-4">
        <h4 className="font-medium mb-2">Comments</h4>
        <div id="commentsScroll" className="max-h-56 overflow-y-auto p-2 space-y-3 bg-white/3 rounded">
          {comments.map((c, i) => (
            <div key={i} className={`p-3 bg-white/6 rounded ${c.name === 'Zakyy.m' ? 'border border-yellow-400' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{c.emoji || '😊'}</div>
                <div>
                  <strong>{c.name}</strong>
                  <div className="text-sm text-slate-300">{new Date(c.ts).toLocaleString()}</div>
                </div>
              </div>
              <p className="mt-2">{c.body}</p>
              {c.name === 'Zakyy.m' ? <span className="text-xs text-yellow-400 font-semibold">📌 Pinned Comment</span> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
