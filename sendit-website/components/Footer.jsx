import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-10 w-full px-6 sm:px-10 lg:px-20 py-10 lg:mt-[90px]">
      {/* Navigation Links */}
      <section className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pb-6 border-b border-b-[#545454] text-center lg:pb-[40px]">
        {["About", "FAQ", "Support", "Privacy Policy"].map((item, index) => (
          <Link
            key={index}
            href="/"
            className=" font-semibold text-lg sm:text-xl lg:text-[22px]  tracking-[-0.76px]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {item}
          </Link>
        ))}
      </section>

      {/* Social Icons & Copyright */}
      <section className="flex flex-wrap justify-center sm:justify-between items-center gap-6 px-4">
        {/* Social Media Icons */}
        <div className="flex gap-6">
          {[
            { img: "ic_baseline-tiktok.png", alt: "tiktok" },
            { img: "mdi_instagram.png", alt: "instagram" },
            { img: "mdi_linkedin.png", alt: "linkedin" },
            { img: "ic_baseline-facebook.png", alt: "facebook" },
            { img: "bi_twitter-x.png", alt: "twitter" },
          ].map((icon, index) => (
            <Link key={index} href="/">
              <Image
                src={`/assets/icons/${icon.img}`}
                alt={icon.alt}
                width={30}
                height={30}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="text-center sm:text-left font-[Plus Jakarta Sans] font-normal text-sm sm:text-base lg:text-[18px] text-gray-600">
          © 2025 SendIt. All Rights Reserved. <br className="sm:hidden" />
          Your Ultimate Multi-Function App for Every Need.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
