import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="flex flex-col justify-center min-h-[790px] relative bg-white overflow-hidden mb-10 px-4 sm:px-6 lg:px-10">
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

        <div className="flex flex-col justify-center items-center gap-[30px] z-10 relative px-4 sm:px-6">
          <div className="text-center text-[#252525] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] 2xl:text-[50px] font-bold font-['Poppins'] uppercase leading-[1.2] tracking-wide">
            About Sendit
          </div>
          <div className="text-center text-[#50555C] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] 2xl:text-[27.82px] font-normal font-['Roboto'] leading-relaxed sm:leading-9 md:leading-10">
            Connecting businesses, riders, and customers through innovative
            logistics solutions
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse xl:flex-row xl:items-center 2xl:items-start justify-between items-start px-5 sm:px-10 md:px-20 lg:px-24 xl:px-30 2xl:px-30 mt-10 sm:mt-20 md:mt-28 lg:mt-32 2xl:mt-40 gap-10">
        {/* Text Content */}
        <div className="flex flex-col w-full xl:w-[500px] 2xl:w-[726px]">
          <div className="text-[#252525] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] 2xl:text-[50px] font-semibold font-['Poppins'] leading-snug">
            Our Story
          </div>
          <div className="text-[#545454] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-2xl font-normal font-['Roboto'] mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px]">
            At SendIt, we believe in making everyday life easier — one delivery
            at a time.
            <br />
            Born out of a simple need to connect people with the things they
            love — food, essentials, packages, and now even event tickets — we
            launched with a clear mission: to deliver convenience, speed, and
            trust across every neighborhood.
            <br />
            <br />
            What started with a few dedicated riders on motorbikes quickly grew
            into a fast-moving logistics platform built for local communities.
            We’re proud to support small vendors, empower riders and fleets, and
            bring reliability to customers with every tap.
            <br />
            From the very first order to the thousands we now fulfill daily, our
            focus has remained the same: local impact, real-time solutions, and
            human connection.
            <br />
            <br />
            We’re not just moving items from point A to B — we’re delivering
            moments, milestones, and memories.
            <br />
            <br />
            And this is just the beginning.
          </div>
        </div>

        {/* Image */}
        <img
          className="w-full sm:w-[600px] md:w-[700px] lg:self-center lg:w-[750px] xl:w-[600px] 2xl:w-[820px] h-auto 2xl:h-[677px] rounded-[10px] object-cover"
          src="/assets/images/about-background.png"
          alt="about-page-background"
        />
      </section>
    </>
  );
};

export default AboutPage;
