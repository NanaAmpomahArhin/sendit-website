import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu"; // Import the client component

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between w-full lg:w-[900px] xl:w-[1250px] 2xl:w-[1705px] h-[88px] absolute top-[30px] left-1/2 -translate-x-1/2 rounded-[10px] bg-white/60 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]
     z-10 px-4 sm:px-6 lg:px-10 2xl:px-30"
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
          {["About", "Newsroom", "Support", "Careers"].map((item, index) => (
            <Link
              key={index}
              className="font-[Plus Jakarta Sans] font-medium text-[18px] hover:text-[#17A448] transition-all"
              href="/"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <MobileMenu />

      {/* Partner Section (Desktop Only) */}
      <div className="hidden lg:flex items-center pl-[7px] gap-x-[2px] max-w-[228px] max-h-[54px] bg-[#17A448] rounded-[5px] px-[10px] py-[15px]">
        <p className="font-[Plus Jakarta Sans] font-medium text-[18px] leading-none text-white">
          Become Our Partner
        </p>
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <Image
            className="object-contain"
            src="/assets/icons/dropdown.png"
            alt="arrow-down"
            width={13.31}
            height={7.67}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
