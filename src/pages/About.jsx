import React from "react";
import { useInView } from "react-intersection-observer";

import "../css/About.css";

export default function About() {
  // applying animation only when the about section appears on the screen

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the section becomes visible
    threshold: 0.3, // Percentage of the section's visibility required to trigger the intersection
  });

  return (
    <div
      ref={ref}
      className={`about w-full h-fit bg-gradient-to-b from-[#84A9BE] to-[#005381] py-24 ${
        inView ? "aboutSectionVisible" : ""
      }`}
    >
      <div className="aboutContainer fluid justify-center items-center max-w-[70vw] mx-auto text-center">
        <div className="overflow-hidden p-1">
          <h1 className="aboutHeading font-['Inter'] font-normal text-[50px] -tracking-[0.04em] leading-[30px] text-black capitalize leading-10">
            E-CELL IIT INDORE
          </h1>
        </div>
        <div className="aboutContent font-['Inter'] font-normal text-[18px] -tracking-[0.04em] leading-[30px] text-[#1B262C] mt-14 overflow-hidden mb-20">
          <p className="para1">
          Entrepreneurship Cell at IIT Indore believes that entrepreneurship is not just about starting companies, but a pathway towards India's socio-economic development. Our vision is to make students and faculty entrepreneurial in every work that they do. We hope to enable them to solve global challenges as we see students as the greatest capital and intend to nurture them, provide them with opportunities for excellence.
          </p>
        </div>
        <div className="overflow-hidden p-1">
          <h1 className="aboutHeading font-['Inter'] font-bold text-5xl -tracking-[0.04em] leading-[30px] text-black capitalize">
            VISION
          </h1>
        </div>
        <div className="aboutContent font-['Inter'] font-semibold text-[25px] -tracking-[0.04em] leading-[30px] text-[#1B262C] mt-14 overflow-hidden">
          <p className="para1">
          E-Cell aims to unlock students' latent inventive potential. Not only do we show you the doors of opportunity but we also equip you to walk through it. Through our conference, social events, lectures, speaker engagements and workshops, we're hoping to bring together everyone interested in the startup world and to help students best utilize resources to found or join startups...
          </p>
        </div>
      </div>
    </div>
  );
}
