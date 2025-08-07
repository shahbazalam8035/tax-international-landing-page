import { useEffect } from "react";
import Section1 from "../../componments/elements/macros/ai-interview/Section1";
import Section2 from "../../componments/elements/macros/ai-interview/Section2";
import Section3 from "../../componments/elements/macros/ai-interview/Section3";
import Section4 from "../../componments/elements/macros/ai-interview/Section4";

function AiInterview() {
  return (
    <div className="bg-[#F5F7FF]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default AiInterview;
