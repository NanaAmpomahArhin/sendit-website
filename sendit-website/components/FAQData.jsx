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
    <div className="py-6  w-full flex flex-col justify-center items-start">
      {/* Tabs */}
      <div className="flex  gap-6 mb-8 overflow-auto ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition ${
              activeTab === tab
                ? "bg-[#000] text-white"
                : "bg-gray-100 text-gray-700"
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
      <div className=" flex flex-col justify-center items-center w-[1523px] h-[767px] bg-white rounded-xl">
        {faqData[activeTab]?.map((item, index) => (
          <div
            className="flex justify-center items-center w-[1523px] text-[32px] sm:text-xl font-semibold text-[#252525]  min-h-[160px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]"
            key={index}
            onClick={() => handleToggle(index)}
          >
            {item.question}
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

            {openIndex === index && (
              <p className="px-2 py-3 text-[#787878] text-sm sm:text-base lg:text-[24px]">
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
