import MultiStepForm from "@/components/MultiStepForm";
import Image from "next/image";
import React from "react";

const FleetPage = () => {
  return (
    <>
      <section className="relative  w-full flex justify-center items-center mb-[15%] 2xl:mb-[7%]  2xl:h-[982px]">
        <div className="absolute inset-0 bg-[url('/assets/images/fleet-bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9B9B9B]/50 via-[#0E0E0E]/55 to-[#666666]/2"></div>

        <div className="relative pb-[30px]  mt-[215px] flex flex-col items-center gap-y-[30px] 2xl:gap-y-[55px]  2xl:mt-[70px]">
          <button className="max-w-[413px] max-h-[48px]  rounded-[50px] border-[1px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] text-[#17A448]  font-mono font-light text-[15px] sm:text-[16px] gap-[10px]">
            Join the Sendit network today and grow your business!
          </button>
          <div className="flex flex-col items-center m-auto gap-y-[15px] text-center">
            <p className="font-poppins text-[#F5F5F5] font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              TURN YOUR FLEET INTO A
            </p>
            <p className="font-poppins text-[#F5F5F5] font-bold text-[28px]  sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              HIGH EARNING PORWERHOUSE
            </p>
          </div>

          <div className="flex flex-col max-w-[897px] max-h-[64px] px-3 lg:px-5  text-center text-[16px] sm:text-[19px] lg:text-[22px] font-mono  leading-7  tracking-normal">
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[#E8E8E8] font-normal"
            >
              Our platform provides the tools and technology to maximize your
              fleet's potential, increase earnings, and scale your business
              efficiently.
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <button className="w-[308px] h-[69px] rounded-[10px] p-[11.69px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-[0px_9.36px_37.42px_0px_rgba(0,0,0,0.08)] font-mono text-white leading-[32px] tracking-[0px] text-[25.73px] font-medium">
              Become a Fleet Partner
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-[20px]">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          Key Benefits
        </p>
        <div className="flex flex-wrap items-center justify-center mt-30 gap-[30px]">
          {[
            {
              title: "Maximize Earnings",
              desc: "More deliveries, more profits with our optimized routing and demand prediction.",
            },
            {
              title: "Flexible Operations",
              desc: "Choose routes and peak hours that work best for your fleet and business.",
            },
            {
              title: "Seamless Management",
              desc: "Real-time tracking & optimized dispatch to manage your fleet efficiently.",
            },
            {
              title: "Reliable Support",
              desc: "Dedicated assistance for fleet partners to ensure smooth operations.",
            },
          ].map((item, index) => (
            <div
              className="flex flex-col items-center justify-center gap-[15px] w-[364px] h-[330px] border-[1px] border-[#DCE0E4] rounded-[8px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]"
              key={index}
            >
              <div className="flex items-center justify-center w-[87.96px] h-[87.96px] rounded-full bg-[#17A448]/20">
                <Image
                  src="/assets/icons/tabler_search.png"
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>
              <p className="font-poppins font-semibold text-[28px] text-center leading-[35px] w-[296px] text-[#252525]">
                {item.title}
              </p>
              <p className="w-[296px] font-mono text-[20.96px] text-center leading-[30px] text-[#50555C]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-[20px] mt-40">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          How It Works
        </p>
        <div className="flex flex-wrap justify-center  gap-[90px] mt-40">
          {[
            {
              step: "1",
              title: "Sign Up & Get Verified",
              desc: "Register your fleet & complete our simple verification process to get started.",
            },
            {
              step: "2",
              title: "Onboard Your Riders",
              desc: "Add riders, set routes, and start delivering with our easy-to-use platform.",
            },
            {
              step: "3",
              title: "Optimize & Earn",
              desc: "Use our tools to track performance & scale operations for maximum profit.",
            },
          ].map((item, index) => (
            <div
              className="relative flex flex-col w-[477px] h-[264px] items-center justify-center gap-[20px] border-[1px] border-[#DCE0E4] rounded-[8px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)]"
              key={index}
            >
              <div className="absolute flex -top-15 items-center justify-center w-[84.16px] h-[84.16px] rounded-full bg-[#17A448]">
                <p className="font-poppins font-semibold text-[42px] text-[#F5F5F5]">
                  {item.step}
                </p>
              </div>
              <p className="font-poppins font-semibold text-[28px] text-center leading-[35px] w-[450px] text-[#252525]">
                {item.title}
              </p>
              <p className="w-[296px] sm:w-[450px] font-mono text-[20.96px]  text-center leading-[30px] text-[#50555C]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-60 gap-[40px]">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          What Our Fleet Say
        </p>
        <div className="flex flex-col max-w-[1246px] 2xl:w-[1246px] min-h-[434px] bg-[#F0F0F0] items-center justify-center mt-20 rounded-[10px] gap-[40px]">
          <p className="font-poppins font-medium text-[24px] max-w-[1056px] italic text-[#50555C] text-center">
            Since joining SendIt, our fleet's efficiency has doubled, and
            revenue has grown significantly. The platform's real-time tracking
            and optimized routing have transformed our business.
          </p>
          <div className="flex items-center justify-center gap-[30px]">
            <img
              src="/assets/images/business-executives-participating-business-meeting.png"
              alt="profile picture"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-[10px]">
              <p className="font-mono font-semibold text-[#252525] text-[24px]">
                Jonny Amartey
              </p>
              <p className="font-mono text-[20px] text-[#50555C]">
                CEO, FastTrack Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-40 mb-40">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          Ready to Earn More with Your Fleet?
        </p>
        <div>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
};

export default FleetPage;
