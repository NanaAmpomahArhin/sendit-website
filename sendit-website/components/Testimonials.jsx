"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Joining SendIt has truly transformed how we do business. We’re not only getting more online orders but also attracting customers we never reached before. The support is top-notch, and the tools make managing our orders smooth and stress-free. It’s like having a growth partner right beside us.",
    author: "Eddy’s Pizza Team",
  },
  {
    quote:
      "SendIt helped us scale our operations seamlessly. With their efficient system, we’ve saved a lot of time and increased customer satisfaction.",
    author: "Happy Burgers",
  },
  {
    quote:
      "Before SendIt, our deliveries were slow and chaotic. Now, we get real-time updates and improved logistics, making our customers happier!",
    author: "Fresh Bites",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeTestimonial = (nextIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFade(true);
    }, 500); // Match with duration below
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    changeTestimonial(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col w-full h-auto items-start justify-center text-center p-6  2xl:px-12">
      <h2 className="font-poppins text-[#17A448] font-medium text-[20px] leading-[28px] tracking-[0px] text-left">
        Testimonials
      </h2>

      <div className="flex flex-col">
        <div className="flex w-[50px] h-[50px] -ml-[15px]">
          <img
            src="/assets/icons/ri_single-quotes-l.png"
            alt="quote1"
            className="h-auto"
          />
          <img
            src="/assets/icons/ri_single-quotes-l.png"
            alt="quote2"
            className="h-auto -ml-[30px]"
          />
        </div>

        {/* Transitioning content */}
        <div
          className={`px-[45px] max-w-[703px] h-auto flex flex-col transform-gpu transition-all duration-500 ease-in-out ${
            fade
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <p className="font-mono font-normal text-[24px] text-[#50555C] leading-[32px] tracking-[0px] text-left">
            {testimonials[currentIndex].quote}
          </p>
          <p className="mt-[30px] font-mono font-medium text-[24px] leading-[32px] tracking-[0px] text-left">
            — {testimonials[currentIndex].author}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex mt-[30px] gap-x-[20px]">
          <button
            onClick={prevTestimonial}
            className="w-[60px] h-[60px] flex items-center justify-center bg-[#17A448]/20 rounded-full"
          >
            <Image
              src="/assets/icons/formkit_left.png"
              alt="left_button"
              width={22.76}
              height={52}
            />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-[60px] h-[60px] flex items-center justify-center bg-[#17A448]/20 rounded-full"
          >
            <Image
              src="/assets/icons/formkit_right.png"
              alt="right_button"
              width={22.76}
              height={52}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
