import React from "react";
import IntegrityFirst from "../../../../assets/images/IntegrityFirst.png";
import PrecisionExcellence from "../../../../assets/images/PrecisionExcellence.png";
import PeopleCentered from "../../../../assets/images/PeopleCentered.png";
import SafetyAlways from "../../../../assets/images/SafetyAlways.png";
import PartnershipDriven from "../../../../assets/images/PartnershipDriven.png";
import ForwardThinking from "../../../../assets/images/ForwardThinking.png";

const cardData = [
  {
    title: "Integrity First",
    desc: "We operate with transparency, accountability, and honesty. In an industry where safety, trust, and compliance are non-negotiable, integrity guides every interaction—with clients, candidates, and one another.",
    image: IntegrityFirst,
  },
  {
    title: "Precision Excellence",
    desc: "We believe in deep specialisation. Our focus on nuclear allows us to deliver unmatched technical knowledge, precision hiring, and long-term value to both clients and candidates.",
    image: PrecisionExcellence,
  },
  {
    title: "People-Centered",
    desc: "Talent is not a commodity—it's a mission-critical resource. We treat people with respect, value diversity, and champion careers with the same commitment we give to powering projects.",
    image: PeopleCentered,
  },
  {
    title: "Safety Always",
    desc: "In nuclear, safety is everything. Our processes, candidate vetting, and partner engagements are built around robust quality control & regulatory alignment, ensuring every hire meets  highest safety standards.",
    image: SafetyAlways,
  },
  {
    title: "Partnership-Driven",
    desc: "We act as a true extension of our clients’ teams. Through collaboration, adaptability, and proactive problem-solving, we foster long-term partnerships grounded in trust and shared success.",
    image: PartnershipDriven,
  },
  {
    title: "Forward Thinking",
    desc: "The future of nuclear energy is being built today. We embrace innovation—whether it’s supporting emerging technologies like SMRs and fusion, or modernising recruitment through digital transformation.",
    image: ForwardThinking,
  },
];

function Section2() {
  return (
    <div className="bg-[#EBEDFF] mx-6">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="grid grid-cols-1 lg:gap-[30px] gap-6 rounded-[20px]">
          <h2 className=" lg:block hidden font-bold text-[48px] leading-[52.8px] tracking-[-0.44px] text-[#502F99] text-center">
            Our Core Values
          </h2>
          <h2 className="lg:hidden block font-bold text-[28px] leading-[120%]  text-[#502F99] text-center">
            Our Recruitment Models
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-6">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:gap-[24px] gap-[20px] rounded-[16px] lg:p-8 p-5 bg-[#FFFFFF] border border-[#D9D9D999]"
              >
                <div className="flex lg:gap-[24px] gap-[20px] items-center">
                  <img src={cardData[index].image} alt="" className="w-[55px] h-[58px]" />
                  <h3 className="font-medium lg:text-[24px] text-[20px] leading-[28px] tracking-[-0.48px] text-[#3A3A3A]">
                    {item?.title}
                  </h3>
                </div>
                {/* do I have to use optional chaining here? */}
                <p className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242]">
                  {item?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
