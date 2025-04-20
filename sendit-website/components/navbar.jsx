import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu"; // Import the client component
import PartnerDropdownButton from "./PartnerDropdown";

const Navbar = () => {
  return (
    <nav
      className="flex fixed items-center justify-between w-full lg:w-[900px] xl:w-[1250px] 2xl:w-[1700px] h-[88px]  top-[30px] left-1/2 -translate-x-1/2 rounded-[10px] bg-white/60 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]
     z-50 px-4 sm:px-6 lg:px-10 2xl:px-30"
    >
      {/* Left: Logo */}
      <div className="flex gap-x-[20px]">
        <div className="w-[70px] h-[54px]">
          <Image
            className="w-full h-full object-contain"
            src="/assets/icons/2tiSGebxBzycjDadgt6ISHwYDVG 1.png"
            alt="send-it logo"
            width={70}
            height={54}
          />
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
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
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <MobileMenu />

      {/* Partner Section (Desktop Only) */}
      <PartnerDropdownButton className="hidden lg:block" />
    </nav>
  );
};

export default Navbar;
