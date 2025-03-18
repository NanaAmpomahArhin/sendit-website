import Image from "next/image";
import React from "react";

const HomepageBottomSection = () => {
  return (
    <section className="flex flex-col mt-[60px] lg:mt-[200px] w-full">
      {/* Title Section */}
      <div className="flex justify-center text-center mb-10 lg:mb-[60px]">
        <p className="font-poppins font-medium text-3xl sm:text-4xl lg:text-[50px] leading-tight">
          How It Works
        </p>
      </div>

      {/*Steps Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-16 lg:ml-[7px] lg:gap-[80px]">
        <Image
          src="/assets/images/Video.png"
          alt="video"
          width={615}
          height={419}
          className="w-full sm:w-[80%] md:w-[50%] lg:w-[615px] h-auto"
        />
        <div className="flex flex-col gap-y-10 w-full sm:w-[80%] md:w-[50%] lg:w-auto lg:gap-[48px] lg:-mt-[60px]">
          {[
            {
              step: "1",
              title: "Sign Up & Get Started",
              description:
                "Create an account in seconds and unlock seamless ordering and package sending at your fingertips.",
            },
            {
              step: "2",
              title: "Explore & Order",
              description:
                "Browse restaurants, shops, and events. Select what you need and place an order easily.",
            },
            {
              step: "3",
              title: "Track & Receive",
              description:
                "Stay updated with real-time tracking as your order is delivered right to your door.",
            },
          ].map((item, index) => (
            <div key={index} className="flex ml-[5px] gap-x-5">
              <div className="flex justify-center items-center w-[43px] h-[43px] rounded-full bg-green-100">
                <p
                  className="font-normal text-lg text-[#17A448]"
                  style={{ fontFamily: "var(--font-rubik)" }}
                >
                  {item.step}
                </p>
              </div>
              <div className="flex flex-col lg:w-[515.85px] -tracking-[0.5px] lg: -mt-[7px]">
                <p className="font-lato font-black text-lg sm:text-xl lg:text-[24px] leading-tight lg:leading-[40px]">
                  {item.title}
                </p>
                <p className="font-poppins font-normal opacity-70 text-sm sm:text-base lg:text-[16px] leading-[25px] tracking-[0.5px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  Shop Smarter Section */}
      <div className="flex flex-wrap justify-center items-center w-full h-auto bg-[#17A448] px-0 py-16 gap-10 text-center lg:h-[1500px] xl:h-[900px]  lg:text-left">
        <div className="flex flex-col items-center justify-center gap-6 w-full sm:w-[80%] md:w-[45%] lg:items-start lg:-mb-[20%] xl:-mt-[27%] lg:-mt-[200px]">
          <p className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[48px] text-white leading-tight ">
            Shop Smarter <br />
            with SendIt
          </p>
          <p className="font-poppins font-normal text-lg max-w-[570px] sm:text-xl lg:text-[22px] text-white lg:w-[700px]">
            Discover a wide range of products and enjoy a seamless shopping
            experience right at your fingertips.
          </p>
          <button
            className="flex items-center gap-x-[13.33px] px-5 py-3 max-w-[200px]  tracking-[-0.88px] rounded-[6px] bg-white text-[#454545] "
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Start Shopping
            <Image
              src="/assets/icons/ep_right2.png"
              width={24}
              height={24}
              alt="arrow"
            />
          </button>
        </div>

        {/*  Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              img: "Vector.png",
              title: "Curated Collections",
              description:
                "Explore handpicked products tailored to your preferences and needs.",
            },
            {
              img: "Vector (2).png",
              title: "Fast Delivery",
              description:
                "Get your purchases delivered quickly and efficiently.",
            },
            {
              img: "Vector (1).png",
              title: "Exclusive Deals",
              description:
                "Access special discounts and offers available only on SendIt.",
            },
            {
              img: "garden_arrow-reverse-fill-12.png",
              title: "Easy Returns",
              description:
                "Enjoy hassle-free returns and exchanges for your peace of mind.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start sm:items-start text-center sm:text-left gap-[18px] w-full max-w-[285px] h-[272px] rounded-[10px] border border-[#004D26]/80 bg-[#004D26]/50 px-7 py-10 
      ${
        index === 1 || index === 3
          ? "lg:translate-y-[-30px]"
          : "lg:translate-y-[70px]"
      }`}
            >
              <Image
                src={`/assets/icons/${item.img}`}
                width={40}
                height={40}
                alt={item.title}
              />
              <p
                className="tracking-[-0.88px] font-bold text-lg sm:text-xl lg:text-[24px] leading-tight text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {item.title}
              </p>
              <p className="font-sans font-normal tracking-wide text-left text-base sm:text-lg lg:text-[20px] text-white leading-[25px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageBottomSection;
