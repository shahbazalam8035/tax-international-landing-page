import React, { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const rolesData = [
  {
    title: "Decommissioning (Permanent)",
    para:["After years working in defence infrastructure, I wanted to transition into nuclear decommissioning. TRX provided targeted advice on how to position my experience and facilitated a conversation with a Tier 1 site license company."," The role they secured aligned perfectly with my leadership background, and the team culture matched what I was looking for. TRX stayed involved through the onboarding process and followed up post-placement — a level of support I hadn’t experienced with other agencies."],
    name:"James R.",
    professsion:"CEO / Versel"
  },
  {
    title: "Waste Management Facility (Permanent)",
    para:["I was looking for stability after several years of site-based contract work. TRX presented a role with long-term progression at a nuclear waste treatment facility. They arranged a site visit before the interview and clearly explained the security clearance requirements.","Their insight into the client’s expectations helped me feel fully prepared. I accepted the offer within a week of my second interview."],
    name:"Rebecca S.",
    professsion:"EC&I Technician"
  },
  {
    title: "New Build (Contract)",
    para:["TRX helped me secure a permanent position with one of the principal contractors on a UK new build project. They knew exactly which projects were actively hiring and provided context on what each client was really looking for — not just the job spec.","They also prepared me thoroughly for each interview stage and offered valuable feedback after each round. I’ve since referred several colleagues to TRX as a result."],
    name:"Omar K.",
    professsion:"Mechanical Design Engineer"
  },
  {
    title:"Radiation Protection Advisor – Contract Role",
    para:["As an RPA, opportunities can be niche and time-sensitive. TRX reached out with a contract at a nuclear medicine site that needed urgent support. Within 48 hours of submitting my CV, I had an interview, and I was on-site within the week. They handled all the compliance and security clearance documentation swiftly, and I never felt out of the loop. Their responsiveness made the difference."],
    name:"Elena T.",
    professsion:"Radiation Protection Advisor",
  },
  {
    title:"Safety Case Author – Generation & Regulatory Interface (Contract)",
    para:["What set TRX apart was their technical understanding of nuclear safety roles. I wasn’t asked generic questions — they knew the difference between deterministic and probabilistic work and understood the regulatory pressures of the project. They matched me with a role where I could make an immediate impact and negotiated rates that reflected both my experience and the complexity of the work."],
    name:"Daniel M.",
    professsion:"Safety Case Consultant",
  },
  {
    title:"Nuclear Operations Coordinator – Fuel Cycle Facility (Permanent)",
    para:["I was struggling to find a role that combined operational oversight with compliance responsibilities. TRX introduced me to a client operating a unique facility in the fuel cycle — a position that hadn’t been advertised externally. They managed the entire process with professionalism and ensured transparency in salary, relocation, and training support. It was one of the smoothest recruitment processes I’ve experienced."],
    name:"Priya V.",
    professsion:"Operations Coordinator",
  },
  {
    title:"Commissioning Engineer – Reactor Systems (Contract)",
    para:["TRX reached out regarding a short-term commissioning project with the potential for extension. They were upfront about timelines, deliverables, and site conditions, and gave me a full technical briefing. I appreciated their honest communication and how quickly they secured interviews. I've since completed two successful extensions through TRX, and they’ve maintained clear contact throughout."],
    name:"Tom E.",
    professsion:"Commissioning Engineer",
  },
  {
    title:"Quality Assurance Lead – Nuclear Supply Chain (Permanent)",
    para:["After years in quality management across regulated industries, I wanted to move into nuclear but didn’t know how to approach it. TRX helped translate my experience into language the industry would understand and introduced me to a supplier undergoing major transformation. The role has not only deepened my expertise but also given me a clear pathway to senior leadership. TRX played a pivotal role in that transition."],
    name:"Lauren B.",
    professsion:"QA Lead",
  },
];

const CareerTransformed = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#E9EBFF]">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="pb-[40px] text-center">
          <h3 className="text-[#141515] lg:text-[36px] text-[30px] leading-[150%] font-semibold mb-[10px]">
            Careers Transformed Through TRX
          </h3>
          <p className="text-[#646868] lg:text-[20px] text-[18px] leading-[120%] font-medium">
            Permanent placements. Personal support. Professional growth —
            straight from those who lived it.
          </p>
        </div>

        <div className="mx-[-20px] case-studies-slider">
          <Slider ref={sliderRef} {...settings}>
            {rolesData.map((roleSet, index) => (
              <div key={index} className="lg:px-0 px-2">
                <div className="rounded-[28px] bg-[#FEFEFF] border border-[#d9d9d9] p-[20px] h-full space-y-[16px]">
                  <div className="h-[260px] overflow-y-scroll">
                    <h3 className="text-[18px] leading-[150%] text-[#646868] font-semibold mb-3">
                      {roleSet.title}
                    </h3>
                      {roleSet.para.map((item) => (
                        <>
                    <p className="text-[#646868] text-[16px] leading-[150%] mb-[10px]">
                        {item}
                    </p>
                        </>
                      ))}
                  </div>
                  <div>
                    <p className="text-[#141515] text-[16px] leading-[150%]">
                      {roleSet.name}
                    </p>
                    <p className="text-[#777D7D] text-[14px] leading-[150%]">
                      {roleSet.professsion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-end mt-[20px]">
          <div className="flex gap-[10px]">
            <BsArrowLeftCircleFill
              size={40}
              className="bg-[#864EFF] text-[#EEE6FF] rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <BsArrowRightCircleFill
              size={40}
              className="bg-[#864EFF] text-[#EEE6FF] rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTransformed;
