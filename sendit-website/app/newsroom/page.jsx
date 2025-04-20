import React from "react";

const NewsroomPage = () => {
  return (
    <>
      <section className="min-h-[1014px] relative bg-white overflow-hidden mb-20 ">
        {/* Background Gradient Images */}
        <img
          src="/assets/icons/Group 1000004337.png"
          alt="first-background-gradient"
          className="absolute w-[1018px] h-[608px] -left-[204px] -top-[24px] mix-blend-overlay "
        />
        <img
          src="/assets/icons/Star 2.png"
          alt="star-gradient"
          className="absolute w-[704.12px] h-[487px] blur-[330px] -left-[204px] -top-[24px] "
        />
        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[712.6px] h-[504px] blur-[350px] left-[101.4px] top-[80px]"
        />
        <img
          src="/assets/icons/Group 1000004336.png"
          alt="second-background-gradient"
          className="absolute w-[817px] h-[608px] left-[1244px] top-[36px] mix-blend-overlay "
        />
        <img
          src="/assets/icons/Ellipse 11.png"
          alt="ellipse-gradient"
          className="absolute w-[571.9px] h-[504px] blur-[300px] left-[1489.1px] top-[140px] "
        />

        {/* Content */}
        <div className="relative z-3 mt-32 lg:mt-[300px] mx-auto px-5 flex flex-col items-center justify-center gap-20 2xl:gap-32">
          {/* Headings */}
          <div className="w-full max-w-[988px] flex flex-col text-center gap-10">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] text-[#252525] font-bold font-poppins uppercase leading-[49px] tracking-wide">
              The Latest from SendIt
            </h2>
            <p className="text-[18px] sm:text-[22px] lg:text-[27.82px] text-[#50555C] font-normal leading-8 font-['Roboto']">
              Stay updated with our company news, announcements, and industry
              insights.
            </p>
          </div>

          {/* News Card */}
          <div className="w-full max-w-[1495px] flex flex-col lg:flex-row h-auto lg:h-96 rounded-[10px] bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Image */}
            <img
              src="/assets/images/cityscape-wuxi.png"
              alt="newsroom background"
              className="min-w-[300px] xl:w-[748px] h-[393px] x object-cover"
            />

            {/* Text Section */}
            <div className="w-full lg:w-[652px] flex flex-col justify-center items-start gap-12 p-6 lg:pl-10">
              <div className="flex flex-col gap-4">
                <p className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                  April 4, 2025
                </p>
                <div className="flex flex-col gap-8">
                  <h3 className="text-[#252525] text-[22px] sm:text-[28px] lg:text-[32px] font-semibold font-['Poppins'] leading-[40px] lg:leading-[57.41px]">
                    SendIt Expands to 10 New Cities!
                  </h3>
                  <p className="text-[#50555C] text-[18px] sm:text-[20px] lg:text-[24px] font-normal font-['Roboto'] leading-7">
                    We're thrilled to announce our expansion into 10 new cities,
                    bringing our reliable delivery platform to more communities.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer">
                <span className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                  Read more
                </span>
                <img
                  src="/assets/icons/mingcute_right-line.png"
                  alt="green-right-arrow"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col  gap-[40px] sm:gap-[60px] lg:gap-[80px] relative bg-white justify-center items-center px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 flex-wrap">
          {[
            {
              image:
                "/assets/images/skip-classes-appealing-male-student-sitting-motorbike-street.png",
              date: "April 5, 2025",
              title: "New Fleet Management Features Released",
              description:
                "We've launched powerful new features for fleet partners to better manage their operations and maximize efficiency.",
            },
            {
              image:
                "/assets/images/multiethnic-leaders-greeting-each-other-city.png",
              date: "April 5, 2025",
              title: "Q1 2025 Growth Report",
              description:
                "SendIt reports record growth in Q1 2025, with a 70% increase in deliveries and 500+ new business partners joining our platform.",
            },
            {
              image:
                "/assets/images/cooperation-statistics-financial-people-professional.png",
              date: "April 5, 2025",
              title: "SendIt Announces Strategic Partnership",
              description:
                "We're excited to announce our partnership with GreenLogistics, aligning with our commitment to sustainable delivery practices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full max-w-[521px] 2xl:w-[521px] 2xl:h-[810px] h-auto bg-white rounded-[5px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] "
            >
              <img
                className="w-full h-auto max-h-[400px] object-cover"
                src={item.image}
                alt={`news-${index}`}
              />
              <div className="w-full max-w-[443px] flex flex-col justify-start pl-5 sm:pl-10 pt-5 sm:pt-7 items-start gap-6 sm:gap-9">
                <div className="flex flex-col justify-center items-start gap-6 sm:gap-8">
                  <p className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                    {item.date}
                  </p>
                  <div className="flex flex-col justify-start items-start gap-4 sm:gap-8">
                    <p className="text-[#252525] text-[20px] sm:text-[24px] lg:text-[28px] font-medium font-['Poppins'] leading-8 sm:leading-10">
                      {item.title}
                    </p>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20.96px] text-[#50555C] font-normal font-['Roboto'] leading-6 sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 flex justify-start items-center gap-2.5 cursor-pointer">
                  <p className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                    Read more
                  </p>
                  <div className="w-6 h-6">
                    <img
                      src="/assets/icons/mingcute_right-line.png"
                      alt="green-right-arrow"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-5 sm:mt-10 border-[1.31px] border-[#17A448] w-[210.25px] h-[63.25px] rounded-[5px] p-[13.13px] text-[#17A448] text-[20px] sm:text-[24px] lg:text-[26.25px] font-medium font-['Poppins'] leading-0">
          View All News
        </button>
      </section>

      <section className="flex justify-center items-center w-full max-w-[1579px] mt-25 mb-40 px-4 sm:px-6 lg:px-10 h-auto lg:h-80 relative bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.08)] mx-auto py-10">
        <div className="w-full max-w-[1398px] flex flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-10">
          <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-8">
            <div className="text-[#252525] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold font-['Poppins'] leading-[36px] lg:leading-[57.41px]">
              Press Inquiries
            </div>
            <div className="text-[#50555C] text-[18px] sm:text-[20px] lg:text-[24px] font-normal font-['Roboto'] leading-relaxed">
              For media inquiries, please contact our press team. We're always
              happy to provide information about SendIt and our mission.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 sm:gap-11">
            <div className="p-2.5 flex justify-center items-center gap-2.5">
              <div>
                <span className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                  press.
                </span>
                <span className="text-[#17A448] text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-7">
                  sendit@gmail.com
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[298px] h-[65px] sm:h-[75px] p-[5px] bg-[#17A448] rounded-[5px] flex justify-center items-center gap-2.5">
              <div className="text-center text-[#F5F5F5] text-[18px] sm:text-[20px] lg:text-[24px] font-medium font-['Roboto'] leading-10">
                Contact Press Team
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsroomPage;
