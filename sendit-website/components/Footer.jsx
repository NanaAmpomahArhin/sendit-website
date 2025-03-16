import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-15 w-full px-20">
      <section className="flex items-center gap-x-20 justify-center pb-10 mx-30 border-b border-b-[#545454]">
        <Link
          href="/"
          className="font-[Plus Jakarta Sans] font-semibold text-[22px]"
        >
          About
        </Link>
        <Link
          href="/"
          className="font-[Plus Jakarta Sans] font-semibold text-[22px]"
        >
          FAQ
        </Link>
        <Link
          href="/"
          className="font-[Plus Jakarta Sans] font-semibold text-[22px]"
        >
          Support
        </Link>
        <Link
          href="/"
          className="font-[Plus Jakarta Sans] font-semibold text-[22px]"
        >
          Privacy Policy
        </Link>
      </section>
      <section className="flex mb-20 justify-between px-10">
        <div className="flex gap-x-10">
          <Link href="/">
            <Image
              src="/assets/icons/ic_baseline-tiktok.png"
              alt="tiktok"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              src="/assets/icons/mdi_instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/icons/mdi_linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              src="/assets/icons/ic_baseline-facebook.png"
              alt="facebook"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            {" "}
            <Image
              src="/assets/icons/bi_twitter-x.png"
              alt="twitter"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="font-[Plus Jakarta Sans] font-normal text-[18px]">
          © 2025 SendIt. All Rights Reserved. Your Ultimate Multi-Function App
          for Every Need.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
