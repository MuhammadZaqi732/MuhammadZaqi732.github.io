import React from "react";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import PortfolioShowcase from "../components/PortfolioShowcase";
import MessageForm from "../components/MessageForm";
import Comments from "../components/Comments";

const About = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto p-8 pt-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-xl ring-4 ring-sky-400 ring-offset-2 ring-offset-transparent overflow-hidden shadow-xl shadow-sky-500/20">
            <img src="./assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-6 text-2xl font-bold">Muhammad Zaqi</h2>
          <div className="mt-2 px-4 py-2 bg-white/50 rounded-full text-sm">Quality Assurance</div>

          <div className="mt-6 w-full bg-white/5 p-6 rounded-lg shadow-md shadow-blue-500/10">
            <h3 className="font-extrabold text-center mb-4 text-white tracking-wide">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/muhammadzaqi/" target="_blank" rel="noreferrer" className="fab fa-linkedin w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-blue-400 hover:text-white hover:bg-blue-500/40 transition-all duration-300"></a>
              <a href="https://github.com/MuhammadZaqi732" target="_blank" rel="noreferrer" className="fab fa-github w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-gray-600/40 transition-all duration-300"></a>
              <a href="https://www.instagram.com/zakyy.m" target="_blank" rel="noreferrer" className="fab fa-instagram w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-pink-400 hover:text-white hover:bg-pink-500/40 transition-all duration-300"></a>
              <a href="https://www.facebook.com/prince.zaqi.2025?locale=id_ID" target="_blank" rel="noreferrer" className="fab fa-facebook w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-blue-500 hover:text-white hover:bg-blue-600/40 transition-all duration-300"></a>
              <a href="https://www.youtube.com/@zakyy.m73" target="_blank" rel="noreferrer" className="fab fa-youtube w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-red-500 hover:text-white hover:bg-red-600/40 transition-all duration-300"></a>
              <a href="https://wa.me/62896003777248" target="_blank" rel="noreferrer" className="fab fa-whatsapp w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-green-400 hover:text-white hover:bg-green-500/40 transition-all duration-300"></a>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold mb-4">About <span className="text-green-400"><u>Me</u></span></h1>
          <div className="bg-white/5 p-6 rounded-lg">
            <p className="text-slate-200 leading-relaxed">
              Bachelor’s degree in Information Systems with experience in web development and QA Engineer.
              Skilled in performing manual and automated software testing, documenting bugs, and ensuring application quality.
              Detail-oriented, analytical, quick to adapt to new technologies, and able to work independently or collaboratively in a team.
            </p>
          <div className="inline-block bg-white/5 px-3 py-2 rounded-lg mt-3">
          <p className="text-slate-200 leading-relaxed">
            "Leveraging AI as a professional tool, not a replacement."
            </p>
          </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <Skills />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <Experience />
          </div>
        </div>
      </section>

      <section id="portfolioShowcase" className="max-w-6xl mx-auto my-8">
        <PortfolioShowcase />
      </section>

      <section id="contact" className="mt-8 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-purple-300">Message & Leave a Comment</h2>
          <p className="text-slate-300 mt-2">Have a question? Send me a message, and I'll get back to you right away.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MessageForm />
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Leave a Comment</h3>
            <Comments />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
