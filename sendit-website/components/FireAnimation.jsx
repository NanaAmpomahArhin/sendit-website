"use client";

import Lottie from "lottie-react";
import fireAnimation from "@/public/assets/icons/Animation - 1742001057573.json";

const FireAnimation = () => {
  return (
    <div className="size-[53px] absolute right-[100%] top-[47%]">
      <Lottie animationData={fireAnimation} loop={true} />
    </div>
  );
};

export default FireAnimation;
