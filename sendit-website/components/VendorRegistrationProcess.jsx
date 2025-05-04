"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";

const VendorRegistrationProcess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessPhoneNumber: "",
    businessEmail: "",
    city: "",
    location: "",
    fullName: "",
    managerPhoneNumber: "",
    managerEmail: "",
    ghanaCardNumber: "",
    message: "",
    agreement: "",
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

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1)); // Prevent going below step 1
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://api.hhtschool.com:9000/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify({
            username: formData.fullName,
            email: formData.managerEmail,
            phone_number: formData.managerPhoneNumber,
            role: "Vendor",
            business_name: formData.businessName,
            password: "12345",
            first_name: "okantey",
            last_name: "joe",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        console.log("Success:", data);
      } else {
        alert("Registration failed.");
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="flex flex-col mx-auto lg:pl-15 xl:pl-30 py-30 w-[430px] sm:w-[620px] md:w-[750px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1275px] p-10 bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] gap-[30px] mb-60">
      <p className="font-poppins font-semibold text-[#252525] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mb-4 sm:mb-6">
        Partner Application
      </p>

      {step == 1 && (
        <div className="flex flex-col gap-[30px]">
          {" "}
          <p
            className="font-semibold text-[#252525] text-lg sm:text-xl md:text-2xl lg:text-[32px]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            What type of business are you registering?
          </p>
          <div className="flex flex-col gap-[60px] sm:w-[560px] md:w-[680px] lg:w-[800px] xl:w-[900px] 2xl:w-[1043px]">
            <div className="flex flex-wrap items-center justify-center gap-[55px]">
              {[
                {
                  img: "ic_twotone-restaurant.png",
                  title: "Restaurant / Food Vendor",
                },
                {
                  img: "mingcute_store-line.png",
                  title: "Retail Store / Business",
                },
              ].map((item, index) => (
                <div
                  className="flex flex-col  gap-[30px] w-[250px] h-[200px] md:w-[310px] md:h-[200px] lg:w-[370px] lg:h-[230px] xl:w-[420px] xl:h-[250px] 2xl:w-[491px] 2xl:h-[267px] border-[1px] border-[#DCE0E4] rounded-[5px] items-center justify-center"
                  key={index}
                >
                  <img
                    src={`/assets/icons/${item.img}`}
                    alt={item.title}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
                  />
                  <p className="font-mono font-medium md:text-[20px] lg:text-[24px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="flex self-end justify-center items-center w-[227px] h-[75px] rounded-[5px] p-[5px] bg-[#17A448] font-mono text-white leading-[32px] tracking-[0px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold text-[32px] text-[#252525]">
              Business Information
            </p>
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business Name*
            </p>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/* Business Phone Number */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business Phone Number*
            </p>
            <input
              type="tel"
              name="businessPhoneNumber"
              placeholder="050 000 0000"
              value={formData.businessPhoneNumber}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/* Business Email Address*/}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business Email Address*
            </p>
            <input
              type="email"
              name="businessEmail"
              placeholder="your.email@example.com"
              value={formData.businessEmail}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/* Upload Document */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business Certificate*
            </p>
            <FileUpload />
          </div>
          {/* City/Region Dropdown */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              City / Region*
            </p>
            <div className="relative w-full">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="appearance-none border border-[#DCE0E4] rounded-[9px] px-4 py-3 pr-12 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B] cursor-pointer"
              >
                <option value="">Select city or region</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
              </select>

              {/* Dropdown Icon */}
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="/assets/icons/mingcute_down-line.png"
                  alt="down arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Physical Address / Pick-Up Point*
            </p>
            <div className="relative w-full">
              <input
                type="text"
                name="location"
                placeholder="type your location or use the map"
                value={formData.location}
                onChange={handleChange}
                className="appearance-none border border-[#DCE0E4] rounded-[9px] px-4 py-3 pr-12 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B] cursor-pointer"
              />

              {/* Dropdown Icon */}
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="/assets/icons/akar-icons_location.png"
                  alt="location"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
              <button
                onClick={handleBack}
                className="bg-white border border-[#DCE0E4] text-[#454545] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[200px] md:w-[219px] h-[75px] rounded-[5px]"
              >
                Back
              </button>
              <button
                className="flex self-end justify-center items-center w-full sm:w-[200px] md:w-[210px] lg:w-[227px] h-[75px] rounded-[5px] p-[5px] bg-[#17A448] font-mono text-white leading-[32px] tracking-[0px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step == 3 && (
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-4 w-full">
            <p className="font-semibold text-[32px] text-[#252525]">
              Identity & Verification
            </p>
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Owner/Manager Full Name*
            </p>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/* Manager Phone Number */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Owner/Manager Phone Number*
            </p>
            <input
              type="tel"
              name="managerPhoneNumber"
              placeholder="050 000 0000"
              value={formData.managerPhoneNumber}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/*Manger Email Address*/}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Owner/Manager Email Address*
            </p>
            <input
              type="email"
              name="managerEmail"
              placeholder="your.email@example.com"
              value={formData.managerEmail}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/*Manger Ghana Card Number*/}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Owner/Manager Ghana Card Number*
            </p>
            <input
              type="text"
              name="ghanaCardNumber"
              placeholder="GHA 000 0000"
              value={formData.ghanaCardNumber}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>
          {/* Upload Passport-Size Photo */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Passport-size photo of Owner/Manager*
            </p>
            <FileUpload />
          </div>
          <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
            <button
              onClick={handleBack}
              className="bg-white border border-[#DCE0E4] text-[#454545] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[200px] md:w-[219px] h-[75px] rounded-[5px]"
            >
              Back
            </button>
            <button
              className="flex self-end justify-center items-center w-full sm:w-[200px] md:w-[210px] lg:w-[227px] h-[75px] rounded-[5px] p-[5px] bg-[#17A448] font-mono text-white leading-[32px] tracking-[0px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-medium"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step == 4 && (
        <div className="flex flex-col gap-[30px]">
          <p className="font-semibold text-[32px] text-[#252525]">
            Product Details
          </p>
          {/* Upload  Business Logo or Storefront Photo */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business Logo or Storefront Image*
            </p>
            <FileUpload />
          </div>
          {/*  Product Category */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Product Category*
            </p>
            <div className="relative w-full">
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="appearance-none border border-[#DCE0E4] rounded-[9px] px-4 py-3 pr-12 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B] cursor-pointer"
              >
                <option value="">Select</option>
                <option value="Food">Food</option>
                <option value="Grocery">Grocery</option>
              </select>

              {/* Dropdown Icon */}
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="/assets/icons/mingcute_down-line.png"
                  alt="down arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
                />
              </div>
            </div>
          </div>
          {/* Agreement Checkbox */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="appearance-none cursor-pointer w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[2px] border border-[#17A448] bg-white checked:bg-[#454545] checked:border-[#454545]"
            />
            <p className="font-mono text-[18px] sm:text-[20px] md:text-[22px] text-[#252525] max-w-full sm:max-w-[90%]">
              I agree to the Vendor{" "}
              <span className="text-[#17A448] underline cursor-pointer">
                Terms of Service
              </span>{" "}
              & understand that my business will undergo verification.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
            <button
              onClick={handleBack}
              className="bg-white border border-[#DCE0E4] text-[#454545] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[200px] md:w-[219px] h-[75px] rounded-[5px]"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#17A448] text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[240px] md:w-[300px] lg:w-[312px] h-[75px] rounded-[5px] flex items-center justify-center"
            >
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorRegistrationProcess;
