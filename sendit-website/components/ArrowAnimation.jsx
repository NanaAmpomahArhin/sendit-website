"use client";
import Lottie from "lottie-react";
import arrowAnimation from "@/public/assets/icons/Animation - 1744130970544.json"; // adjust path

const CurvedArrowLottie = ({ className }) => {
  return (
    <div className={className}>
      <Lottie animationData={arrowAnimation} loop={true} />
    </div>
  );
};

export default CurvedArrowLottie;
