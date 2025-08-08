import React, { useRef } from "react";
import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const rolesData = [
  {
    title: "Clinical Imaging",
    roles: ["Principal Investigators (Lu-177, Ac-225, etc.)",
      "Clinical Scientists (SPECT/PET studies)",
      "Theranostic Trial Coordinators",
    ],
  },
  {
    title: "Clinical Imaging",
    roles: [
      "PET/CT Technologists",
      "Nuclear Medicine Physicians",
      "Medical Physicists",
      "Dosimetrists",
    ],
  },
  {
    title: "Radiopharmacy & R&D",
    roles: [
      "Cyclotron Engineers",
      "Radiochemists",
      "GMP Radiopharmacists",
      "Qualified Persons (QP)",
    ],
  },
  {
    title: "Regulatory & Safety",
    roles: [
      "Radiation Protection Advisors",
      "QA/QC Specialists (GMP, FDA, EMA)",
      "Regulatory Affairs Managers",
    ],
  },
  
];

const RolesWePlace = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          infinite: true,
          autoplay:true,
        },
      },
    ],
  };

  return (
  <>
    {/* Custom CSS for dot styling */}
    <style jsx>{`
      .slick-dots {
        bottom: -40px !important;
      }
      .slick-dots li {
        width: 13px !important;
        height: 13px !important;
        margin: 0 3px !important;
      }
      .slick-dots li button {
        width: 13px !important;
        height: 13px !important;
        padding: 0 !important;
      }
      .slick-dots li button:before {
        width: 13px !important;
        height: 13px !important;
        font-size: 13px !important;
        line-height: 13px !important;
        opacity: 0.5 !important;
        color: #E9E9E9 !important;
      }
      .slick-dots li.slick-active button:before {
        opacity: 1 !important;
        color: #2B1845 !important;
      }
    `}</style>

    <div className="bg-[#F7F8FF]">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="pb-[40px] flex justify-between">
          <h3 className="text-[#2B1845] lg:text-[36px] text-[24px] leading-[150%] font-semibold">
            Roles We Place <span className="text-[20px] leading-[150%] font-normal text-[#646868]">(Not limited to)</span>
          </h3>
          <div className="hidden gap-[10px] lg:flex ">
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

        <div className="mx-[-20px]">
          <Slider ref={sliderRef} {...settings}>
            {rolesData.map((roleSet, index) => (
              <div key={index} className="px-[20px] ">
                <div className="rounded-[28px] bg-white p-[30px] h-full shadow-lg lg:min-h-[350px]">
                  <h3 className="text-[24px] leading-[150%] text-[#000000] font-medium mb-3">
                    {roleSet.title}
                  </h3>
                  <ul className="text-[#585858] text-[24px] lg:leading-[200%] leading-[200%] list-disc ml-[20px]">
                    {roleSet.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </>
  );
};

export default RolesWePlace;
