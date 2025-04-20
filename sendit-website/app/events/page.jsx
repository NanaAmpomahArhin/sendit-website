import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import React from "react";

const EventsPage = () => {
  return (
    <>
      <section className="relative  w-full flex justify-center items-center mb-[15%] 2xl:mb-[7%]  2xl:h-[982px]">
        <div className="absolute inset-0 bg-[url('/assets/images/events.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#9B9B9B]/50 via-[#0E0E0E]/55 to-[#666666]/2"></div>

        <div className="relative pb-[30px]  mt-[215px] flex flex-col items-center gap-y-[30px] 2xl:gap-y-[55px]  2xl:mt-[70px]">
          <button className="max-w-[413px] max-h-[48px]  rounded-[50px] border-[1px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] text-[#17A448] font-mono font-light text-[15px] sm:text-[16px] gap-[10px]">
            Join the Sendit network today and grow your business!
          </button>
          <div className="flex flex-col items-center m-auto gap-y-[15px] text-center">
            <p className="font-poppins text-[#F5F5F5] font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              BRINGING EVENTS TO
            </p>
            <p className="font-poppins text-[#F5F5F5] font-bold text-[28px]  sm:text-[40px] lg:text-[50px] leading-[98%] tracking-[2%] max-w-[90%] sm:max-w-[897px]">
              YOUR DOORSTEP
            </p>
          </div>

          <div className="flex flex-col max-w-[897px] max-h-[64px] px-3 lg:px-5  text-center text-[16px] sm:text-[19px] lg:text-[22px] font-mono  leading-7  tracking-normal">
            <p
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[#E8E8E8] font-normal"
            >
              From concerts and comedy shows to festivals and private hangouts,
              browse, buy, and get your ticket delivered with SendIt.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[30px]">
            <button className="w-[308px] h-[69px] rounded-[10px] p-[11.69px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-[0px_9.36px_37.42px_0px_rgba(0,0,0,0.08)] font-mono text-white leading-[32px] tracking-[0px] text-[25.73px] font-medium">
              Host With Sendit
            </button>
            <button className="w-[314.04px] h-[69px] rounded-[10px] p-[11.69px] border  border-[#F5F5F5] shadow-[0px_9.36px_37.42px_0px_rgba(0,0,0,0.08)] text-white leading-[32px] tracking-[0px] text-[25.73px] font-medium">
              Explore Events
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-[20px]">
        <p className="font-poppins font-semibold text-[35px] text-[#252525] text-center sm:text-[50px] tracking-tight">
          What is SendIt Events?
        </p>
        <p className="font-mono text-[22px] px-5 sm:text-[27.82px] text-center text-[#50555C] max-w-[1241px]">
          SendIt Events is your go-to gateway for discovering the most exciting
          happenings around you and getting your ticket delivered right to your
          door. No printing, no pickups just pure experience.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center mt-10 2xl:mt-20 gap-y-[40px] gap-x-[30px]  2xl:gap-x-[45px]">
          {[
            {
              img: "concert.png",
              title: "Trending",
              titleColor: "#D27229",
              desc: "Music Concert",
            },
            {
              img: "3698372_9714 (1).png",
              title: "Popular",
              titleColor: "#0071BC",
              desc: "Nightlife & Parties",
            },
            {
              img: "3698372_9714 (2).png",
              title: "Epic",
              titleColor: "#D33B23",
              desc: "Food Festivals",
            },
            {
              img: "3698372_9714 (3).png",
              title: "New",
              titleColor: "#D02E84",
              desc: "Fashion Show",
            },
          ].map((item, index) => (
            <div className="relative flex w-[381px] h-[459px]" key={index}>
              <Image
                src={`/assets/images/${item.img}`}
                alt={item.title}
                width={381}
                height={459}
              />
              <div className="absolute left-[20px] bottom-[10px] flex flex-col items-start">
                <div
                  className="max-w-[117px] max-h-[43px] px-[15px] py-[1px] rounded-[50px] flex items-center justify-center"
                  style={{ backgroundColor: item.titleColor }}
                >
                  <p className="font-mono font-medium text-white text-[22px] tracking-0 text-center">
                    {item.title}
                  </p>
                </div>
                <p className="font-mono font-semibold text-[32px] text-[#F5F5F5] tracking-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center mt-20 2xl:mt-60 sm:mt-30 px-5 justify-center gap-5">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525]">
          Book. Pay. Delivered.
        </p>
        <p className="max-w-[988px] font-mono text-[22px] sm:text-[27.82px] text-center text-[#50555C]">
          Getting tickets to your favorite events has never been easier. Three
          simple steps to experience the moment
        </p>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-10 2xl:mt-20">
          {[
            {
              img: "tabler_search.png",
              title: "Browse Events",
              desc: "From parties to workshops, choose what excites you.",
            },
            {
              img: "gala_secure.png",
              title: "Secure Checkout",
              desc: "Pay via card or mobile money, all in-app or online.",
            },
            {
              img: "icon-park-outline_delivery.png",
              title: "Get it Delivered",
              desc: "We’ll deliver your ticket in secure packaging, fast.",
            },
          ].map((item, index) => (
            <div
              className="flex flex-col max-w-[521px] w-full xl:w-[521px] h-[290px] items-start justify-center border border-[#DCE0E4] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] rounded-[8px] px-6 py-8 gap-[10px]"
              key={index}
            >
              <div className="flex items-center justify-center w-[87.96px] h-[87.96px] rounded-full bg-[#17A448]/20">
                <Image
                  src={`/assets/icons/${item.img}`}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>
              <p className="font-poppins font-semibold text-[28px] text-[#252525]">
                {item.title}
              </p>
              <p className="w-[351.03px] font-mono text-[20.96px] text-[#50555C]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-16 mt-20 sm:mt-30 2xl:mt-60">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="font-poppins font-medium text-center lg:text-left text-[18px] sm:text-[20px] text-[#17A448]">
            Ticket Delivery
          </p>
          <p className="font-poppins font-semibold text-center lg:text-left text-[28px] sm:text-[40px] lg:text-[50px] text-[#252525]">
            Track Your Ticket
          </p>
          <p className="font-mono text-[18px] sm:text-[22px] lg:text-[24px] text-[#50555C] text-center lg:text-left max-w-full">
            Keep an eye on your delivery with real-time updates. Know exactly
            when your tickets will arrive.
          </p>

          {/* Status Items */}
          <div className="flex flex-col gap-6 mt-4">
            {[
              { status: "Ticket Purchased", time: "Today, 2:30 PM" },
              { status: "Out for Delivery", time: "Today,  4:15 PM" },
              { status: "Delivered", time: "Estimated; Today, 5:30 PM" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#17A448]/20">
                  <Image
                    src="/assets/icons/material-symbols_check.png"
                    alt="check"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="font-poppins font-semibold text-[18px] sm:text-[24px] text-[#252525]">
                    {item.status}
                  </p>
                  <p className="font-mono text-[16px] sm:text-[20px] text-[#50555C]">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 max-w-[794px]">
          <Image
            src="/assets/icons/map.png"
            alt="map"
            width={749}
            height={546}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-[30px] xl:gap-[200px] px-5 mt-25 ">
        <div className=" 2xl:mt-40 relative w-[704.51px] h-[489.57px]">
          <Image
            src="/assets/images/people-festival.png"
            alt="festival"
            width={564}
            height={454}
          />
          <div className="flex flex-col gap-[10px] absolute -right-[10px] md:right-[70px] top-[13px] sm:top-[70px] w-[366px] h-[207px] rounded-[10px] rotate-[6.91deg] bg-white border border-[#DCE0E4] shadow-[0px_8px_32px_0px_#00000014] px-7 py-6">
            <div className="flex gap-[20px]">
              <div className="flex items-center justify-center w-[59.2px] h-[59.2px] rounded-full bg-[#17A448]">
                <Image
                  src="/assets/icons/material-symbols_check_white.png"
                  alt="white-checked"
                  width={26.92}
                  height={26.92}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-mono font-medium text-[20px] text-[#252525]">
                  Weekly Payout
                </p>
                <p className="font-mono text-[20.96px] text-[#50555C]">
                  Transaction ID: #38405
                </p>
              </div>
            </div>
            <p className="font-mono font-bold text-[28px] text-[#252525]">
              GHS 4,250.00
            </p>
            <p className="font-mono text-[20.96px] text-[#17A448]">
              +12.5% from last event
            </p>
          </div>
          <div className="absolute flex items-center justify-center gap-[30px] -left-[20px] md:-left-[40px] bottom-[20px] rotate-[4deg] w-[366px] h-[164px] bg-white border border-[#DCE0E4] rounded-[10px] shadow-[0px_8px_32px_0px_#00000014] px-5 ">
            <div className="flex flex-col">
              <p className="font-mono text-[20.96px] text-[#50555C]">Sold</p>
              <p className="font-mono font-semibold text-[24px] text-[#17A448]">
                156
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-[20.96px] text-[#50555C]">
                Remaining
              </p>
              <p className="font-mono font-semibold text-[24px] text-[#50555C]">
                4
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-[20.96px] text-[#50555C]">
                Capacity
              </p>
              <p className="font-mono font-semibold text-[24px] text-[#252525]">
                200
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center  gap-[25px] mt-25 xl:mt-10 2xl:mt-25">
          <p className="max-w-[758px] flex  font-poppins font-semibold text-[35px] sm:text-[50px] text-[#252525]">
            Hosting an Event? We’ve Got You!
          </p>
          <p className="max-w-[758px] font-mono text-[22px] sm:text-[27.82px] text-[#50555C]">
            Focus on creating amazing experiences. Let us handle the ticketing,
            sales, and delivery logistics for you.
          </p>
          <div className="flex flex-col gap-[30px]">
            {[
              {
                title: "Sell Without Stress",
                desc: "We handle transactions and ticket delivery for you.",
              },
              {
                title: "Track Performance",
                desc: "View real-time sales insights and manage your listings.",
              },
              {
                title: "Get Paid Fast",
                desc: "Receive your earnings quickly and securely.",
              },
            ].map((item, index) => (
              <div
                className="flex gap-[30px] items-center justify-start"
                key={index}
              >
                <div className="flex items-center justify-center w-[66.16px] h-[66.16px] rounded-full bg-[#17A448]/20">
                  <Image
                    src="/assets/icons/material-symbols_check.png"
                    alt="check"
                    width={30.09}
                    height={30.09}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="font-poppins font-semibold text-[22px] sm:text-[28px] text-[#252525]">
                    {item.title}
                  </p>
                  <p className="max-w-[380px] font-mono text-[20.96px] text-[#50555C]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center w-[312px] h-[96px] gap-[20px] rounded-[50px] px-[10px] py-[15px] text-[#F5F5F5] bg-[#17A448]">
            <p className="font-mono font-medium text-[30px]">Start Hosting</p>{" "}
            <Image
              src="/assets/icons/ep_right.png"
              width={32}
              height={32}
              alt="white-right-arrow"
            />
          </button>
        </div>
      </section>

      <section className="flex flex-col mt-40 ">
        <p className="text-center font-poppins font-semibold text-[35px] sm:text-[50px] text-[#252525]">
          What Organizers Say
        </p>
        <p className="font-mono text-[22px] sm:text-[27.82px] mt-3 text-center text-[#50555C]">
          Hear from event host who’ve transformed their event experience with
          Sendit.
        </p>
        <div className="mt-24">
          <TestimonialCarousel />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full mt-[100px] 2xl:mt-[200px] mb-[240px] px-4 sm:px-6 lg:px-10">
        <p className="text-center font-poppins font-semibold text-[28px] sm:text-[40px] lg:text-[50px] text-[#252525]">
          Ready To Get Started?
        </p>

        <p className="max-w-[988px] font-mono text-[18px] sm:text-[22px] lg:text-[27.82px] mt-3 text-center text-[#50555C]">
          Join the Sendit Event Community today. Start exploring or hosting
          events in just a few clicks.
        </p>

        <div className="flex flex-col lg:flex-row mt-12 md:mt-20 items-center justify-center gap-10 w-full">
          {/* Card 1 */}
          <div className="flex flex-col py-8 px-6 sm:py-10 sm:px-10 gap-6 w-full max-w-[668px] h-auto rounded-[10px] border border-[#DCE0E4] shadow-[0px_8px_32px_0px_#0000000F]">
            <p className="font-bold text-[22px] sm:text-[28px] lg:text-[32px] text-[#252525]">
              Want a ticket to your next favorite event?
            </p>
            <p className="font-mono text-[#50555C] text-[18px] sm:text-[22px] lg:text-[27.82px]">
              Browse upcoming events, buy tickets, and have them delivered right
              to your door. No printing, no pickups, just experience.
            </p>
            <button className="flex items-center justify-center w-full h-[70px] sm:h-[85px] rounded-full py-4 px-6 gap-4 bg-[#17A448]">
              <Image
                src="/assets/icons/material-symbols_search.png"
                alt="white-search"
                width={32}
                height={32}
              />
              <p className="font-mono font-medium text-[18px] sm:text-[22px] lg:text-[27.82px] text-white">
                Explore Upcoming Events
              </p>
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col py-8 px-6 sm:py-10 sm:px-10 gap-6 w-full max-w-[668px] h-auto rounded-[10px] border border-[#DCE0E4] shadow-[0px_8px_32px_0px_#0000000F]">
            <p className="font-bold text-[22px] sm:text-[28px] lg:text-[32px] text-[#252525]">
              Hosting soon? Let’s help you sell out.
            </p>
            <p className="font-mono text-[#50555C] text-[18px] sm:text-[22px] lg:text-[27.82px]">
              List your event, set your prices, and let us handle ticketing and
              delivery. Focus on creating a memorable experience.
            </p>
            <button className="flex items-center justify-center w-full h-[70px] sm:h-[85px] rounded-full py-4 px-6 gap-4 bg-[#17A448]">
              <Image
                src="/assets/icons/mdi_plus.png"
                alt="white plus"
                width={32}
                height={32}
              />
              <p className="font-mono font-medium text-[18px] sm:text-[22px] lg:text-[27.82px] text-white">
                Host with Sendit
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
