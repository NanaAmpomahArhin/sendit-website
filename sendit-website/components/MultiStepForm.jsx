"use client";
import { useState } from "react";
import FileUpload from "./FileUpload";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    vehicleTypes: [],
    fleetSize: "",
    businessNumber: "",
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const updatedTypes = checked
        ? [...prev.vehicleTypes, value]
        : prev.vehicleTypes.filter((type) => type !== value);

      return {
        ...prev,
        vehicleTypes: updatedTypes,
      };
    });
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1)); // Prevent going below step 1
  };

  const handleSubmit = () => {
    console.log("Form submitted", formData);
    // Or send formData to API
  };

  return (
    <div className="flex flex-col max-w-[1344px] min-h-[1053px] mx-auto py-20 px-20 bg-white  shadow-[0px_8.63px_34.52px_0px_rgba(0,0,0,0.08)] mt-40">
      {/* Progress Indicator */}
      <div className="flex  justify-center sm:justify-between mb-10 px-4 sm:px-6 lg:px-10 gap-y-10 gap-x-8">
        {["Basic Info", "Fleet Details", "Verification"].map((label, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 sm:gap-[30px]"
          >
            <div
              className={`w-[60px] h-[60px] sm:w-[79.69px] sm:h-[79.69px] rounded-full flex items-center justify-center text-[24px] sm:text-[35.98px] font-poppins font-semibold ${
                step >= index + 1 ? "text-[#F5F5F5]" : "text-[#545454]"
              } ${step >= index + 1 ? "bg-[#17A448]" : "bg-[#EFEFEF]"}`}
            >
              {index + 1}
            </div>
            <p
              className={`text-[20px] sm:text-[26.51px] font-mono font-medium text-center ${
                step >= index + 1 ? "text-[#252525]" : "text-[#545454]"
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Form Sections */}
      {step === 1 && (
        <div className="flex flex-col justify-center gap-8 sm:gap-10">
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            {/* First Name */}
            <div className="flex flex-col gap-4 w-full">
              <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
                First Name
              </p>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-4 w-full">
              <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
                Last Name
              </p>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Email Address
            </p>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Phone Number
            </p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-10 w-full">
            <button
              onClick={handleNext}
              className="bg-[#17A448] text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-6 py-4 rounded-[5px] w-full sm:w-[250px] md:w-[300px] lg:w-[312px] h-[80px] sm:h-[90px] lg:h-[96px] flex items-center justify-center gap-4"
            >
              Continue
              <img
                src="assets/icons/ep_right.png"
                alt="white right arrow"
                className="w-[24px] sm:w-[28px] md:w-[30px] lg:w-[32px]"
              />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col justify-center gap-10 sm:gap-12 w-full">
          {/* Company Name */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Company Name
            </p>
            <input
              type="text"
              name="companyName"
              placeholder="Your company name"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>

          {/* Fleet Size Dropdown */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Fleet Size
            </p>
            <div className="relative w-full">
              <select
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
                className="appearance-none border border-[#DCE0E4] rounded-[9px] px-4 py-3 pr-12 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B] cursor-pointer"
              >
                <option value="">Select Fleet size</option>
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

          {/* Vehicle Types (Checkboxes) */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Vehicle Types (select all that apply)
            </p>
            <div className="flex flex-wrap gap-6 text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#252525]">
              {["Motorcycle", "Cars", "Van", "Trucks"].map((type) => (
                <label key={type} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="vehicleTypes"
                    value={type}
                    checked={formData.vehicleTypes?.includes(type)}
                    onChange={handleCheckboxChange}
                    className="appearance-none cursor-pointer w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[2px] border border-[#DCE0E4] bg-white checked:bg-[#454545] checked:border-[#454545]"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
            <button
              onClick={handleBack}
              className="bg-white border border-[#DCE0E4] text-[#454545] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[200px] md:w-[219px] h-[80px] sm:h-[90px] lg:h-[96px] rounded-[5px]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-[#17A448] text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[240px] md:w-[300px] lg:w-[312px] h-[80px] sm:h-[90px] lg:h-[96px] rounded-[5px] flex items-center justify-center gap-4"
            >
              Continue
              <img
                src="assets/icons/ep_right.png"
                alt="white right arrow"
                className="w-[24px] sm:w-[28px] md:w-[30px] lg:w-[32px] h-auto"
              />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col justify-center gap-10 sm:gap-12 w-full">
          {/* Business License Number */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Business License Number
            </p>
            <input
              type="text"
              name="businessNumber"
              placeholder="Your business license number"
              value={formData.businessNumber}
              onChange={handleChange}
              className="border border-[#DCE0E4] rounded-[9px] px-4 py-3 w-full text-[18px] sm:text-[20px] md:text-[22px] font-mono text-[#7B7B7B]"
            />
          </div>

          {/* Upload Document */}
          <div className="flex flex-col gap-4 w-full">
            <p className="font-mono font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26.51px] text-[#252525]">
              Upload Business Registration Document
            </p>
            <FileUpload />
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
              I agree to the{" "}
              <span className="text-[#17A448] underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#17A448] underline cursor-pointer">
                Privacy Policy
              </span>
              . I confirm that all information provided is accurate and
              complete.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-between items-center mt-10 gap-4">
            <button
              onClick={handleBack}
              className="bg-white border border-[#DCE0E4] text-[#454545] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[200px] md:w-[219px] h-[80px] sm:h-[90px] lg:h-[96px] rounded-[5px]"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#17A448] text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-mono font-medium px-5 py-4 w-full sm:w-[240px] md:w-[300px] lg:w-[312px] h-[80px] sm:h-[90px] lg:h-[96px] rounded-[5px] flex items-center justify-center"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
