"use client";
import Lottie from "lottie-react";
import emojiLick from "@/public/assets/icons/Animation.json";

const LickEmoji = () => {
  return (
    <div className="size-[53px] absolute right-[80%] top-[89%]">
      <Lottie animationData={emojiLick} loop={true} />
    </div>
  );
};

export default LickEmoji;
