"use client";

import Lottie from "lottie-react";
import fireAnimation from "@/public/assets/icons/Animation - 1742001057573.json";

const FireAnimation = () => {
  return (
    <div className="size-[53px] absolute -left-[250px] top-[300px] md:-left-[95%] md:top-[120%] lg:top-[43%] lg:right-[100%] lg:-left-[40px]">
      <Lottie animationData={fireAnimation} loop={true} />
    </div>
  );
};

export default FireAnimation;
