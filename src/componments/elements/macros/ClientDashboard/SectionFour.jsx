import React from "react";

const SectionFour = () => {
  const array1 = [
    {
      index: "01",
      heading: "Driven by Your Needs",
      desription:
        "We work with you by first understanding your generic requirements, specific business needs, and what you’re exactly looking for in the right candidate. In addition, we put in our time to understand the bigger picture of the project to offer our assistance in a more holistic manner.",
    },

    {
      index: "02",
      heading: "Maximum Transparency",
      desription: ` After we understand your requirements, we will lay the groundwork
              for the rules of engagement to ensure a seamless collaboration.`,
    },
  ];

  const array2 = [
    {
      index: "03",
      heading: "Rapid Turnaround",
      desription: `We aim to provide you with a minimum of 3 candidate profiles
              within 24-48 hours.`,
    },

    {
      index: "04",
      heading: "No False Starts",
      desription:
        "We strive to gather a pool of talent that are motivated for the opportunities they aim to pursue. As a result, each candidate that we recommend is a highly committed professional who seeks to build a career rather than an individual who is solely interested in temporary relocation.",
    },
    {
      index: "05",
      heading: " We Take Care of Interviews",
      desription: `TRX will facilitate the requirements necessary to arrange interviews
            for you. We can do this in person, via phone, or virtually.`,
    },
  ];

  return (
    <div className="bg-white xl:h-[600px] w-screen md:px-16 px-8 flex flex-col gap-[20px] mb-[50px]">
      <div className="w-full md:grid md:grid-cols-3 gap-[20px] flex flex-col ">
        <div className="flex justify-center items-center">
          <h1 className="font-poppins md:text-[47px] text-[33px] text-center font-bold  ">
            Fast and Easy Process
          </h1>
        </div>
        {array1.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-[15px]    justify-between border-r-[2px] border-b-[2px] border-r-black border-b-black rounded-[15px] py-4  pl-3"
            >
              <div className="flex flex-col gap-[15px] px-4 ">
                <h1 className="font-poppins md:text-left text-center text-[23px] font-bold  ">
                  {data.heading}
                </h1>
                <h1 className="font-poppins md:text-left text-center text-[14px]  ">
                  {data.desription}
                </h1>
              </div>
              <div className="w-full flex justify-end items-center px-4  ">
                <div className="rounded-full bg-[#D4B9FF] py-1 px-2 text-[19px] font-poppins font-bold  ">
                  {data.index}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:grid md:grid-cols-3 gap-[20px] flex flex-col">
        {array2.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between  flex-col gap-[15px]  border-r-[2px] border-b-[2px] border-r-black border-b-black rounded-[15px] pb-3 pt-12 pl-3"
            >
              <div className="flex flex-col gap-[15px] px-4 ">
                <h1 className="font-poppins md:text-left text-center text-[23px] font-bold  ">
                  {data.heading}
                </h1>
                <h1 className="font-poppins md:text-left text-center text-[14px]  leading-[21px] ">
                  {data.desription}
                </h1>
              </div>
              <div className="w-full flex justify-end items-center px-4  ">
                <div className="rounded-full bg-[#D4B9FF] py-1 px-1 text-[19px] font-poppins font-bold  ">
                  {data.index}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
