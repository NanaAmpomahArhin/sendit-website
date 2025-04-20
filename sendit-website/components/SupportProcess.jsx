"use client";
import { useState } from "react";
import ComboBox from "./ComboBox";

const SupportProcess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1); // Move to the next step
  };

  const handleSubmit = () => {
    console.log("Form submitted");
    // Or send formData to API
  };

  return (
    <div className="flex flex-col w-full lg:w-[1242px] min-h-[747px] px-6 sm:px-10 md:px-16 py-10  2xl:px-25 2xl:py-20 gap-10 2xl:gap-[70px] relative bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]">
      <p className="text-[#252525] text-[36px] sm:text-[40px] lg:text-[50px] font-semibold font-['Poppins'] leading-[58px]">
        Contact Support
      </p>

      {step === 1 && (
        <div className="flex flex-col gap-[15px] mb-10">
          <p className="text-[#252525] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold font-['Plus_Jakarta_Sans'] leading-[57.41px]">
            Let’s start with your email address
          </p>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-[#252525] text-[20px] sm:text-[24px] lg:text-[26.51px] font-medium font-['Roboto'] leading-[54.36px]">
              Email Address
            </p>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full max-w-[1032px] h-[79px] border px-7 border-[#DCE0E4] rounded-[9.47px] text-[#7B7B7B] text-[20px] sm:text-[22.72px] font-['Roboto']"
            />
          </div>
        </div>
      )}

      {/* Example Next Step UI */}
      {step === 2 && (
        <div className="flex flex-col gap-[30px] mb-10 w-full px-4 sm:px-6 lg:px-0">
          <p className="text-[28px] sm:text-[32px] font-['Plus_Jakarta_Sans'] font-semibold text-[#252525]">
            Choose Your Role
          </p>
          <p className="text-[22px] sm:text-[26.5px] font-medium text-[#252525]">
            Tell Us Who You Are
          </p>

          <div className="relative w-full max-w-[1032px]">
            <select
              name="role"
              value={formData.role || ""}
              onChange={handleChange}
              className="appearance-none border border-[#DCE0E4] rounded-[9px] px-4 py-3 pr-12 w-full h-[79px] text-[16px] sm:text-[20px] md:text-[22.72px] font-mono text-[#7B7B7B] cursor-pointer"
            >
              <option value="">Select</option>
              <option value="Customer/User">Customer/User</option>
              <option value="Vendor">Vendor</option>
              <option value="Rider">Rider</option>
              <option value="Fleet Owner">Fleet Owner</option>
              <option value="Event Organizer">Event Organizer</option>
            </select>

            {/* Custom Dropdown Arrow */}
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
              <img
                src="/assets/icons/mingcute_down-line.png"
                alt="down arrow"
                className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
              />
            </div>
          </div>
        </div>
      )}

      {step == 3 && (
        <div className=" flex flex-col gap-[30px] mb-10">
          <p className="text-[32px] font-['Plus_Jakarta_Sans'] font-semibold text-[#252525]">
            Choose Your Issue
          </p>
          <p className="text-[26.5px] font-mono font-medium text-[#252525]">
            Or type your issue
          </p>
          <div className="relative w-full max-w-[1032px]">
            <ComboBox />
          </div>
        </div>
      )}
      {/* Next Button */}
      {(step === 1 || step === 2 || step === 3) && (
        <button
          onClick={handleNext}
          className="text-center w-[227px] rounded-[5px] h-[75px] bg-[#17A448] self-end text-[#F5F5F5] text-2xl font-medium font-['Roboto'] leading-10"
        >
          Next
        </button>
      )}

      {step == 4 && (
        <div className=" flex flex-col gap-[30px] mb-10">
          <p className="text-[32px] font-['Plus_Jakarta_Sans'] font-semibold text-[#252525]">
            Message & Attachments
          </p>
          <div className="flex flex-col justify-start items-start gap-2 mb-10">
            <p className="text-[26.5px] font-mono font-medium text-[#252525]">
              Describe Your Issue
            </p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="tell us"
              rows={5}
              className="mt-5 w-full max-w-[1032px] border border-[#DCE0E4] rounded-[9.47px] p-8 text-[#7B7B7B] text-[18px] font-['Roboto']"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="text-center w-[227px] rounded-[5px] h-[75px] bg-[#17A448] self-end text-[#F5F5F5] text-2xl font-medium font-['Roboto'] leading-10"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SupportProcess;
