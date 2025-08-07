import React from 'react'
import careerProgressionIcon1 from "../../../../assets/images/career-progression-icon1.svg"
import careerProgressionIcon2 from "../../../../assets/images/career-progression-icon2.svg"
import careerProgressionIcon3 from "../../../../assets/images/career-progression-icon3.svg"
import careerProgressionIcon4 from "../../../../assets/images/career-progression-icon4.svg"
import careerProgressionIcon5 from "../../../../assets/images/career-progression-icon5.svg"
import careerProgressionIcon6 from "../../../../assets/images/career-progression-icon6.svg"
const cardItems =[
    {
        title:"Skills Identification",
        descriptions:"We ensure your core competencies and certifications are clearly communicated to employers.",
        icon:careerProgressionIcon1
    },
    {
        title:"Career Alignment",
        descriptions:"We take time to understand your short and long-term goals, from sector changes to leadership ambitions.",
        icon:careerProgressionIcon2
    },
    {
        title:"Compensation Insight",
        descriptions:"We advise on market rates and negotiate on your behalf to ensure you receive a competitive offer.",
        icon:careerProgressionIcon3
    },
    {
        title:"Cultural Fit",
        descriptions:"We help you assess organisational culture and team dynamics — essential for safety and performance in nuclear settings.",
        icon:careerProgressionIcon4
    },
    {
        title:"Resignation & Counteroffers",
        descriptions:"We provide guidance on notice periods and help navigate counteroffers professionally.",
        icon:careerProgressionIcon5
    },
    {
        title:"Onboarding & Post-Placement Support",
        descriptions:"We remain in contact to ensure smooth integration and continued success in your new role.",
        icon:careerProgressionIcon6
    }
]

const CareerProgression = () => {
  return (
    <div className='container mx-auto px-6 lg:py-[80px] py-[40px] space-y-[30px]'>
        <div>
        <h3 className='lg:text-[40px] text-[30px]  leading-[100%] text-[#2B1845] font-semibold mb-[20px]'>How We Support Your Career Progression</h3>
        <p className='lg:text-[20px] text-[16px] leading-[120%] text-[#5C5C5C]'>From initial contact through to onboarding and beyond, we provide comprehensive support tailored to professionals in nuclear environments:</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[40px] md:gap-[30px] gap-[20px]'>
            {
                cardItems.map((item,index)=>(
                    <>
                    <div>
                        <div><img  className ="mb-6" src={item.icon} alt={item.title} /></div>
                        <p className='text-[22px] leading-[150%] text-[#502F99] font-bold '>{item.title}</p>
                        <p className='text-[18px] leading-[150%] text-[#696969]'>{item.descriptions}</p>
                    </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default CareerProgression