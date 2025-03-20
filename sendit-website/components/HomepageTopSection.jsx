import Image from "next/image";
import FireAnimation from "./FireAnimation";
import LickEmoji from "./LickEmoji";

const HomepageTopSection = () => {
  return (
    <>
      {/*  Image Section */}
      <section className="flex flex-row flex-wrap justify-center md:justify-between w-full relative gap-4 sm:gap-6">
        {/*  First Image */}
        <div className="w-[48%] sm:w-[45%] md:w-[40%] lg:w-[471px] h-auto">
          <Image
            src="/assets/images/458-removebg-preview 1.png"
            alt="boxes"
            className="object-contain w-full"
            width={471}
            height={313}
          />
        </div>

        {/* Second Image */}
        <div className="w-[48%] sm:w-[50%] md:w-[45%] lg:w-[501px] h-auto relative lg:-top-10">
          <Image
            src="/assets/images/Banku_with_hot_sauce-removebg-preview 1.png"
            alt="food"
            className="object-contain w-full"
            width={501}
            height={498}
          />
          <FireAnimation />
          <LickEmoji />
        </div>
      </section>

      {/* Responsive Text Section */}
      <section className="flex flex-col w-full text-center mt-30 lg:-mt-[10%] px-4">
        <div className="flex flex-col items-center gap-[15px] max-w-[843px] w-full mx-auto relative lg:mt-[62px]">
          <p className="text-2xl sm:text-4xl lg:text-[50px] font-bold font-poppins leading-[98%] tracking-[2%] m-0">
            SEND, SHOP, DINE & MORE
          </p>
          <p className="text-2xl sm:text-4xl lg:text-[50px] font-bold font-poppins m-0 mb-[45px]">
            ALL IN ONE APP!
          </p>

          {/* Decorative Elements */}
          <div className="absolute w-8  lg:w-[46px] h-8 lg:h-[46px] -left-2 lg:-left-[100px] top-12 lg:top-[70px] ">
            <Image
              className="object-contain"
              src="/assets/icons/zigzag.png"
              alt="zigzag"
              width={41.8}
              height={11.7}
            />
          </div>
          <div className="w-2.5 h-2.5 lg:w-[10px] lg:h-[10px] rounded-full bg-[#F2C94C] absolute right-[5%] lg:left-[175px] top-[130px]" />
        </div>

        {/* Subtext */}
        <div className="flex flex-col items-center text-center max-w-[843px] gap-2 w-full mx-auto text-lg sm:text-xl lg:text-[22px] font-mono">
          <p className="leading-tight m-0 text-[#50555C]">
            Order delicious meals, send parcels instantly, shop for anything you
            need,
          </p>
          <p className="m-0 text-[#50555C]">
            and book events hassle-free, all in one powerful, easy-to-use app.
          </p>
        </div>
        {/* Button Section */}
        <div className="flex flex-col mt-[60px] justify-center gap-y-[100px] items-center ">
          <button className="w-40 sm:w-[308px] h-12 sm:h-[59px] rounded-[10px] p-[10px] bg-gradient-to-r from-[#17A448] to-[#5DC041]  shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] font-mono text-white">
            Download App
          </button>
          <div className="w-8 sm:w-[32px] h-12 sm:h-[48px] mt-4 lg:mt-[200px]">
            <Image
              src="/assets/icons/Group 9.png"
              alt="ellipse"
              width={32}
              height={48}
            />
          </div>
        </div>
      </section>

      <section className="flex  justify-between items-center  mt-[30px] md:mb-[60px] lg:mb-[300px] lg:-mt-[600px] 2xl:-mt-[450px]  gap-6">
        {/*Third Image */}
        <div className="w-[48%]  sm:w-[45%] md:w-[40%]  lg:w-[400px] h-auto lg:top-[10%] 2xl:-mt-[17%] md:-top-[20%]  ">
          <Image
            src="/assets/images/motor 1.png"
            alt="motor rider"
            className="object-contain w-full"
            width={525}
            height={669}
          />
        </div>

        {/* Fourth Image */}
        <div className=" w-[48%] mt-[160px] sm:w-[45%] md:w-[40%]  lg:w-[400px] h-auto lg:top-[10%]  md:-top-[20%] 2xl:-mt-[0px] ">
          <Image
            className="object-contain"
            src="/assets/images/14662543_2011.i518.006_realistic_tickets-removebg-preview 1.png"
            alt="tickets"
            width={395}
            height={395}
          />
        </div>
      </section>
    </>
  );
};

export default HomepageTopSection;
