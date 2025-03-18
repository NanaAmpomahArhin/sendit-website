import Image from "next/image";

const HomepageMiddleSection = () => {
  return (
    <section className="flex flex-col -mt-[160px] px-4 sm:px-8 lg:px-16 lg:-mt-[100px] 2xl:-mt-[10%] md:mt-[5%]">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center max-w-[843px] w-full text-center mx-auto mb-5">
        <p className="font-semibold text-2xl sm:text-4xl lg:text-[50px] font-poppins leading-tight m-0">
          Your All-in-One Solution for
        </p>
        <p className="font-semibold text-2xl sm:text-4xl lg:text-[50px] font-poppins m-0">
          Everyday Needs
        </p>
      </div>

      {/* Subtext Section */}
      <div className="max-w-[843px] w-full flex flex-col items-center text-center mx-auto mb-10 lg:mb-[80px] md:mb-[20%]">
        <p className="font-normal text-[#50555C] font-roboto text-lg sm:text-xl lg:text-[22px] tracking-tighter lg:w-[920px] lg:mt-[25px]">
          From Food delivery to event booking, SendIt simplifies your daily
          tasks with ease and efficiency.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center items-center gap-x-7 mx-auto lg:gap-x-[9px] md:mb-[10%] xl:gap-x-[15%] xl:gap-y-[15%] 2xl:gap-x-[9px] 2xl:-mb-[6%]">
        {[
          {
            img: "emojione_pot-of-food.png",
            text: "Food Delivery",
            gradient: "from-[#17A448] to-[#F3F3F3]",
          },
          {
            img: "logos_parcel-icon.png",
            text: "Parcel Sending",
            gradient: "from-[#9747FF] to-[#F3F3F3]",
          },
          {
            img: "emojione_shopping-bags.png",
            text: "Online Shopping",
            gradient: "from-[#005DF4] to-[#F3F3F3]",
          },
          {
            img: "emojione-v1_admission-tickets.png",
            text: "Event Booking",
            gradient: "from-[#F400AB] to-[#F3F3F3]",
          },
        ].map((item, index, arr) => (
          <div
            key={index}
            className="flex gap-x-7 items-center lg:gap-x-[40px]"
          >
            {/* 🔹 Icon & Text */}
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <div
                className={`w-[100px] h-[100px] rounded-full bg-gradient-to-r ${item.gradient} backdrop-blur-sm flex justify-center items-center`}
              >
                <Image
                  src={`/assets/icons/${item.img}`}
                  className="object-contain"
                  width={69}
                  height={69}
                  alt={item.text}
                />
              </div>
              <p className="font-medium font-roboto tracking-normal text-lg sm:text-xl lg:text-[22px]">
                {item.text}
              </p>
            </div>

            {/* Separator (Visible Only on 2XL Screens) */}
            {index !== arr.length - 1 && (
              <div className="hidden 2xl:block w-[84px] h-[5px] rounded-[10px] bg-gradient-to-r from-[#DADADA] to-[#F5F5F5]"></div>
            )}
          </div>
        ))}
      </div>

      {/*  Business Partner Section */}
      <div className="flex flex-wrap justify-center gap-y-12 mt-16 mx-auto lg:mt-[180px] lg:m-auto sm:max-3xl:ml-[0px] ">
        {[
          {
            img: "young Black man ,.png",
            title: "Partner with Us",
            desc: "We connect your restaurant or shop with more customers while handling the deliveries for you.",
          },
          {
            img: "a young Black man with a professional and confident pose2.png",
            title: "Ride with SendIt!",
            desc: "Deliver food, parcels, and more while earning on your own schedule. You ride, we handle the rest!",
          },
          {
            img: "a young Black man with a professional and confident pose.png",
            title: "Host With SendIt",
            desc: "Sell tickets effortlessly, reach a wider audience, and make your events a success all in one place!",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center ml-[30px] w-full sm:w-[47%] lg:w-[30%] gap-5 text-left lg: items-start"
          >
            <Image
              className="rounded-[20px] w-full max-w-[400px]"
              width={400}
              height={352}
              src={`/assets/images/${item.img}`}
              alt={item.title}
            />
            <p className="font-poppins font-bold text-lg sm:text-xl lg:text-[20px]">
              {item.title}
            </p>
            <p className="font-poppins font-normal text-base sm:text-lg lg:text-[16px] leading-5 lg:text-left lg:w-[379px] h-[75px] lg:tracking-[0.5px] lg:-mt-[10px]">
              {item.desc}
            </p>
            <button
              className="max-w-[160px] -mt-[30px] h-[50px] flex  items-center px-4 py-2 rounded-[5px] bg-gradient-to-r from-[#17A448] to-[#5DC041] text-white gap-[10px] tracking-[-0.66px] lg:-mt-[10px]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get Started
              <Image
                src="/assets/icons/ep_right.png"
                width={24}
                height={24}
                alt="arrow1"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageMiddleSection;
