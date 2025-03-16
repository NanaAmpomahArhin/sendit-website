import Image from "next/image";
import React from "react";

const HomepageBottomSection = () => {
  return (
    <section className="flex flex-col">
      <div className="flex m-auto mb-15">
        <p className="font-[Poppins] font-medium text-[50px] leading-0">
          How It Works
        </p>
      </div>
      <div className="flex pl-[15%] gap-x-35 items-start mb-20">
        <Image
          src="/assets/images/Video.png"
          alt="video"
          width={615.37}
          height={419}
        />
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center gap-x-5">
            <div
              className="flex justify-center items-center w-[43px] h-[43px] rounded-full"
              style={{ backgroundColor: "rgba(23, 164, 72, 0.1)" }}
            >
              <p className="font-[Rubik] font-normal text-[17px] leading-0 text-[#17A448]">
                1
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-[lato] font-black leading-10 text-[24px]">
                Sign Up & Get Started
              </p>
              <p className="font-[Poppins] font-normal text-[16px] leading-4">
                Create an account in seconds and unlock seamless ordering <br />
                and package sending at your fingertips.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div
              className="flex justify-center items-center w-[43px] h-[43px] rounded-full"
              style={{ backgroundColor: "rgba(23, 164, 72, 0.1)" }}
            >
              <p className="font-[Rubik] font-normal text-[17px] leading-0 text-[#17A448]">
                2
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-[lato] font-black leading-10 text-[24px]">
                Explore & Order
              </p>
              <p className="font-[Poppins] font-normal text-[16px] leading-4">
                Browse restaurants, shops, and events. Select what
                <br />
                you need and place an order easily.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div
              className="flex justify-center items-center w-[43px] h-[43px] rounded-full"
              style={{ backgroundColor: "rgba(23, 164, 72, 0.1)" }}
            >
              <p className="font-[Rubik] font-normal text-[17px] leading-0 text-[#17A448]">
                3
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-[lato] font-black leading-10 text-[24px]">
                Track & Receive
              </p>
              <p className="font-[Poppins] font-normal text-[16px] leading-4">
                Stay updated with real-time tracking as your order is
                <br />
                delivered right to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[800px] items-center bg-[#17A448] px-65 mb-35 gap-x-35">
        <div className="flex flex-col justify-center gap-y-15 self-baseline pt-[120px]">
          <p className="font-[Poppins] font-bold text-[48px] text-white leading-15">
            Shop Smarter <br />
            with SendIt
          </p>
          <p className="font-[roboto] font-normal text-[22px] text-white">
            Discover a wide range of products and enjoy a seamless <br />{" "}
            shopping experience right at your fingertips.
          </p>
          <button className="flex items-center px-[15] py-[10] max-w-[200px] max-h-[72px] gap-x-5 rounded-[6.67px] bg-white">
            Start Shopping{" "}
            <Image src="/assets/icons/ep_right2.png" width={32} height={32} />
          </button>
        </div>
        <div className="flex gap-x-5 relative">
          <div className="flex flex-col gap-y-5">
            <div className=" flex flex-col justify-center gap-y-3 w-[285px] h-[272px] rounded-[10px] border border-[#004D26]/80 bg-[#004D26]/50 pl-[20px]">
              <Image
                src="/assets/icons/Vector.png"
                width={40}
                height={40}
                alt="star"
              />
              <p className="font-[Plus Jakarta Sans] font-bold text-[24px] leading-7 text-white">
                Curated <br />
                Collections
              </p>
              <p className="font-[roboto] font-normal text-[24px]  text-white leading-7">
                Explore handpicked <br />
                products tailored to your <br />
                preferences and needs.
              </p>
            </div>
            <div className=" flex flex-col justify-center gap-y-3 w-[285px] h-[272px] rounded-[10px] border border-[#004D26]/80 bg-[#004D26]/50 pl-[20px]">
              <Image
                src="/assets/icons/Vector (2).png"
                width={40}
                height={40}
                alt="bike"
              />
              <p className="font-[Plus Jakarta Sans] font-bold text-[24px] leading-7 text-white">
                FastDelivery
              </p>
              <p className="font-[roboto] font-normal text-[24px]  text-white leading-7">
                Get your purchases <br />
                delivered quickly and <br />
                efficiently.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 absolute -top-20 left-75 ">
            <div className="flex flex-col justify-center gap-y-3 w-[285px] h-[272px] rounded-[10px] border border-[#004D26]/80 bg-[#004D26]/50 pl-[20px]">
              <Image
                src="/assets/icons/Vector (1).png"
                width={40}
                height={40}
                alt="exclusive"
              />
              <p className="font-[Plus Jakarta Sans] font-bold text-[24px] leading-7 text-white">
                ExclusiveDeals
              </p>
              <p className="font-[roboto] font-normal text-[24px]  text-white leading-7">
                Access special discounts <br />
                and offers available only <br />
                on SendIt.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-3 w-[285px] h-[272px] rounded-[10px] border border-[#004D26]/80 bg-[#004D26]/50 pl-[20px]">
              <Image
                src="/assets/icons/garden_arrow-reverse-fill-12.png"
                width={40}
                height={40}
                alt="arrow-reversed"
              />
              <p className="font-[Plus Jakarta Sans] font-bold text-[24px] leading-7 text-white">
                EasyReturns
              </p>
              <p className="font-[roboto] font-normal text-[24px]  text-white leading-7">
                Enjoy hassle-free returns <br />
                and exchanges for your
                <br />
                peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageBottomSection;
