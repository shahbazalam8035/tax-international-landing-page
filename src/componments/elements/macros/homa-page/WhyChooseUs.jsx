import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import bgImage from "../../../../assets/images/why-choose-us-bg-image.png";
import image1 from "../../../../assets/images/home-why-choose-image1.webp";
import image2 from "../../../../assets/images/home-why-choose-image2.webp";
import image3 from "../../../../assets/images/home-why-choose-image3.webp";
import Contract_Staffing_Mobile from "../../../../assets/images/Contract_Staffing_Mobile.png";
import Permanent_Staffing_Mobile from "../../../../assets/images/Permanent_Staffing_Mobile.png";
import Talent_Support_Mobile from "../../../../assets/images/Talent_Support_Mobile.png";

const tabs = [
  {
    title: "Contract Staffing",
    image: image1,
    mobileImage: Contract_Staffing_Mobile,
    content: `
      <p class="text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">We deliver flexible, on-demand talent to help you meet project deadlines, scale fast, and
      access specialized expertise—without the overhead of long-term hiring. Whether you need an
      individual contractor, an entire project team, or urgent interim support, we rapidly source and
      deploy high-performing professionals across a wide range of disciplines.</p>
      
      <p class="text-[18px] leading-[150%] text-[#7b7b7b]">Our services go beyond recruitment—we manage the full contractor lifecycle:</p>
      
      <ul class="list-disc pl-5 space-y-2  text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">
        <li>Rapid sourcing and vetting of pre-qualified professionals</li>
        <li>Seamless onboarding tailored to your internal systems</li>
        <li>Compliance with all local labor laws and tax regulations</li>
        <li>Background checks and security clearance coordination</li>
        <li>End-to-end contractor care, engagement, and payroll</li>
      </ul>
      
      <p class="text-[18px] leading-[150%] text-[#7b7b7b]">We specialize in supporting complex, regulated industries—ensuring every contractor is
ready to contribute from day one, with minimal ramp-up and maximum impact. Whether on-
site, remote, or international, our flexible models help you stay agile and fully
resourced—without the administrative burden.</p>
    `,
  },
  {
    title: "Permanent Staffing",
    image: image2,
    mobileImage: Permanent_Staffing_Mobile,
    content: `
      <p class="text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">Our permanent staffing services are built to help you make strategic hires that align with your business goals, culture, and future plans. We take a  consultative, data-driven approach to
identify, attract, and retain top-tier professionals who bring long-term value to your team.</p>
      
      <p>From leadership and technical experts to critical support functions, we manage the end-to-end process:</p>
      
      <ul class="list-disc pl-5 space-y-2  text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">
        <li>In-depth role scoping and talent profiling</li>
        <li>Global talent search and targeted outreach</li>
        <li>Rigorous interviews, technical assessments, and background checks</li>
        <li>Cultural and organizational alignment screening</li>
        <li>Offer negotiation, onboarding, and relocation support</li>
      </ul>
      
      <p class="text-[18px] leading-[150%] text-[#7b7b7b]">Our industry expertise and international reach allow us to access hard-to-find talent across
borders, skillsets, and seniority levels. Whether building new teams or strengthening existing
ones, we ensure you hire with confidence, speed, and long-term success in mind.</p>
    `,
  },
  {
    title: "End-to-End Talent Support",
    image: image3,
    mobileImage: Talent_Support_Mobile,
    content: `
      <p class="text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">We don’t just fill roles—we partner with you to design and deliver scalable, future-ready
workforce strategies. Our end-to-end talent solutions provide full visibility, flexibility, and
control over your hiring needs—from one-off placements to high-volume builds.</p>
      
      <p class="text-[18px] leading-[150%] text-[#7b7b7b] ]">Our support includes:</p>
      
      <ul class="list-disc pl-5 space-y-2 text-[18px] leading-[150%] text-[#7b7b7b] mb-[20px]">
        <li>Scalable hiring for single roles, project teams, or entire departments</li>
        <li>Contract-to-hire models for flexibility and fit-testing before committing</li>
        <li>Hybrid workforce strategies, blending full-time, freelance, and remote talent</li>
        <li>Local and international compliance, visa support, and contractor administration</li>
        <li>Onboarding, training, and relocation for domestic and global hires</li>
        <li>Managed services for long-term workforce planning, payroll, and performance tracking</li>
      </ul>
      
      <p class="text-[18px] leading-[150%] text-[#7b7b7b]">Whether you&#39;re growing, restructuring, or delivering a time-critical project, we tailor our
solutions to match your goals, timelines, and operational realities—so your workforce is
always aligned, efficient, and ready to deliver.</p>
    `,
  },
];

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-[#F8F9FE]"
      style={{ backgroundImage: isMobile ? "none" : `url(${bgImage})` }}
    >
      <div className="container py-[40px] lg:py-[80px] mx-auto px-[24px]">
        <div className="pb-3 lg:pb-[20px]">
          <h2 className="text-[30px] lg:text-[54px] leading-[150%] text-[#2B1845] font-semibold lg:font-medium text-center lg:text-left tracking-[-1px] lg:tracking-[0px]">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-[900px] text-[18px] text-[#646868] leading-[150%] text-center lg:text-left">
            We offer flexible recruitment solutions—contract, permanent, and
            executive search—to ensure your project's success from start to
            finish.
          </p>
        </div>

        <div>
          <div className="flex lg:grid lg:grid-cols-3 gap-[10px] mb-3 lg:mb-[40px] overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer text-center px-5 py-[10px] lg:p-5 lg:border lg:rounded-[12px] lg:shadow-md scrollbar-hide ${
                  activeTab === index
                    ? "border-b border-b-[#864EFF] lg:border-[#864EFF] lg:bg-[#ECEEFF]"
                    : " lg:border-[#ffffff] lg:bg-[#ffffff]"
                }`}
              >
                <p className="text-[20px] lg:text-[24px] font-medium lg:font-normal leading-[150%] bg-gradient-to-r from-[#864EFF]  to-[#502F99] bg-clip-text text-transparent whitespace-nowrap">
                  {tab.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap md:flex-nowrap lg:gap-[20px] items-start min-h-[400px]">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-[40%] lg:rounded-[12px] overflow-hidden relative max-h-[515px] mt-4 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tabs[activeTab].title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute z-[10] top-[10px] lg:top-[20px] left-[20px] text-[18px] lg:text-[40px] font-[800] lg:font-normal leading-[120%] text-[#ffffff]"
                >
                  {tabs[activeTab].title}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {/* <motion.img
                  key={tabs[activeTab].image}
                  src={tabs[activeTab].image}
                  alt=""
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='w-full h-full object-cover'
                /> */}
                <motion.img
                  key={tabs[activeTab].image}
                  src={
                    isMobile
                      ? tabs[activeTab].mobileImage
                      : tabs[activeTab].image
                  }
                  alt=""
                  initial={{ opacity: 0, filter: "blur(8px)", scale: 1.1 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)", scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="w-full h-[180px] lg:h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A5A5A] to-[rgba(66,66,66,0)] opacity-60 pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[60%]d p-[20px] bg-[#ffffff] lg:rounded-[12px] rounded-bl-[12px] rounded-br-[12px] text-[#7B7B7B] text-[18px] leading-[150%] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tabs[activeTab].content}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="h-[440px] lg:h-full overflow-y-scroll lg:overflow-hidden"
                >
                  <div dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
