import Image from "next/image";
import React from "react";

const HomepageBottomSection = () => {
  return (
    <section className="flex flex-col mt-[60px] lg:mt-[200px] w-full">
      {/* Title Section */}
      <div className="flex justify-center text-center mb-10 lg:mb-[60px]">
        <p className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[50px] leading-tight">
          How It Works
        </p>
      </div>

      {/*Steps Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-16 lg:ml-[7px] lg:gap-[80px]">
        <Image
          src="/assets/images/pexels-kampus-8931690.jpg"
          alt="video"
          width={615}
          height={419}
          className="w-full sm:w-[80%] md:w-[50%] lg:w-[779.81px] rounded-[15px] px-[7px] h-auto"
        />
        <div className="flex flex-col gap-y-10 w-full sm:w-[80%] md:w-[50%] lg:w-auto lg:gap-[88.43px] lg:-mt-[40px] 2xl:gap-[100px] 2xl:mt-[0px]">
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
            <div
              key={index}
              className="flex ml-[5px] lg:gap-y-[13.94px] gap-x-5"
            >
              <div className="flex  flex-shrink-0 justify-center items-center w-[43px] h-[43px] rounded-full bg-green-100">
                <p
                  className="font-normal text-lg text-[#17A448]"
                  style={{ fontFamily: "var(--font-rubik)" }}
                >
                  {item.step}
                </p>
              </div>
              <div className="flex flex-col lg:w-[515.85px] -tracking-[0.5px] lg: -mt-[7px] 2xl:gap-[15px]">
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
      <div className="flex flex-wrap justify-center items-center w-full h-auto bg-[#17A448] px-0 py-16 gap-10 text-center lg:h-[1500px] xl:h-[900px] 2xl:mt-30 lg:text-left">
        <div className="flex flex-col items-center justify-center gap-6 w-full sm:w-[80%] md:w-[45%] lg:items-start lg:-mb-[20%] xl:-mt-[27%] lg:-mt-[200px] 2xl:-mt-[395px]">
          <p className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[48px] 2xl:text-[61.37px] text-white leading-tight ">
            Shop Smarter <br />
            with SendIt
          </p>
          <p className="font-mono font-normal text-lg max-w-[570px] sm:text-xl lg:text-[22px] 2xl:text-[28.13px] text-white lg:w-[700px]">
            Discover a wide range of products and enjoy a seamless shopping
            experience right at your fingertips.
          </p>
          <button
            className="flex items-center gap-x-[13.33px] px-5 py-3 max-w-[200px]  tracking-[-0.88px] rounded-[6px] bg-white text-[#454545] 2xl:max-w-[319.1px] 2xl:max-h-[92.05px] 2xl:rounded-[8.52px] p-[25.57px] 2xl:gap-[17.05px] 2xl:text-[30.68px] "
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Get Started
            <Image
              src="/assets/icons/ep_right2.png"
              width={24}
              height={24}
              alt="arrow"
              className="2xl:w-[40.91px] 2xl:h-[40.91px]"
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
              <p className="font-mono font-normal tracking-wide text-left text-base sm:text-lg lg:text-[20px] text-white leading-[25px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-0 py-10 lg:mt-[100px] xl:mt-[150px]">
        <div className="w-full max-w-[1563.3px] rounded-[30px] sm:rounded-[50px] lg:h-[500px] bg-[#5DC041] flex flex-col lg:flex-row items-center justify-between relative gap-[30px] p-6 sm:py-10 sm:px-0 sm:gap-[100px] lg:gap-[0px] 2xl:px-[5%] xl:h-[620px] 2xl:h-[600px]">
          {/* Gradient Circle */}
          <div className="absolute  w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]  xl:w-[500px] xl:h-[500px]  rounded-full bg-[radial-gradient(circle,#5FD63D_0%,#17A448_100%)] shadow-[inset_0px_27.95px_31.95px_#5FD63D] top-10 2xl:top-5 z-0"></div>

          {/* Phone Image */}
          <div className="relative ml-[35%] md:ml-[28%] lg:ml-[7%] sm:-mt-[20px] z-10 flex justify-center items-center max-w-[400px] sm:max-w-[450px] md:max-w-[500px]  xl:max-w-[750px] 2xl:w-[1000px]  2xl:-mt-[4%]">
            <Image
              src="/assets/images/Iphone 14 - 1.png"
              width={399}
              height={806}
              alt="iphone 1"
              className="w-full h-auto 2xl:h-[650px]"
            />
          </div>

          {/* Text & Download Buttons */}
          <div className="relative z-10 text-center sm:text-left mt-6 sm:mt-0 sm:max-w-[500px] lg:max-w-[650px] px-4 2xl:max-w-[676.71px]">
            <h2 className="font-poppins text-lg sm:text-2xl md:text-3xl 2xl:text-[46px] 2xl:leading-[58px] 2xl:tracking-[0px] font-bold text-black 2xl:mb-[60px]">
              Ready to track, shop, and send? Download now!
            </h2>
            <p className="text-mono font-normal text-[#0A102F] text-sm sm:text-lg mt-2 2xl:mb-[60px]">
              Our app lets you shop, send, track, and book tickets with ease.
              Download on any device and get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start mt-5 gap-3 sm:gap-4">
              <Image
                src="/assets/images/App Store.png"
                width={150}
                height={50}
                alt="App Store"
                className="w-[120px] sm:w-[150px] 2xl:w-[227.65px] 2xl:h-[74.57px]"
              />
              <Image
                src="/assets/images/Play Store.png"
                width={150}
                height={50}
                alt="Google Play"
                className="w-[120px] sm:w-[150px] 2xl:w-[227.65px] 2xl:h-[74.57px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageBottomSection;
