import React from "react";

const CareersPage = () => {
  return (
    <>
      <section className="flex flex-col justify-center min-h-[1014px] relative bg-white overflow-hidden mb-10 px-4 sm:px-6 lg:px-10">
        {/* Gradients */}
        <img
          src="/assets/icons/Group 1000004339.png"
          alt="first-background-gradient"
          className="absolute w-[1018px] h-[608px] -left-[352px] -top-[23px] mix-blend-overlay"
        />
        <img
          src="/assets/icons/Star 2.png"
          alt="star-gradient"
          className="absolute w-[704.12px] h-[487px] blur-[330px] -left-[352px] -top-[23px]"
        />
        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[712.6px] h-[504px] blur-[300px] left-[81px] -top-[46.6px]"
        />
        <img
          src="/assets/icons/Group 1000004338.png"
          alt="second-background-gradient"
          className="absolute w-[817px] h-[608px] left-[1201px] top-[90px] mix-blend-overlay"
        />
        <img
          src="/assets/icons/Star 3.png"
          alt="green-star-gradient"
          className="absolute w-[565.09px] h-[487px] blur-[330px] left-[1201px] top-[90px]"
        />
        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[571.9px] h-[504px] blur-[300px] left-[1446.1px] top-[194px]"
        />

        {/* Content */}
        <div className="relative z-3 flex flex-col-reverse xl:flex-row items-center justify-center gap-[40px] md:mt-40 2xl:mt-40 mt-20">
          {/* Left Text Section */}
          <div className="w-full max-w-[806px] flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 text-center xl:text-left">
            <div className="text-[#252525] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold font-['Poppins'] uppercase leading-[49px] tracking-wide">
              Why Work at SendIt?
            </div>
            <div className="text-[#50555C] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[27.82px] font-normal font-['Roboto'] leading-relaxed">
              At SendIt, we're building the future of delivery logistics. Our
              team is passionate about creating solutions that make a real
              difference for businesses and communities.
            </div>
            <div className="flex justify-center xl:justify-start">
              <button className="w-[220px] sm:w-[260px] lg:w-[298px] h-[60px] sm:h-[68px] lg:h-[75px] text-center bg-[#17A448] rounded-[5px] px-[20px] py-[10px] text-[#F5F5F5] text-[18px] sm:text-[20px] lg:text-[24px] font-medium font-['Roboto'] leading-10">
                View Open Roles
              </button>
            </div>
          </div>

          {/* Right Image */}
          <img
            className="w-full max-w-[812px] h-auto lg:h-[520px] rounded-[10px] object-cover"
            src="/assets/images/new-male-employee-conversing-with-female-colleagues-his-new-office-job.png"
            alt="employees"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-[80px] min-h-screen h-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="flex flex-col w-full max-w-[1568px] justify-start items-center gap-12 sm:gap-16">
          <p className="text-center text-[#252525] text-[32px] sm:text-[40px] lg:text-[50px] font-semibold font-['Poppins'] leading-[48px] sm:leading-[58px]">
            Open Positions
          </p>

          <div className="flex flex-col justify-center items-center gap-5 w-full">
            {[
              {
                title: "Sales Manager",
                tags: ["Full time", "Management", "Product"],
                description:
                  "Lead and manage sales teams to achieve sales goals and revenue targets.",
              },
              {
                title: "Customer Service Representative",
                tags: ["Full time", "Service", "Assistant"],
                description:
                  "Lead and manage sales teams to achieve sales goals and revenue targets.",
              },
              {
                title: "Human Resource Manager",
                tags: ["Full time", "Management", "Productivity"],
                description:
                  "Lead and manage sales teams to achieve sales goals and revenue targets.",
              },
              {
                title: "Operations Officer",
                tags: ["Full time", "Management", "Product"],
                description:
                  "Lead and manage sales teams to achieve sales goals and revenue targets.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between items-start md:items-center w-full bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] px-6 md:px-10 lg:px-20 py-6 md:h-[222px]"
              >
                <div className="flex flex-col justify-start items-start gap-[15px] max-w-full">
                  <p className="text-[#252525] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold font-['Poppins'] leading-snug">
                    {job.title}
                  </p>
                  <div className="flex flex-wrap justify-start items-center gap-3.5">
                    {job.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="min-w-[90px] h-7 px-2.5 py-0.5 border border-[#DCE0E4] flex justify-center items-center"
                      >
                        <p className="text-[#545454] text-base font-normal font-['Roboto'] leading-none">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#787878] text-[16px] sm:text-lg font-normal font-['Roboto'] leading-snug max-w-[705px]">
                    {job.description}
                  </p>
                </div>

                <div className="w-full md:w-auto flex justify-end">
                  <button className="w-full md:w-[200px] h-[60px] md:h-[75px] bg-[#17A448] p-[5px] rounded-[5px] text-center text-[#F5F5F5] text-lg md:text-2xl font-medium font-['Roboto'] leading-10">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full max-w-[284.25px] h-[60px] sm:h-[63.25px] border border-[#17A448] rounded-[5px] flex justify-center items-center text-[#17A448] text-lg sm:text-[26.25px] font-medium font-['Poppins'] leading-9">
          View All Open Roles
        </button>
      </section>

      <section className="flex flex-col justify-center items-center mt-40 mb-60 gap-[40px]">
        <p className="font-poppins font-semibold text-[35px] sm:text-[50px] text-center text-[#252525] leading-[38px]">
          What Our Workers Say
        </p>
        <div className="flex flex-col max-w-[1246px] 2xl:w-[1246px] min-h-[434px] bg-[#F0F0F0] items-center justify-center mt-20 rounded-[10px] gap-[40px]">
          <p className="font-poppins font-medium text-[24px] max-w-[1056px] italic text-[#50555C] text-center leading-10">
            I'm proud to work at Sendit, where I've found a dynamic team
            environment that fosters growth and success. The company's mission
            and values resonate with me, and I'm excited to contribute to its
            continued growth.
          </p>
          <div className="flex items-center justify-center gap-[30px]">
            <img
              src="/assets/images/business-executives-participating-business-meeting.png"
              alt="profile picture"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-[10px]">
              <p className="font-mono font-semibold text-[#252525] text-[24px]">
                Jonny Amartey
              </p>
              <p className="font-mono text-[20px] text-[#50555C]">
                Sales Manager
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
