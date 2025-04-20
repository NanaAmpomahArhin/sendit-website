"use client";
import { useState } from "react";

const options = [
  "Partner As A Vendor",
  "Partner As Fleet Owner",
  "Ride With Us",
  "Host Event With Us",
];

export default function ComboBox() {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (value) => {
    setInputValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        className="w-full h-[79px] border border-[#DCE0E4] rounded-[9.47px] px-7 text-[#7B7B7B] text-[20px] sm:text-[22.72px] font-['Roboto']"
        placeholder="Select or type your issue"
      />

      {/* Custom dropdown arrow */}
      <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
        <img
          src="/assets/icons/mingcute_down-line.png"
          alt="arrow"
          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
        />
      </div>

      {/* Filtered dropdown list */}
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-[#DCE0E4] rounded-[5px] shadow-md z-10">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-7 py-3 hover:bg-gray-100 cursor-pointer text-[#252525] text-[18px] font-['Roboto']"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
