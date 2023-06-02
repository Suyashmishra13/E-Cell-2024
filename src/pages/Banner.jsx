import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="banner bg-white w-full h-screen m-0">

      {/* Background Video */}

      <video
        className="w-full h-full object-cover absolute z-10 opacity-20"
        autoPlay
        muted
        loop
        src={process.env.PUBLIC_URL + "/videos/banner_background.mp4"}
      />

      {/* Banner Text Block */}

      <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
        <div className="mx-auto max-w-2xl h-[60vh] py-32 sm:py-48 lg:py-56">
          <div className="text-center overflow-hidden">
            <p className="bannerTagline font-['Nunito'] font-bold text-[35px] -tracking-[0.04em] leading-[30px] text-[#1B262C]">
              Spreading the sprit of Entreprenuership
            </p>
            <h1 className="bannerHeading pt-4 font-['Inter'] font-bold text-[45px] md:text-[50px] -tracking-[0.04em] leading-[60px] text-black capitalize">
              Entrepreneurship Cell
              <br />
              IIT <span className="text-[#0060A1]"> Indore</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Social Media Block */}

      <div className="socialMedia absolute right-0 bottom-28 mr-6 z-40 invisible md:visible">
        <div className="flex flex-col space-y-3">
          <a href={props.linkedin} target="_blank">
            <div className="w-[54px] h-[54px] rounded-full bg-[#D9D9D9] hover:bg-[#0060A1] text-[#0060A1] hover:text-white flex items-center justify-center">
              <FaLinkedin className="text-4xl" />
            </div>
          </a>
          <a href={props.linkedin} target="_blank">
            <div className="w-[54px] h-[54px] rounded-full bg-[#D9D9D9] hover:bg-[#0060A1] text-[#0060A1] hover:text-white flex items-center justify-center">
              <FaLinkedin className="text-4xl" />
            </div>
          </a>
          <a href={props.linkedin} target="_blank">
            <div className="w-[54px] h-[54px] rounded-full bg-[#D9D9D9] hover:bg-[#0060A1] text-[#0060A1] hover:text-white flex items-center justify-center">
              <FaLinkedin className="text-4xl" />
            </div>
          </a>
          <a href={props.linkedin} target="_blank">
            <div className="w-[54px] h-[54px] rounded-full bg-[#D9D9D9] hover:bg-[#0060A1] text-[#0060A1] hover:text-white flex items-center justify-center">
              <FaLinkedin className="text-4xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
