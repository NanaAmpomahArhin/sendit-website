import CurvedArrowLottie from "@/components/ArrowAnimation";

import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BecomeOurPartner = () => {
  return (
    <>
      <section className="relative  w-full flex justify-center items-center mb-[15%] 2xl:mb-[5%]  2xl:h-[982px]">
        <div className="absolute inset-0 bg-[url('/assets/images/81555.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9B9B9B]/50 via-[#0E0E0E]/55 to-[#666666]/2"></div>

        <div className="relative pb-[30px]  mt-[215px] flex flex-col items-center gap-y-[60px]  2xl:mt-[70px]">
          <button className="max-w-[413px]  rounded-[50px] border-[1px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] text-[#17A448] font-mono font-light text-[15px] sm:text-[16px] gap-[10px]">
            Join the Sendit network today and grow your business!
          </button>
          <div className="flex flex-col items-center m-auto gap-y-[15px] text-center">
            <p className="font-poppins text-[#F5F5F5] font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              PARTNER WITH SENDIT AND
            </p>
            <p className="font-poppins text-[#F5F5F5] font-bold text-[28px]  sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              EXPAND YOUR REACH
            </p>
          </div>

          <div className="flex flex-col max-w-[897px] max-h-[64px] px-3 lg:px-5  text-center text-[16px] sm:text-[19px] lg:text-[22px] font-mono  leading-7  tracking-normal">
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[#E8E8E8] font-normal"
            >
              Join our network of trusted vendors and unlock new opportunities
              to grow your restaurant or store. Benefit from our seamless
              delivery solutions and dedicated support
            </p>
          </div>
          <Link href="/vendorRegistration">
            <button className="w-[308px] h-[59px] rounded-[10px] p-[10px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] font-mono text-white leading-[32px] tracking-[0px] text-[22px] font-medium">
              Sign Up as a Vendor
            </button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center pl-[15px] sm:pl-[25px] gap-[50px] 2xl:pl-[70px] mb-[25%] 2xl:mb-[10%]">
        <p className="font-poppins font-semibold max-w-[627px] max-h-[58px] text-[35px] sm:text-[50px]   tracking-tight 2xl:mb-[50px]">
          Why Partner with Sendit?
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-[40px] gap-x-[30px]  2xl:gap-x-[90px]">
          {[
            {
              img: "tdesign_chart-analytics.png",
              text: "More Customers. More Revenue",
              desc: "Boost your visibility with SendIt's powerful local network. Tap into a community of ready-to-order customers",
            },
            {
              img: "fluent_phone-laptop-16-regular.png",
              text: "Work Smarter, Not Harder.",
              desc: "From a packed kitchen or a busy store floor, SendIt lets you handle more orders without increasing overhead. Forget capacity limits you sell, we deliver",
            },
            {
              img: "ix_support.png",
              text: "Support That Moves With You.",
              desc: "Gain personalized support, performance insights, and real-time tools to drive more traffic and increase sales.",
            },
            {
              img: "icomoon-free_wink.png",
              text: "We Win When You Win.",
              desc: "With SendIt, your success doesn’t come with extra costs. We grow when you do simple as that.",
            },
          ].map((item, index) => (
            <div
              className="flex items-start justify-center flex-row min-h-[200px] gap-[30px]"
              key={index}
            >
              <div className=" flex items-center flex-shrink-0 justify-center w-[50px] h-[50px] rounded-full sm:w-[100px] sm:h-[100px]  bg-[#17A448]/20 ">
                <Image
                  src={`/assets/icons/${item.img}`}
                  alt={item.text}
                  width={48}
                  height={48}
                  className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
                />
              </div>
              <div className="flex flex-col max-w-[720px] max-h-[119px] gap-y-[20px] sm:gap-y-[40px]">
                <p className="font-poppins font-semibold text-[24px] sm:text-[32px] text-[#252525]  tracking-[-0.66px] max-w-[645px] max-h-[60px]">
                  {item.text}
                </p>
                <p className="font-mono font-normal text-[18px] sm:text-[22px] text-[#50555C] leading-[30px] max-w-[645px] max-h-[60px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-[#17A448] items-center lg:h-[347px] justify-around py-[50px] gap-[40px] flex flex-wrap mb-[25%] lg:mb-[15%] 2xl:mb-[10%]">
        <div className="flex flex-col text-center">
          <p className="font-mono font-bold mb-[10px] text-white text-[40px] leading-[28px] tracking-[0px]">
            {" "}
            10k+
          </p>
          <p className="font-mono font-normal w-[286px] h-[56px] text-[#F5F5F5]">
            Active Customers ready to <br />
            order
          </p>
        </div>
        <div className="flex flex-col text-center">
          <p className="font-mono font-bold mb-[10px] text-white text-[40px] leading-[28px] tracking-[0px]">
            2000+
          </p>
          <p className="font-mono font-normal w-[286px] h-[56px] text-[#F5F5F5]">
            Trusted Business Partners from local <br />
            gems to rising brands
          </p>
        </div>
        <div className="flex flex-col text-center">
          <p className="font-mono font-bold mb-[10px] text-white text-[40px] leading-[28px] tracking-[0px]">
            1.5k
          </p>
          <p className="font-mono font-normal w-[286px] h-[56px] text-[#F5F5F5]">
            Couriers delivering with <br />
            care and speed
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full px-6">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] leading-[65.75px] text-[#252525] text-center mb-[1%]">
          Getting Started is Simple
        </p>
        <p className="font-mono text-[20px] sm:text-[27.82px] text-[#50555C] leading-[40.46px] text-center mb-[10%] 2xl:mb-[5%]">
          Streamline your operations and reach more buyers, faster.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-[40px] mb-[15%] 2xl:gap-x-[0px]">
          {[
            {
              img: "fluent-mdl2_join-online-meeting.png",
              title: "Sign Up ",
              desc: "Tell us about your business and submit your application.",
            },
            {
              img: "material-symbols_order-approve-outline-sharp.png",
              title: "Get Approved",
              desc: "We’ll review your details and confirm your partnership.",
            },
            {
              img: "tdesign_store.png",
              title: "Set Up Your Storefront",
              desc: "Add your menu, set hours, and upload your best photos.",
            },
            {
              img: "fluent_live-24-filled.png",
              title: "Go Live & Earn",
              desc: "Go live, receive orders, and start growing with SendIt.",
            },
          ].map((item, index, arr) => (
            <div className="flex items-center justify-center" key={index}>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-[162.41px] h-[162.41px] rounded-full bg-[#17A448]/20">
                  <Image
                    src={`/assets/icons/${item.img}`}
                    alt={item.title}
                    width={87.32}
                    height={87.32}
                  />
                </div>
                <p className="text-center text-[28px] font-poppins font-semibold text-[#252525] leading-[57.41px] tracking-[0px]">
                  {item.title}
                </p>
                <p className="text-center text-[20.96px] text-[#50555C] font-mono leading-[27.07px] tracking-[0px] w-[351.03px] h-[55px]">
                  {item.desc}
                </p>
              </div>
              {index !== arr.length - 1 && (
                <CurvedArrowLottie className="hidden  w-[172px] h-[73.62px] -ml-[40px] 2xl:flex self-start mt-[20px]" />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-nowrap items-center justify-center lg:px-[200px]  2xl:px-30 2xl:items-start">
        <Testimonials />
        <Image
          src="/assets/images/baker.png"
          alt="baker"
          width={735}
          height={497}
          className="rounded-[10px] hidden 2xl:block"
        />
      </section>
      <section className="flex flex-col items-center justify-center lg:h-[803px] w-full bg-[#17A448] mt-[15%] gap-y-[30px] px-6 py-[70px]  sm:py-[120px] mb-[15%] lg:px-10 lg:gap-y-[60px]">
        <p className="font-poppins font-medium text-[35px] sm:text-[45px] lg:text-[63.22px] leading-[55.75px] lg:leading-[65.75px] text-[#F5F5F5] text-center">
          Ready to Power Your Business?
        </p>
        <p className="font-mono font-normal text-[20px] text-center sm:text-[25px] lg:text-[30px] leading-[35.46px] text-[#E9E9E9] lg:w-[1065.94px]">
          Join a platform designed for local growth, with reliable logistics and
          built-in customer traffic.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-[20px] gap-x-[20px] xl:gap-x-[40px]">
          <button className=" h-[80px] w-[300px] xl:h-[96px] rounded-[5px] p-[10px] bg-[#F5F5F5] text-[#17A448] text-mono font-medium text-[16px] sm:text-[30px] leading-[40.46px] tracking-[0px] text-center">
            Become a Partner
          </button>
          <button className=" h-[80px] w-[298px] xl:h-[96px] rounded-[5px] border border-[#F5F5F5] p-[10px] text-[#F5F5F5] text-mono font-medium text-[16px] sm:text-[30px] leading-[40.46px] tracking-[0px] text-center">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default BecomeOurPartner;
