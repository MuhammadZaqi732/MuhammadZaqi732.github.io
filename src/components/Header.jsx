import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [hasShow, setHasShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // simulate original behavior: show navbar after load
    setTimeout(() => setHasShow(true), 80);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setOpenMobile(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      id="main-header"
      className="fixed top-4 left-0 right-0 z-30 flex justify-center pointer-events-none transition-all duration-500"
    >
      <nav
        id="navbar"
        className={`max-w-6xl mx-auto w-full flex items-center justify-between glass px-6 py-2 pointer-events-auto transition-all duration-500 ease-in-out ${hasShow ? "show" : ""}`}
      >
        <div className="text-lg font-semibold text-pink-300">Zakyy.m</div>

        <div id="nav-links" className="hidden md:flex space-x-4 transition-all duration-300">
          <Link to="/" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/20">Home</Link>
          <Link to="/about" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/20">About</Link>
          <Link to="/portfolio" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/20">Portfolio</Link>
          <Link to="/contact" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/20">Contact</Link>
        </div>

        <button
          id="burger-btn"
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setOpenMobile((s) => !s)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
        </button>

        <div
          id="mobile-menu"
          className={`${openMobile ? "" : "hidden"} absolute top-full left-0 right-0 mt-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col space-y-3 shadow-xl`}
        >
          <Link to="/" className="py-2 text-center rounded-lg hover:bg-white/20">Home</Link>
          <Link to="/about" className="py-2 text-center rounded-lg hover:bg-white/20">About</Link>
          <Link to="/portfolio" className="py-2 text-center rounded-lg hover:bg-white/20">Portfolio</Link>
          <Link to="/contact" className="py-2 text-center rounded-lg hover:bg-white/20">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
