"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import FireAnimation from "./FireAnimation";
import LickEmoji from "./LickEmoji";

const foodImages = [
  "/assets/images/Banku_with_hot_sauce-removebg-preview 1.png",
  "/assets/images/Igname_pilée__sauce_d_arachide_et_poulet-removebg-preview.png",
  "/assets/images/download__24_-removebg-preview.png",
  "/assets/images/download__5_-removebg-preview.png",
  "/assets/images/download__23_-removebg-preview.png",
];

const HomepageTopSection = () => {
  const [foodImageIndex, setFoodImageIndex] = useState(0);
  const [startDisappearance, setStartDisappearance] = useState(false);
  const [showFirstText, setShowFirstText] = useState(true);
  const [showElements, setShowElements] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setFoodImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 2000);

    const disappearanceTimeout = setTimeout(() => {
      setStartDisappearance(true);
    }, foodImages.length * 2000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(disappearanceTimeout);
    };
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000); // Toggle text every 5s

    const elementsTimeout = setTimeout(() => setShowElements(true), 2000); // Show elements after 2s
    const shakeTimeout = setTimeout(() => setShake(true), 4000); // Start shaking effect after 4s

    return () => {
      clearInterval(textInterval);
      clearTimeout(elementsTimeout);
      clearTimeout(shakeTimeout);
    };
  }, []);

  return (
    <section className="relative h-[1182px] overflow-hidden">
      <div className="hidden 2xl:block absolute top-[620.36px] w-[339.459px] h-[339.459px] bg-[#5DC041] blur-[250px] overflow-hidden rotate-[-162.272deg] flex-shrink-0"></div>
      <div className="hidden 2xl:block w-[494.54px] h-[494.54px] bg-[#5DC041] blur-[500px] rotate-[162.27deg] overflow-hidden absolute top-[700px] "></div>
      <div className="hidden 2xl:block absolute top-[620.36px] right-[20px] w-[339.459px] h-[339.459px] bg-[#5DC041] overflow-hidden blur-[250px] rotate-[-162.272deg] flex-shrink-0"></div>
      <div className="hidden 2xl:block w-[494.54px] h-[494.54px] bg-[#5DC041] blur-[500px] rotate-[162.27deg] overflow-hidden absolute right-[20px] top-[700px] "></div>

      {startDisappearance && (
        <div className="hidden 2xl:flex  items-center  w-full pl-[7%] py-[195px] gap-x-[60px] mt-25 ">
          <div className="flex flex-col gap-[60px]">
            <p className="w-[582px] h-[105px] font-poppins font-bold text-[36px] leading-[98%] tracking-[2%]">
              WHEREVER YOU ARE, WE’VE GOT YOU! CONVENIENCE DELIVERED TO YOUR
              DOOR!
            </p>
            <button className="w-[308px] h-[59px] rounded-[10px] p-[10px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-md font-mono text-white text-[22px]">
              Download App
            </button>
          </div>
          <div>
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-[721.69px] h-[850px]"
            >
              <Image
                src="/assets/images/Iphone 14 - 3.png"
                alt="iphone 14-3"
                width={751.69}
                height={800}
                objectFit="cover"
                className="-mt-[120px]"
              />

              {/*  Elements around the iPhone */}
              {[
                {
                  name: "marker",
                  top: "220px",
                  left: "-290px",
                  content: (
                    <div className="flex items-center justify-center w-[324px] h-[91px] bg-white rounded-[30px] shadow-md relative px-10">
                      <p className="text-[18px] font-normal leading-[20px] tracking-[3%]">
                        Any apartment, any street, any city, wherever you are!
                      </p>
                      <div className="absolute -top-[50px] -left-[15px] flex justify-center items-center w-[72px] h-[72px] bg-[#5DC041] rounded-full shadow-md">
                        <Image
                          src="/assets/icons/marker(1) 1.png"
                          width={30}
                          height={30}
                          alt="marker"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  name: "check",
                  top: "333px",
                  right: "275px",
                  content: (
                    <div className="relative">
                      <div className="flex items-center justify-center w-[183px] h-[37px] bg-white rounded-[30px] shadow-md">
                        <p className="text-[12px] leading-[100%] tracking-[0%]">
                          Confirm Your Order
                        </p>
                      </div>
                      <div className="absolute -top-[32px] -right-[15px] flex justify-center items-center w-[44px] h-[44px] bg-[#70E000] rounded-full shadow-md">
                        <Image
                          src="/assets/icons/check(3) 1.png"
                          width={22}
                          height={22}
                          alt="checker"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  name: "aim",
                  top: "335px",
                  right: "440px",
                  content: (
                    <div className="flex items-center justify-center w-[72.71px] h-[72.71px] bg-[#17A448] rounded-[13px] absolute top-[100px] left-[50px] rotate-[30deg] backdrop-blur-[143.05px] debug">
                      <Image
                        src="/assets/icons/aim 1.png"
                        width={30.55}
                        height={30.55}
                        alt="aim"
                      />
                    </div>
                  ),
                },
                {
                  name: "hamburger",
                  top: "400px",
                  left: "-230px",
                  content: (
                    <Image
                      src="/assets/icons/Group 2.png"
                      width={400}
                      height={400}
                      className="object-cover"
                      alt="hamburger"
                    />
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={showElements ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  className="absolute"
                  style={{
                    top: item.top,
                    left: item.left || "unset",
                    right: item.right || "unset",
                  }}
                >
                  {item.content}
                </motion.div>
              ))}

              {/*Customers Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={showElements ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute top-[610px] right-[180px]"
              >
                <div className="flex flex-col gap-y-[5px] justify-center pl-[25px] relative w-[291px] h-[111px] bg-white rounded-[30px]">
                  <p className="font-mono font-medium w-[124px] h-[21px] text-[18px] leading-[100%] tracking-[0%]">
                    Our Customers
                  </p>
                  <div className="flex">
                    {[
                      "woman(3)",
                      "woman(1)",
                      "man(5)",
                      "woman(2)",
                      "man(4)",
                      "Group 3",
                    ].map((img, i) => (
                      <Image
                        key={i}
                        src={`/assets/icons/${img}.png`}
                        width={42}
                        height={42}
                        className="object-contain -ml-[5px] first:ml-0"
                        alt={img}
                      />
                    ))}
                  </div>
                  <div className="absolute flex items-center justify-center  w-[58px] h-[58px] -top-[30px] -right-[20px]  bg-[#FFBF35] rounded-full shadow-[0px_0.18px_0.9px_0px_#FFBF350E,0px_0.41px_2.04px_0px_#FFBF3514,0px_0.71px_3.56px_0px_#FFBF3519,0px_1.13px_5.65px_0px_#FFBF351D,0px_1.74px_8.72px_0px_#FFBF3521,0px_2.72px_13.6px_0px_#FFBF3526,0px_4.52px_22.58px_0px_#FFBF352D,0px_9.02px_45.11px_0px_#FFBF353B]">
                    <Image
                      src="/assets/icons/users.png"
                      width={26}
                      height={26}
                      alt="users"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <p className="font-mono font-normal text-[24px] leading-[98%] tracking-[2%] text-[#50555C] max-w-[500px] h-[72px] -ml-[300px]">
              Wherever you are, enjoy seamless shopping, fast deliveries, easy
              bookings, and exclusive rewards—all in one app.
            </p>
          </div>
        </div>
      )}
      <>
        <section className="relative flex justify-between w-full">
          {/* Left-side Image (Boxes) */}
          <motion.div
            className="hidden 2xl:block absolute left-0 2xl:w-[471px] h-auto"
            initial={{ scale: 1, opacity: 1, x: 0 }}
            animate={
              startDisappearance ? { scale: 0, opacity: 0, x: "15vw" } : {}
            }
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/458-removebg-preview 1.png"
              alt="boxes"
              className="object-contain w-full"
              width={471}
              height={313}
            />
          </motion.div>

          {/* Right-side Image (Food) - Cycles through different images */}
          <motion.div
            className="hidden 2xl:block -top-20 absolute right-0 2xl:w-[501px] h-auto"
            initial={{ scale: 1, opacity: 1, x: 0 }}
            animate={
              startDisappearance ? { scale: 0, opacity: 0, x: "-15vw" } : {}
            }
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          >
            <Image
              key={foodImageIndex}
              src={foodImages[foodImageIndex % foodImages.length]} // Cycles through images
              alt="food"
              className="object-contain w-full"
              width={501}
              height={498}
            />
          </motion.div>
        </section>

        <section className="relative flex items-center w-full h-auto">
          {/* Bottom-left Image (Motor Rider) */}
          <motion.div
            className="hidden 2xl:block absolute bottom-0 top-50 2xl:w-[525px] h-[669px]"
            initial={{ scale: 1, opacity: 1, y: 0 }}
            animate={
              startDisappearance ? { scale: 0, opacity: 0, y: "-10vh" } : {}
            }
            transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/motor 1.png"
              alt="motor rider"
              className="object-contain w-full"
              width={525}
              height={669}
            />
          </motion.div>

          {/* Bottom-right Image (Tickets) */}
          <motion.div
            className="hidden 2xl:block absolute top-150  bottom-0 left-[80%] 2xl:w-[395px] h-[395px]"
            initial={{ scale: 1, opacity: 1, y: 0 }}
            animate={
              startDisappearance ? { scale: 0, opacity: 0, y: "-10vh" } : {}
            }
            transition={{ duration: 1.5, delay: 1.1, ease: "easeInOut" }}
          >
            <Image
              className="object-contain"
              src="/assets/images/14662543_2011.i518.006_realistic_tickets-removebg-preview 1.png"
              alt="tickets"
              width={395}
              height={395}
            />
          </motion.div>
        </section>
        <section className="flex relative flex-col w-full text-center mt-50 lg:mt-40 xl:mt-40 2xl:mt-80 px-4">
          {/*Fire & Lick Emoji - Fade out when text changes */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showFirstText ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FireAnimation />
            <LickEmoji />
          </motion.div>

          {/*Text Animation */}
          <div className="flex flex-col items-center gap-[15px] max-w-[843px] w-full mx-auto relative ">
            <motion.p
              key={showFirstText}
              initial={{ opacity: 0, x: showFirstText ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: showFirstText ? 50 : -50 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-4xl lg:text-[50px] font-bold font-poppins leading-[98%] tracking-[2%] m-0"
            >
              {showFirstText
                ? "SEND, SHOP, DINE & MORE"
                : "HASSLE-FREE DELIVERY,"}
            </motion.p>

            <motion.p
              key={showFirstText + "-sub"}
              initial={{ opacity: 0, x: showFirstText ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: showFirstText ? -50 : 50 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-4xl lg:text-[50px] font-bold font-poppins m-0 mb-[45px]"
            >
              {showFirstText ? "ALL IN ONE APP!" : "WHEREVER YOU ARE!"}
            </motion.p>
          </div>

          {/*Subtext Animation */}
          <motion.div
            key={showFirstText + "-desc"}
            initial={{ opacity: 0, x: showFirstText ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: showFirstText ? -50 : 50 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center max-w-[843px] gap-2 w-full mx-auto text-lg sm:text-xl lg:text-[22px] font-mono"
          >
            <p className="leading-tight m-0 text-[#50555C]">
              {showFirstText
                ? "Order delicious meals, send parcels instantly, shop for anything you need, and book events hassle-free, all in one powerful, easy-to-use app!"
                : "Wherever you are, enjoy seamless shopping, fast deliveries, easy bookings, and exclusive rewards—all in one app."}
            </p>
          </motion.div>

          {/*Button & iPhone Animation */}
          <div className="flex flex-col mt-[40px] justify-center gap-y-[20px] items-center">
            <button className="w-[205px] h-[39.27px] rounded-[6.66px] p-[6.66px] bg-gradient-to-r from-[#17A448] to-[#5DC041] shadow-md font-mono text-white">
              Download App
            </button>

            {/*iPhone & Surrounding Elements */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-[300px] h-[450.22px] ml-[120px]"
            >
              <Image
                src="/assets/images/Iphone 14 - 2.png"
                alt="iphone 14"
                layout="fill"
                objectFit="cover"
              />

              {/*  Elements around the iPhone */}
              {[
                {
                  name: "marker",
                  top: "95px",
                  left: "-90px",
                  content: (
                    <div className="flex items-center justify-center w-[147.27px] h-[41.36px] bg-white rounded-[13.64px] shadow-md relative">
                      <p className="text-[8.18px] leading-[9.09px] tracking-[3%]">
                        Any apartment, any street, any city, wherever you are!
                      </p>
                      <div className="absolute -top-[25px] -left-[15px] flex justify-center items-center w-[32.73px] h-[32.73px] bg-[#5DC041] rounded-full shadow-md">
                        <Image
                          src="/assets/icons/marker(1) 1.png"
                          width={13.64}
                          height={13.64}
                          alt="marker"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  name: "check",
                  top: "150px",
                  right: "25px",
                  content: (
                    <div className="relative">
                      <div className="flex items-center justify-center w-[115.03px] h-[23.26px] bg-white rounded-[18.86px] shadow-md">
                        <p className="text-[7.54px] leading-[100%] tracking-[0%]">
                          Confirm Your Order
                        </p>
                      </div>
                      <div className="absolute -top-[19px] -right-[6px] flex justify-center items-center w-[27.66px] h-[27.66px] bg-[#70E000] rounded-full shadow-md">
                        <Image
                          src="/assets/icons/check(3) 1.png"
                          width={13.83}
                          height={13.83}
                          alt="checker"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  name: "aim",
                  top: "125px",
                  right: "135px",
                  content: (
                    <div className="flex items-center justify-center w-[41.11px] h-[41.11px] bg-[#17A448] rounded-[7.35px] absolute top-[100px] left-[50px] rotate-[30deg] backdrop-blur-[143.05px] debug">
                      <Image
                        src="/assets/icons/aim 1.png"
                        width={17.27}
                        height={17.27}
                        alt="aim"
                      />
                    </div>
                  ),
                },
                {
                  name: "hamburger",
                  top: "275px",
                  left: "-70px",
                  content: (
                    <Image
                      src="/assets/icons/Group 2.png"
                      width={150.24}
                      height={150.24}
                      className="object-cover"
                      alt="hamburger"
                    />
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={showElements ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  className="absolute"
                  style={{
                    top: item.top,
                    left: item.left || "unset",
                    right: item.right || "unset",
                  }}
                >
                  {item.content}
                </motion.div>
              ))}

              {/*Customers Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={showElements ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute top-[330px] right-[10px]"
              >
                <div className="flex flex-col gap-y-[5px] justify-center pl-[25px] relative w-[164.1px] h-[62.59px] bg-white rounded-[16.92px]">
                  <p className="font-mono font-medium w-[70px] h-[12px] text-[10.15px] leading-[100%] tracking-[0%]">
                    Our Customers
                  </p>
                  <div className="flex">
                    {[
                      "woman(3)",
                      "woman(1)",
                      "man(5)",
                      "woman(2)",
                      "man(4)",
                      "Group 3",
                    ].map((img, i) => (
                      <Image
                        key={i}
                        src={`/assets/icons/${img}.png`}
                        width={23.68}
                        height={23.68}
                        className="object-contain -ml-[5px] first:ml-0"
                        alt={img}
                      />
                    ))}
                  </div>
                  <div className="absolute flex items-center justify-center  w-[32.71px] h-[32.71px] -top-[20px] -right-[5px]  bg-[#FFBF35] rounded-full shadow-[0px_0.18px_0.9px_0px_#FFBF350E,0px_0.41px_2.04px_0px_#FFBF3514,0px_0.71px_3.56px_0px_#FFBF3519,0px_1.13px_5.65px_0px_#FFBF351D,0px_1.74px_8.72px_0px_#FFBF3521,0px_2.72px_13.6px_0px_#FFBF3526,0px_4.52px_22.58px_0px_#FFBF352D,0px_9.02px_45.11px_0px_#FFBF353B]">
                    <Image
                      src="/assets/icons/users.png"
                      width={14.66}
                      height={14.66}
                      alt="users"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </>
    </section>
  );
};

export default HomepageTopSection;
