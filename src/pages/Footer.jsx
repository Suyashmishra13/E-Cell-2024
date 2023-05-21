import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer(props) {
  return (
    <footer className="bg-black py-8 px-4 sm:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img src={process.env.PUBLIC_URL + "/images/logo_ecell.svg"} alt="Logo" />
              <div className="flex flex-col space-y-1">
                <span className="text-[#0060A1] font-bold text-3xl">Ecell</span>
                <span className="text-white font-bold text-lg">IIT Indore</span>
              </div>
            </div>
            <p className="text-gray-400 pr-4">
              {props.description}
            </p>
            <div className="flex space-x-4">
              <a href={props.facebook} target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                  <FaFacebook className="text-black text-xl" />
                </div>
              </a>
              <a href={props.twitter} target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                  <FaTwitter className="text-black text-xl" />
                </div>
              </a>
              <a href={props.instagram} target="_blank">
                <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                  <FaInstagram className="text-black text-xl" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {props.pages1.map((page, e) => (
              <a key={e} href={page.link} className="text-white hover:text-gray-400 font-semibold">
                {page.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {props.pages2.map((page, e) => (
              <a key={e} href={page.link} className="text-white hover:text-gray-400 font-semibold">
                {page.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-white text-lg font-bold">
              Contact Information
            </div>
            {props.contact_info.map((info, e) => (
              <p key={e} className="text-gray-400">{info.title}: {info.description}</p>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-white">
          &copy; {new Date().getFullYear()} {props.copyright}
        </div>
      </div>
    </footer>
  );
}
