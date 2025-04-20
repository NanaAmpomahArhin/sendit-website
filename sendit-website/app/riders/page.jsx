import CurvedArrowLottie from "@/components/ArrowAnimation";
import Image from "next/image";
import React from "react";

const RidersPage = () => {
  return (
    <>
      <section className="relative  w-full flex justify-center items-center mb-[15%] 2xl:mb-[5%]  2xl:h-[1207px] z-5">
        <div className="absolute inset-0 bg-[url('/assets/images/ridersbg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9B9B9B]/50 via-[#0E0E0E]/55 to-[#666666]/2"></div>
        <div className="relative pb-[30px] z-10 flex flex-col items-center gap-y-[60px] lg:-mt-[30px] 2xl:-mt-[390px]">
          <button className="max-w-[200px]  mt-[215px] rounded-[50px] border-[1px] border-[#F5F5F5] pt-[8px] pr-[15px] pb-[8px] pl-[15px] text-[#F5F5F5] font-mono font-light text-[16px] gap-[10px]">
            Become a SendIt Rider
          </button>
          <div className="flex flex-col items-center m-auto gap-y-[15px] text-center">
            <p className="font-poppins mb-0 text-[#F5F5F5] font-bold text-[30px] sm:text-[40px] lg:text-[50px]  tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              EARN DAILY. RIDE FREELY. DELIVER
            </p>
            <p className="font-poppins m-0 text-[#F5F5F5] font-bold text-[28px]  sm:text-[40px] lg:text-[50px] leading-[80%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              WITH PURPOSE
            </p>
          </div>

          <div className="flex flex-col max-w-[897px] max-h-[64px] px-3 lg:px-5  text-center text-[16px] sm:text-[19px] lg:text-[22px] font-mono  leading-7  tracking-normal">
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[#E8E8E8] font-normal"
            >
              Whether you're looking for a full-time hustle or part-time income,
              SendIt gives you the tools, support, and freedom to succeed. Work
              on your terms and earn on your own schedule.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[30px]">
            <button className="w-[186px] h-[59px] rounded-[10px] p-[10px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] font-mono text-white leading-[32px] tracking-[0px] text-[22px] font-medium">
              Apply Now
            </button>
            <button className="w-[308px] h-[59px] rounded-[10px] border-[1px] border-[#DCE0E4] bg-white p-[10px]  shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] font-mono text-[#17A448] leading-[32px] tracking-[0px] text-[22px] font-medium">
              Download Rider App
            </button>
          </div>
        </div>
      </section>

      <div className=" relative flex flex-wrap items-center justify-center max-w-[1679px] min-h-[329px] px-[20px] py-[15px] md:bg-white md:shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] md:rounded-[10px] gap-[50px] 2xl:-mt-[250px] 2xl:z-20 2xl:m-auto">
        {[
          {
            img: "mingcute_time-line.png",
            title: "Full Flexibility",
            desc: "Work on your terms. Pick the hours and areas that fit your lifestyle.",
          },
          {
            img: "ant-design_dollar-outlined.png",
            title: "Great Earnings",
            desc: "Get paid per delivery + keep 100% of your tips. The more you ride, the more you earn.",
          },
          {
            img: "bx_support.png",
            title: "Real-Time Support",
            desc: "We've got your back with in-app support and help whenever you need it.",
          },
          {
            img: "mynaui_users-group.png",
            title: "Rider Community Perks",
            desc: "Access exclusive rewards, fuel discounts, and events for SendIt riders.",
          },
        ].map((item, index) => (
          <div
            className="flex flex-col w-[351.03px] h-[197.37px] items-center justify-start"
            key={index}
          >
            <div className="w-[60px] h-[60px]">
              <Image
                src={`/assets/icons/${item.img}`}
                alt={item.title}
                width={60}
                height={60}
              />
            </div>
            <p className="font-poppins font-semibold text-[28px] text-[#252525] text-center leading-[57.41px] tracking-[0px] ">
              {item.title}
            </p>
            <p className="font-mono font-normal text-[20.96px] text-[#50555C] text-center leading-[27.07px] tracking-[0px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <section className="flex  flex-wrap w-full items-center justify-center px-10 mt-[25%] xl:mt-[15%] 2xl:mt-[10%] mb-[25%] xl:mb-[15%] 2xl:mb-[10%]">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          What You'll Need to Get Started
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-[30px] 2xl:gap-[190px] xl:mt-[5%]">
          <div className="flex w-[637px] h-[431.65px] items-center justify-center">
            <Image
              src="/assets/images/Illustration.png"
              alt="guide"
              width={637}
              height={431.65}
              className="w-[500px] h-auto 2xl:w-[637px] 2xl:h-[431.65px]"
            />
          </div>
          <div className="flex flex-col gap-y-[30px] ">
            {[
              { text: "A valid national ID" },
              { text: "A delivery method (bike, scooter, or car)" },
              { text: "A smartphone with the SendIt Courier app" },
              { text: "Proof of address (for verification)" },
            ].map((item, index) => (
              <div
                className="flex gap-[30px] items-center justify-start"
                key={index}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#17A448]/20">
                  <Image
                    src="/assets/icons/green-checked.png"
                    alt="green-checked"
                    width={23.2}
                    height={16.84}
                  />
                </div>
                <p className="font-poppins text-[20px] max-w-[607px] sm:text-[28px] text-[#252525] leading-normal tracking-[-0.96px]">
                  {item.text}
                </p>
              </div>
            ))}
            <p className="font-mono text-[24px] text-wrap text-[#454545] italic tracking-[-0.96px] w-[400px] md:w-[550px] max-w-[597px] min-h-[14px] z-10">
              *No delivery experience? No worries we'll guide you.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col mb-[25%] xl:mb-[15%] px-10">
        <p className="font-poppins font-semibold text-[35px] text-center text-[#252525] sm:text-[50px]">
          How to Start Earning in 4 Simple Steps
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[50px] 2xl:gap-[0px] mt-[15%] xl:mt-[5%]">
          {[
            {
              step: "1",
              title: "Sign Up ",
              desc: "Complete the online form it only takes a few minutes.",
            },
            {
              step: "2",
              title: "Get Verified",
              desc: "Upload your documents and pass our simple onboarding checks.",
            },
            {
              step: "3",
              title: "Activate Courier Profile",
              desc: "We'll guide you through a short intro and activate your courier dashboard.",
            },
            {
              step: "4",
              title: "Start Delivering",
              desc: "Accept orders, track your earnings, and grow with SendIt.",
            },
          ].map((item, index, arr) => (
            <div className="flex items-center justify-center" key={index}>
              <div className="flex flex-col items-center w-[351.03px] h-[304.23px] justify-center gap-[20px]">
                <div className="flex items-center justify-center w-[162.41px] h-[162.41px] rounded-full bg-[#17A448]/20">
                  <p className="font-mono font-bold text-[80px] text-[#17A448]">
                    {item.step}
                  </p>
                </div>
                <p className="font-poppins font-semibold text-[28px] text-center text-[#252525]">
                  {item.title}
                </p>
                <p className="font-mono text-[20.96px] text-center text-[#50555C]">
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
      <section className=" relative bg-[#17A448] flex flex-col items-center justify-center sm:px-[80px] sm:py-[40px] w-full h-[622px] sm:h-[836px]  mb-[25%] xl:mb-[15%] 2xl:mb-[10%]">
        <div className="absolute  bg-[url(/assets/images/Premium-Photo.png)]  bg-cover bg-center w-[1529px]  min-h-[622px] rounded-[20px] border border-white ">
          <div className="flex flex-col w-full min-h-[622px] items-center px-[530px] lg:px-[0px] bg-[#252525]/50 justify-center rounded-[20px] z-10 gap-[30px]">
            <p className="ffont-poppins font-bold text-[35px] max-w-[1000px] sm:text-[50px] text-[#F5F5F5] text-center tracking-[2%]">
              Your Ride. Your Hustle. Your Time.
            </p>
            <p className="font-mono text-[18px] sm:text-[22px] text-center text-[#E8E8E8]">
              Join thousands of riders delivering happiness and earning on their
              own terms.
            </p>
            <button className=" mt-6 px-[40px] py-[16px] rounded-full bg-[#F5F5F5] text-[20px] sm:text-[30px] text-[#252525] font-mono font-medium text-center">
              Become a Rider
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RidersPage;
