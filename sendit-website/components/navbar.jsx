import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center  w-[1550px] h-[88px] absolute top-[30px] left-1/2 -translate-x-1/2 rounded-[10px] bg-white/60 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.5)] z-10">
      <section className="flex items-center gap-14 ml-[4%] ">
        <section className="w-[70px] h-[54px]">
          <Image
            className="w-full h-full object-contain"
            src="/assets/icons/2tiSGebxBzycjDadgt6ISHwYDVG 1.png"
            alt="send-it logo"
            width={70}
            height={54}
          />
        </section>
        <section className=" flex items-center justify-between min-w-[415px] min-h-[31px] w-fit h-fit">
          <Link
            className="font-[Plus Jakarta Sans] font-medium text-[18px]"
            href="/"
          >
            About
          </Link>
          <Link
            className="font-[Plus Jakarta Sans] font-medium text-[18px]"
            href="/"
          >
            Newsroom
          </Link>
          <Link
            className="font-[Plus Jakarta Sans] font-medium text-[18px]"
            href="/"
          >
            Support
          </Link>
          <Link
            className="font-[Plus Jakarta Sans] font-medium text-[18px]"
            href="/"
          >
            Careers
          </Link>
        </section>
      </section>
      <section className="flex items-center gap-x-2 w-[228px] h-[54px] bg-white ml-[41%]">
        <p className="font-[Plus Jakarta Sans] font-medium text-[18px] leading-none">
          Become Our Partner
        </p>
        <div className="flex items-center justify-center w-[24px] h-[24px]">
          <Image
            className="object-contain"
            src="/assets/icons/arrow-down.png"
            alt="arrow-down"
            width={13.31}
            height={7.67}
          />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
