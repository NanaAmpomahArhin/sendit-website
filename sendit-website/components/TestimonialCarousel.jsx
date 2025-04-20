"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jonny Amartey",
    event: "Night Vibes Festival",
    rating: 5,
    image:
      "/assets/images/business-executives-participating-business-meeting.png",
    feedback:
      "Selling tickets with SendIt was seamless, from listings to delivery. We reached a whole new audience and sold out faster than ever before!",
  },
  {
    name: "Jane Doe",
    event: "Art Expo 2024",
    rating: 4,
    image:
      "/assets/images/business-executives-participating-business-meeting.png",
    feedback:
      "The platform made managing everything a breeze. Definitely coming back!",
  },
  {
    name: "Kwame Nkrumah",
    event: "Tech Summit Accra",
    rating: 5,
    image:
      "/assets/images/business-executives-participating-business-meeting.png",
    feedback:
      "We got more visibility and way better tracking for our ticket sales!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  // Automatically go to next testimonial every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 20000); // 20 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="flex flex-row items-center justify-center w-full px-4 gap-10  md:gap-24">
      {/* Left Arrow */}
      <button onClick={handlePrev}>
        <Image
          src="/assets/icons/arrow-left.png"
          alt="left arrow"
          width={15.98}
          height={27.74}
          className="w-[16px] h-[28px]"
        />
      </button>

      {/* Cards */}
      <div className="flex flex-col gap-8 lg:flex-row md:gap-10">
        {[0, 1].map((offset) => {
          const testimonial =
            testimonials[(currentIndex + offset) % testimonials.length];
          return (
            <div
              key={testimonial.name}
              className="bg-white shadow-[0px_8px_32px_0px_#0000000F] border border-[#DCE0E4] rounded-lg p-6 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[668px] h-auto flex flex-col gap-6 justify-center transition duration-500 ease-in-out"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
                />
                <div>
                  <p className="font-poppins text-[20px] sm:text-[24px] text-[#252525] font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[#50555C] text-[16px] sm:text-[20px]">
                    {testimonial.event}
                  </p>
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <img
                    key={index}
                    src="/assets/icons/weui_star-filled.png"
                    alt="star"
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                  />
                ))}
              </div>

              <p className="font-mono text-[16px] sm:text-[18px] text-[#50555C]">
                {testimonial.feedback}
              </p>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button onClick={handleNext}>
        <Image
          src="/assets/icons/arrow-right.png"
          alt="right arrow"
          width={15.98}
          height={27.74}
          className="w-[16px] h-[28px]"
        />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
