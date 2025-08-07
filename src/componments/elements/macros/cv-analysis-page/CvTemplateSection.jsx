import React from "react";
import Slider from "react-slick";
import CvTemplate1 from "../../../../assets/images/cv-template-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CvSlider.css";
import temp1 from "../../../../assets/images/sleek-template.png"
import temp2 from "../../../../assets/images/bold-template.png"
import temp3 from "../../../../assets/images/advanced-template.png"
import temp4 from "../../../../assets/images/classic-template.png"
import temp5 from "../../../../assets/images/elegant-template.png"

const CvTemplateSection = () => {
  const templates = [
    {
    id:  1,
    image:temp1,
    name: `Sleek`,
    },
    {
    id:  2,
    image:temp2,
    name: `Bold`,
    },
    {
    id:  3,
    image:temp3,
    name: `Advanced`,
    },
    {
    id:  4,
    image:temp4,
    name: `Classic`,
    },
    {
    id:  5,
    image:temp5,
    name: `Elegant`,
    },
];

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
    >
        f
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 left-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
    >d
    </button>
  );

  const settings = {

    className: "center",
    centerMode: true,
    dots:true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#D2D5FF4D] lg:py-[80px] py-[40px] relative">
      <div className="container mx-auto px-6">
        <div>
        <h3 className="lg:text-[54px] text-[30px] leading-[150%] text-[#2b1845] font-bold lg:mb-[40px] mb-[20px] text-center">Explore the curated resume templates we’ve created for you</h3>
        </div>
        <div className="mx-[-20px] overflow-visible">
        <Slider {...settings} className="lg:py-[20px]">
          {templates.map((template) => (
            <div key={template.id} className="px-2 cursor-pointer">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="h-[16px]"></div>
              <img
                src={template.image}
                alt={template.name}
                className="rounded-xl shadow-lg w-full"
              />
              <div className="template-name-overlay">
                {template.name}
              </div>
            </div>
          </div>
          
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default CvTemplateSection;
