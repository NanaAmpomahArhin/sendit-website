import Image from "next/image";
import FireAnimation from "./FireAnimation";
import LickEmoji from "./LickEmoji";

const HomepageTopSection = () => {
  return (
    <>
      <section className="flex justify-between  w-full  relative">
        {/* First Image */}
        <div className="w-[471px] h-[313px]">
          <Image
            src="/assets/images/458-removebg-preview 1.png"
            alt="boxes"
            className="object-contain"
            width={471}
            height={313}
          />
        </div>

        {/* Second Image */}
        <div className="w-[501px] h-[498px] relative -top-10">
          <Image
            src="/assets/images/Banku_with_hot_sauce-removebg-preview 1.png"
            alt="food"
            className="object-contain "
            width={501}
            height={498}
          />
          <FireAnimation />
          <LickEmoji />
        </div>
      </section>
      <section className="flex flex-col w-full -mt-[10%] gap-[20x]">
        <div className="flex flex-col items-center gap-[15px] max-w-[843px] w-full h-[113px] m-auto relative">
          <p className="text-[50px] font-bold font-[Poppins] leading-0 m-0">
            SEND, SHOP, DINE & MORE
          </p>
          <p className="text-[50px] font-bold font-[Poppins] m-0">
            ALL IN ONE APP!
          </p>
          <div className="absolute w-[46px] height-[46px] -left-[55px] top-[40px]">
            <Image
              className="object-contain"
              src="/assets/icons/zigzag.png"
              alt="zigzag"
              width={41.8}
              height={11.7}
            />
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#F2C94C] absolute left-[155px] top-[60px]" />
        </div>
        <div className="flex flex-col items-center max-w-[843px] gap-[10px] w-full h-[113px] m-auto">
          <p className="font-[400] font-[roboto] text-[22px] leading-0 m-0">
            Order delicious meals , send parcels instantly, shop for anything
            you need,
          </p>
          <p className="font-[400] font-[roboto] text-[22px] m-0">
            and book events hassle-free, all in one powerful, easy-to-use-app
          </p>
        </div>
      </section>
      <section className="flex justify-between relative mb-[10%]">
        {/* Third Image */}
        <div className="w-[400px] h-[500px] absolute -top-80">
          <Image
            src="/assets/images/motor 1.png"
            alt="motor rider"
            className="object-contain"
            width={525}
            height={669}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-y-40">
          <button className="w-[308px] h-[59px] rounded-[10px] p-[10px] bg-gradient-to-r from-[#174448] to-[#5DC041] shadow-lg shadow-black/50 font-[roboto] text-white">
            Download App
          </button>
          <div className="w-[32px] h-[48px] mt-4">
            <Image
              src="/assets/icons/Group 9.png"
              alt="ellipse"
              width={32}
              height={48}
            />
          </div>
        </div>
        {/* Fourth Image */}
        <div className="size-[395px] absolute left-[1510px] -top-10">
          <Image
            className="object-contain"
            src="/assets/images/14662543_2011.i518.006_realistic_tickets-removebg-preview 1.png"
            alt="tickets"
            width={395}
            height={395}
          />{" "}
        </div>
      </section>
    </>
  );
};

export default HomepageTopSection;
