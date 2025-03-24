"use client";
import Lottie from "lottie-react";
import emojiLick from "@/public/assets/icons/Animation.json";

const LickEmoji = () => {
  return (
    <div className="size-[24px] absolute left-[380px] sm:hidden top-[210px]  md:top-[120%] md:left-[70%]  2xl:left-[13%] lg:top-[100%]">
      <Lottie animationData={emojiLick} loop={true} />
    </div>
  );
};

export default LickEmoji;
