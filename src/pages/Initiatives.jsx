
import React from "react";
import CardContainer from "../helpers/CardContainer";
import "./css/style.css" 

export default function Initiatives() {
    return(
        <>
            <div className = "Initiatives">
                <div className = "Header">
                    <h1 className=" text-white hover: text-blue inline-block font-montserrat font-bold text-4xl leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red ">OUR</h1>
                    <h1 className=" text-#3282B8 hover: text-blue inline-block font-montserrat font-bold text-4xl leading-10 transition-transform duration-300 ease-out transform-gpu hover:translate-y-[-2px] hover:text-red ">INITIATIVES</h1>
                <div className="container_Ini">
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                </div>
                </div>
            </div>
        
        </>
    );
}