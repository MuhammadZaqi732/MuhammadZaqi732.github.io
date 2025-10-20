import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative z-10 flex items-center justify-center text-center h-[80vh] px-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-300 mb-4">Ready to Innovate</p>
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          Welcome To My <span className="text-sky-400 bg-gradient-to-r from-pink-500 via-yellow-400 to-sky-500 bg-clip-text text-transparent">Space</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300">Delivering Thorough Testing to Build Stable and High-Quality Digital Products.</p>
        <div className="mt-8">
          <Link to="/about" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg">View Profil →</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
