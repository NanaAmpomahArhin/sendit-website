import Image from "next/image";

const HomepageMiddleSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col justify-center items-center w-[843px] h-[104px] m-auto mb-5">
        <p className="font-medium text-[50px] font-[Poppins] leading-5 m-0">
          Your All-in-One Solution for
        </p>
        <p className="font-medium text-[50px] font-[Poppins] m-0">
          Everyday Needs
        </p>
      </div>
      <div className="w-[843px] h-[64px] flex flex-col justify-center items-center m-auto mb-20">
        <p className="font-normal font-[roboto] text-[22px]">
          From Food delivery to event booking, Sendit simplifies your daily
          tasks with ease and
        </p>
        <p className="font-normal font-[roboto] text-[22px]">efficiency</p>
      </div>
      <div className="flex m-auto gap-x-7 mb-25">
        <div className="flex gap-x-7 items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#17A448] to-[#F3F3F3] backdrop-blur-sm flex justify-center items-center">
              <Image
                src="/assets/icons/emojione_pot-of-food.png"
                className="object-contain"
                width={69}
                height={69}
                alt="pot-of-food"
              />
            </div>
            <p className="font-normal font-[roboto] text-[22px]">
              Food Delivery
            </p>
          </div>
          <div className="w-[84px] h-[5px] rounded-[10px] bg-gradient-to-r  from-[#DADADA] to-[#F5F5F5]"></div>
        </div>
        <div className="flex gap-x-7 items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#9747FF] to-[#F3F3F3] backdrop-blur-sm flex justify-center items-center">
              <Image
                src="/assets/icons/logos_parcel-icon.png"
                className="object-contain"
                width={69}
                height={69}
                alt="parcel"
              />
            </div>
            <p className="font-normal font-[roboto] text-[22px]">
              Parcel Sending
            </p>
          </div>
          <div className="w-[84px] h-[5px] rounded-[10px] bg-gradient-to-r  from-[#DADADA] to-[#F5F5F5]"></div>
        </div>
        <div className="flex gap-x-7 items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#005DF4] to-[#F3F3F3] backdrop-blur-sm flex justify-center items-center">
              <Image
                src="/assets/icons/emojione_shopping-bags.png"
                className="object-contain"
                width={69}
                height={69}
                alt="online-shopping"
              />
            </div>
            <p className="font-normal font-[roboto] text-[22px]">
              Online Shopping
            </p>
          </div>
          <div className="w-[84px] h-[5px] rounded-[10px] bg-gradient-to-r  from-[#DADADA] to-[#F5F5F5]"></div>
        </div>
        <div className="flex gap-x-7 items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#F400AB] to-[#F3F3F3] backdrop-blur-sm flex justify-center items-center">
              <Image
                src="/assets/icons/emojione-v1_admission-tickets.png"
                className="object-contain"
                width={69}
                height={69}
                alt="event-booking"
              />
            </div>
            <p className="font-normal font-[roboto] text-[22px]">
              Event Booking
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-7 m-auto mb-25">
        <div className="flex flex-col gap-y-5">
          <Image
            className="rounded-[20px]"
            width={400}
            height={352}
            src="/assets/images/young Black man ,.png"
            alt="woman-vendor"
          />
          <p className="font-[Poppins] font-bold text-[20px] leading-0">
            Partner with Us
          </p>
          <p className="font-[Poppins] font-normal text-[16px] leading-5">
            We connect your restaurant or shop with <br /> more customers while
            handling the <br />
            deliveries for you
          </p>
          <button className="max-w-[160px] max-h-[50px] flex justify-between items-center px-[13px] py-[10px] rounded-[5px] bg-gradient-to-r from-[#17A448] to-[#5DC041] text-white font-[Plus Jakarta Sans]">
            {" "}
            Get Started{" "}
            <Image
              src="/assets/icons/ep_right.png"
              width={24}
              height={24}
              alt="arrow1"
            />
          </button>
        </div>
        <div className="flex flex-col gap-y-5">
          <Image
            className="rounded-[20px]"
            width={400}
            height={352}
            src="/assets/images/a young Black man with a professional and confident pose2.png"
            alt="rider"
          />
          <p className="font-[Poppins] font-bold text-[20px] leading-0">
            Ride with SendIt!
          </p>
          <p className="font-[Poppins] font-normal text-[16px] leading-5">
            Deliver food, parcels, and more while <br /> earning on your own
            schedule. You ride, we <br /> handle the rest!
          </p>
          <button className="max-w-[160px] max-h-[50px] flex justify-between items-center px-[13px] py-[10px] rounded-[5px] bg-gradient-to-r from-[#17A448] to-[#5DC041] text-white font-[Plus Jakarta Sans]">
            {" "}
            Get Started{" "}
            <Image
              src="/assets/icons/ep_right.png"
              width={24}
              height={24}
              alt="arrow1"
            />
          </button>
        </div>
        <div className="flex flex-col gap-y-5">
          <Image
            className="rounded-[20px]"
            width={400}
            height={352}
            src="/assets/images/a young Black man with a professional and confident pose.png"
            alt="ticket sales"
          />
          <p className="font-[Poppins] font-bold text-[20px] leading-0">
            Host With SendIt
          </p>
          <p className="font-[Poppins] font-normal text-[16px] leading-5">
            Sell tickets effortlessly, reach a wider <br />
            audience, and make your events a <br /> success all in one place!
          </p>
          <button className="max-w-[160px] max-h-[50px] flex justify-between items-center px-[13px] py-[10px] rounded-[5px] bg-gradient-to-r from-[#17A448] to-[#5DC041] text-white font-[Plus Jakarta Sans]">
            {" "}
            Get Started{" "}
            <Image
              src="/assets/icons/ep_right.png"
              width={24}
              height={24}
              alt="arrow1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageMiddleSection;
