import React from "react";
import register from "../../../../assets/icons/register.svg";
import client from "../../../../assets/icons/client.svg";
import interview from "../../../../assets/icons/interview.svg";
import feedback from "../../../../assets/icons/feedback.svg";

const SectionTwo = () => {
  const array = [
    {
      img: register,
      name: "Register",
      des: `Email us your CV and we’ll perform a thorough background and
            screening process, determining the best roles in line with your
            experience and skills.`,
    },
    {
      img: feedback,
      name: "Feedback",
      des: `We constantly strive for improvement, and therefore, upon securing a position or in the event of an unsuccessful outcome, we will conduct a debriefing and feedback session with you to ensure all pertinent details are appropriately addressed and documented`,
    },
    {
      img: interview,
      name: "Preparation Interview",
      des: `As soon as we identify a suitable position, our experts will help you prepare for mock interviews. This primarily involves attending interview sessions with our consultants.`,
    },
    {
      img: client,
      name: "Client Interview",
      des: `Once our preparatory services have been completed, we will proceed to facilitate the scheduling of interviews with our clients. We will provide comprehensive support throughout the process and ensure you remain updated at each stage.`,
    },
  ];

  return (
    <div className="md:h-[700px] w-screen bg-white flex flex-col justify-center items-center  md:gap-[30px] gap-[40px] md:px-4 px-6">
      <div className="md:mt-0  mt-14">
        <h1 className="font-poppins md:text-[47px] text-[33px] font-bold text-center  ">
          Four Step Process
        </h1>
      </div>

      <div className="md:grid md:grid-cols-4 gap-[40px]  md:px-[40px] flex flex-col ">
        {array.map((data, index) => {
          return (
            <div className="md:h-[423px]  flex flex-col gap-[39px] justify-start items-center   ">
              <img src={data.img} alt="icon1 " />
              <div className="border-[1px] border-t border-[#B1B1B1] w-full"></div>
              <div className="flex flex-col justify-center items-center gap-[20px]"><h1 className="font-poppins font-bold text-[23px]">
                {data.name}
              </h1>
              <p className="font-poppins text-[16px] text-center">{data.des}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionTwo;
