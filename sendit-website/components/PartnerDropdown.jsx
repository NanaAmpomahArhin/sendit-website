"use client";
import { useState } from "react";
import Image from "next/image";

export default function PartnerDropdownButton({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={`relative ${className}`}>
      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        className="flex pl-[7px] gap-x-[3px] max-w-[240px] 2xl:w-[240px] justify-center items-center max-h-[54px] bg-[#17A448] rounded-[5px] px-[10px] py-[15px]"
      >
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-[240px] bg-white border border-[#DCE0E4] shadow-lg rounded-[5px] z-50">
          <ul className="flex flex-col divide-y divide-gray-200">
            {[
              { label: "Partner As A Vendor", link: "/partners" },
              { label: "Partner As Fleet Owner", link: "/fleet" },
              { label: "Ride With Us", link: "/riders" },
              { label: "Host Event With Us", link: "/events" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-3 hover:bg-gray-100 text-[#252525] text-[16px] font-[Plus Jakarta Sans]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
