import React from "react";
import Section1 from "../../componments/elements/macros/about-us/Section1";
import Section2 from "../../componments/elements/macros/about-us/Section2";
import Section3 from "../../componments/elements/macros/about-us/Section3";
import Section5 from "../../componments/elements/macros/about-us/Section5";
import Section4 from "../../componments/elements/macros/about-us/Section4";
//  should we not lazy load the components

function AboutUs() {
  return (
    <div className="bg-[#F5F7FF]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default AboutUs;
