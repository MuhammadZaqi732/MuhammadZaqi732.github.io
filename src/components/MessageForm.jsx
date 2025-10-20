import React from "react";

const MessageForm = () => {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Send a Message</h3>
      <form id="sendMessageForm" action="https://formspree.io/f/mrbyrzde" target="_blank" method="POST" className="space-y-3">
        <input type="text" name="name" placeholder="Your name" className="w-full px-3 py-2 rounded bg-white/6" required />
        <input type="email" name="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-white/6" />
        <textarea name="message" rows="5" placeholder="Your message" className="w-full px-3 py-2 rounded bg-white/6" required></textarea>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-sky-500 text-white rounded">Send Message</button>
          <button type="reset" className="px-4 py-2 bg-white/6 rounded">Reset</button>
        </div>
      </form>
      <p className="text-sm text-slate-300 mt-3">Messages will be sent directly to email via Formspree.</p>
    </div>
  );
};

export default MessageForm;
