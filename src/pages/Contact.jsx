import React from "react";
import MessageForm from "../components/MessageForm";
import Comments from "../components/Comments";

const Contact = () => (
  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-12">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-300 drop-shadow-lg">
        Message & Leave a Comment
      </h2>
      <p className="text-slate-300 mt-3 text-sm md:text-base">
        Have a question? Send me a message, and I'll get back to you right away.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass p-6 md:p-8 rounded-2xl shadow-lg shadow-blue-900/30">
        <h3 className="text-xl font-semibold mb-4 text-sky-300">
          Send a Message
        </h3>
        <MessageForm />
      </div>

      <div className="glass p-6 md:p-8 rounded-2xl shadow-lg shadow-blue-900/30">
        <h3 className="text-xl font-semibold mb-4 text-sky-300">
          Leave a Comment
        </h3>
        <Comments />
      </div>
    </div>
  </div>
);

export default Contact;
