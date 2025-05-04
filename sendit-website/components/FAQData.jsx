"use client";

import React, { useState } from "react";

const FAQData = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = ["All", "Customers", "Vendors", "Fleet Partners", "Riders"];

  const faqData = {
    All: [
      {
        question: "How do I track my order?",
        answer:
          "You can track your order in real-time by opening the SendIt app and navigating to the 'My Orders' section. From there, select your active order to view its current status and location on the map. You’ll also receive push notifications with updates about your delivery.",
      },
      {
        question: "How do I manage my menu?",
        answer:
          "Go to the menu settings in your dashboard to add or remove items.",
      },
      {
        question: "How do I join SendIt as a rider?",
        answer:
          "Apply through our Rider page and complete the required documents.",
      },
      {
        question: "What areas does SendIt operate in?",
        answer: "SendIt operates in Accra, Kumasi, and other major cities.",
      },
    ],
    Customers: [
      {
        question: "How do I track my order?",
        answer:
          "Open the app and navigate to 'My Orders' to see your delivery in real-time.",
      },
    ],
    Vendors: [
      {
        question: "How do I manage my menu?",
        answer: "Login to your vendor dashboard to add or remove items.",
      },
    ],
    // Add Fleet Partners and Riders...
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 w-[400px] sm:w-[590px] md:w-[700px] lg:w-[950px] xl:w-[1240px] 2xl:w-[1523px] flex flex-col justify-center items-center">
      {/* Tabs */}
      <div className="flex pl-5 md:pl-0 flex-wrap gap-0.5 sm:gap-2 md:gap-6 mb-8  self-start ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={` p-[5px] sm:p-[10px] rounded-[5px] text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] min-w-[114px] font-medium transition ${
              activeTab === tab
                ? "bg-[#FAFAFA] text-[#454545]"
                : "bg-white text-[#545454]"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className=" flex flex-col justify-baseline items-start w-[400px] sm:w-[590px] md:w-[700px] lg:w-[950px] xl:w-[1240px] 2xl:w-[1523px] h-[767px] bg-white rounded-xl cursor-pointer">
        {faqData[activeTab]?.map((item, index) => (
          <div
            className="flex flex-col justify-center p-10 items-start w-[400px] sm:w-[590px] md:w-[700px] lg:w-[950px] xl:w-[1240px] 2xl:w-[1523px]  min-h-[160px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]"
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="flex py-10 w-full justify-between items-center ">
              {" "}
              <p
                className="text-[#252525] text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {item.question}
              </p>
              <span>
                {openIndex === index ? (
                  <img
                    src="/assets/icons/mingcute_up-line.png"
                    className="w-[32px] h-[32px]"
                    alt="up-arrow"
                  />
                ) : (
                  <img
                    src="/assets/icons/mingcute_down-line.png"
                    className="w-[32px] h-[32px]"
                    alt="down-arrow"
                  />
                )}
              </span>
            </div>

            {openIndex === index && (
              <p className="max-w-[1401px] text-[#787878] font-mono text-sm sm:text-base lg:text-[24px]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQData;
