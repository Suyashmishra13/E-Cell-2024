import React from "react";
import { useInView } from "react-intersection-observer";

import "./About.css";

export default function About() {
  // applying animation only when the about section appears on the screen

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the section becomes visible
    threshold: 0.3, // Percentage of the section's visibility required to trigger the intersection
  });

  return (
    <div
      ref={ref}
      className={`about w-full h-fit bg-gradient-to-b from-[#84A9BE00] to-[#3687B2] py-36 ${
        inView ? "aboutSectionVisible" : ""
      }`}
    >
      <div className="aboutContainer fluid justify-center items-center max-w-[70vw] mx-auto text-center">
        <div className="overflow-hidden p-1">
          <h1 className="aboutHeading font-['Inter'] font-semibold text-[40px] -tracking-[0.04em] leading-[30px] text-black capitalize">
            About Us
          </h1>
        </div>
        <div className="aboutContent font-['Inter'] font-medium text-[18px] -tracking-[0.04em] leading-[30px] text-[#1B262C] mt-14 overflow-hidden">
          <p className="para1">
            Lorem ipsum dolor sit amet. Id beatae atque aut alias culpa et
            internos quia qui sapiente tenetur. Qui sint temporibus qui illum
            expedita et alias ipsam ea excepturi alias est consectetur ullam ut
            nesciunt itaque qui iusto cupiditate.
          </p>
          <p className="para2 mt-2">
            Id consequatur enim non debitis doloremque aut harum consequuntur
            qui laboriosam saepe. Et assumenda tempora est illum quia et
            temporibus dignissimos hic corporis ullam. At molestias modi vel
            animi iste vel illo laudantium est earum optio non magnam labore ut
            cumque nulla. Qui tempore aliquid qui earum totam ut magnam placeat
            ea aliquam molestiae. Vel veniam quaerat ea doloribus dolore et
            ipsum sunt nam quos laborum qui velit accusantium in quia quod.
          </p>
        </div>
      </div>
    </div>
  );
}
