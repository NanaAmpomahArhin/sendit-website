"use client";

import { useState } from "react";
import Link from "next/link";
import PartnerDropdownButton from "./PartnerDropdown";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Now Moved to the Right) */}
      <button
        className="lg:hidden flex items-center justify-center z-15 text-3xl font-bold px-3 py-2 rounded-md focus:outline-none ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ {/* Hamburger icon */}
      </button>

      {/*Mobile Menu (Hidden by Default & Slides in When Open) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen z-15 bg-white shadow-lg flex flex-col items-start px-6 pt-20 gap-6 transition-transform duration-300 ${
          menuOpen ? "block translate-x-0" : "hidden translate-x-full"
        }`}
      >
        {/* Close Button (X) */}
        <button
          className="absolute top-5 z-15 right-5 text-3xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>

        {/* Mobile Navigation Links */}
        {[
          { title: "About", link: "about" },
          { title: "Newsroom", link: "newsroom" },
          { title: "Support", link: "support" },
          { title: "Careers", link: "careers" },
        ].map((item, index) => (
          <Link
            key={index}
            className="font-[Plus Jakarta Sans] font-medium text-[18px] hover:text-[#17A448] transition-all"
            href={`/${item.link}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.title}
          </Link>
        ))}

        {/* Partner Section (Mobile) */}
        <PartnerDropdownButton />
      </div>
    </>
  );
};

export default MobileMenu;
