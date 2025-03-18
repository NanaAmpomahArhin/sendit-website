"use client";

import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Hamburger Button (Now Moved to the Right) */}
      <button
        className="lg:hidden flex items-center justify-center text-3xl font-bold px-3 py-2 rounded-md focus:outline-none ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ {/* Hamburger icon */}
      </button>

      {/* 🔹 Mobile Menu (Hidden by Default & Slides in When Open) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen bg-white shadow-lg flex flex-col items-start px-6 pt-20 gap-6 transition-transform duration-300 ${
          menuOpen ? "block translate-x-0" : "hidden translate-x-full"
        }`}
      >
        {/* Close Button (X) */}
        <button
          className="absolute top-5 right-5 text-3xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>

        {/* Mobile Navigation Links */}
        {["About", "Newsroom", "Support", "Careers"].map((item, index) => (
          <Link
            key={index}
            className="font-[Plus Jakarta Sans] font-medium text-[18px] hover:text-[#17A448] transition-all"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}

        {/* Partner Section (Mobile) */}
        <div className="flex items-center gap-x-2 w-full py-4 px-6 bg-white border-t">
          <p className="font-[Plus Jakarta Sans] font-medium text-[18px]">
            Become Our Partner
          </p>
          <span className="text-xl">▼</span> {/* Downward arrow */}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
