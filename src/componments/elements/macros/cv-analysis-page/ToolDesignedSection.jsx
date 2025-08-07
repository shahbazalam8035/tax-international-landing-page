import React from 'react'
import toolDesignedIcon1 from "../../../../assets/images/tool-designed-icon1.svg"
import toolDesignedIcon2 from "../../../../assets/images/tool-designed-icon2.svg"
import toolDesignedIcon3 from "../../../../assets/images/tool-designed-icon3.svg"
import toolDesignedIcon4 from "../../../../assets/images/tool-designed-icon4.svg"

const ToolDesignTextItems = [
    {
        icon:toolDesignedIcon1,
        title:"Unlimited CV Analysis",
        para:"Perfect your CV with our AI-powered tool. ",
    },
    {
        icon:toolDesignedIcon2,
        title:"ATS-Friendly Resume Builder",
        para:"With our customizable templates, craft a resume that won’t get lost in the system.",
    },
    {
        icon:toolDesignedIcon3,
        title:"Cover Letter Builder",
        para:"Create a personalized cover letter grabs the recruiter’s attention.",
    },
    {
        icon:toolDesignedIcon4,
        title:"Salary Insights",
        para:"Get accurate salary data for your job title and location so you can negotiate confidently.",
    },
  
]

const ToolDesignedSection = () => {
  return (
    <>
      <div className="container mx-auto lg:py-[80px] py-[40px] px-6">
        <div className="flex max-w-[1046px] w-full mx-auto lg:flex-row flex-col ">
          <div className="flex-[0.55] flex flex-col justify-center lg:pb-0 pb-[20px]  ">
            <p className="py-[6px] px-[10px] rounded-full shadow-md w-fit mb-[20px]">
              {" "}
              CV Analysis
            </p>
            <h3 className="lg:text-[42px] text-[24px] text-[#2B1845] leading-[120%] font-bold max-w-[456px] w-full mb-[12px]">
              Tools designed for your success
            </h3>
            <p className="text-[16px] text-[#646868] leading-[150%] max-w-[456px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              venenatis orci sit amet lobortis tristique.
            </p>
          </div>
          <div className="flex-[0.45] flex flex-col justify-between space-y-[20px] max-w-[446px] w-full">
              {ToolDesignTextItems.map((item, index) => (
                <>
                 <div className='flex items-center gap-[20px]' >
                    <img className="h-[50px]" src={item.icon} alt="" />
                    <div>
                        <h3 className="text-[18px] leading-[150%] font-medium text-[#1b1b1b]">
                        {item.title}
                        </h3>
                        <p className="text-[16px] leading-[150%] text-[#7B7B7B]">
                        {item.para}
                        </p>
                    </div>
                </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolDesignedSection


