import FAQData from "@/components/FAQData";
import React from "react";

const FAQPage = () => {
  return (
    <>
      {" "}
      <section className="flex flex-col justify-center min-h-[790px] relative bg-white overflow-hidden mb-5 sm:mb-20 px-4 sm:px-6 lg:px-10">
        {/* Gradients */}
        <img
          src="/assets/icons/Group 1000004339.png"
          alt="first-background-gradient"
          className="absolute w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] md:w-[850px] md:h-[500px] 2xl:w-[1018px] 2xl:h-[608px] -left-[200px] -top-[100px] 2xl:-left-[534px] 2xl:-top-[178px] mix-blend-overlay"
        />

        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[400px] h-[300px] sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[400px] 2xl:w-[712.6px] 2xl:h-[504px] blur-[200px] sm:blur-[250px] md:blur-[300px] 2xl:blur-[350px] -left-[100px] -top-[50px] 2xl:-left-[228.6px] 2xl:-top-[74px]"
        />

        <img
          src="/assets/icons/Group 1000004338.png"
          alt="second-background-gradient"
          className="absolute w-[600px] h-[400px] sm:w-[800px] sm:h-[500px] md:w-[900px] md:h-[550px] 2xl:w-[986px] 2xl:h-[608px] left-[60%] top-[0] 2xl:left-[1075px] 2xl:-top-[55px] mix-blend-overlay"
        />

        <img
          src="/assets/icons/Star 3.png"
          alt="green-star-gradient"
          className="absolute w-[500px] h-[300px] sm:w-[600px] sm:h-[400px] md:w-[650px] md:h-[450px] 2xl:w-[681.98px] 2xl:h-[487px] blur-[200px] sm:blur-[250px] md:blur-[300px] 2xl:blur-[350px] left-[60%] top-[0] 2xl:left-[1075px] 2xl:-top-[55px]"
        />

        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[400px] h-[300px] sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[400px] 2xl:w-[690.2px] 2xl:h-[504px] blur-[200px] sm:blur-[250px] md:blur-[300px] 2xl:blur-[350px] left-[70%] top-[50px] 2xl:left-[1370.8px] 2xl:top-[49px]"
        />

        <div className="flex flex-col justify-center items-center gap-[30px] z-3 relative px-4 sm:px-6">
          <div className="text-center text-[#252525] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] 2xl:text-[50px] font-bold font-['Poppins'] uppercase leading-[1.2] tracking-wide">
            GOT questions? we’ve got answers
          </div>
          <div className="text-center text-[#50555C] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] 2xl:text-[27.82px] font-normal font-['Roboto'] leading-relaxed sm:leading-9 md:leading-10">
            Find solutions to common issues or contact our support team for
            personalized help.
          </div>
        </div>
        <div className="flex justify-start items-center pl-10  bg-[#F5F5F5] w-[695px] gap-[30px] mx-auto h-[71px] rounded-[7px] border-[1px] mt-30 border-[#DCE0E4]">
          <img
            src="/assets/icons/ri_search-line.png"
            alt="search"
            className="w-[24px] h-[24px]"
          />
          <input
            placeholder="Search FAQs..."
            className="text-[18px] text-[#808080] font-mono w-[500px] outline-none"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full mt-30">
        <FAQData />
      </section>
    </>
  );
};

export default FAQPage;
