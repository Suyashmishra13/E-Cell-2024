import React, { useState }  from "react";
import {FaArrowLeft , FaArrowRight ,FaWindowClose} from "react-icons/fa";

function App(props) {
   
    return (
       <section id="events">
        <div className="bg-gradient-to-b from-[#00538169] via-[#3282B885] to-[#1B262CCC]">
         
        <div className="flex flex-col justify-center items-center wow animate__animated animate__fadeInUpBig">
            <h1 className="text-center pt-10 pb-28 text-6xl font-semibold">RECENT <span className="text-[#0060a1]">EVENTS</span></h1>

            <div className="flex justify-center items-center w-full lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-8 pb-32 md:px-32 ">
                    {props.recent.map((val,e)=>(
                           
                        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl wow animate__animated animate__fadeInUpBig">
                        
                        <div className="h-96 w-full">
                            <img  className ="h-full w-full object-cover transition-transform duration-500 delay-3000" src={val.img} alt="img" />
                        </div>
                        <div className="w-full absolute inset-0">
                            <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] group-hover:translate-y-0 transition-transform ease-in group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75 delay-3000 duration-3000">
                                <div className="bg-[#1B2A2C] bg-opacity-75 w-full py-4 mb-4 group-hover:bg-opacity-0">
                                <h1 className = "font-dmserif text-3xl font-bold text-white mb-4 group-hover:mb-4 ">{val.heading}</h1>
                                </div>
                                <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.content}</p>                                             
                                <p><a href="#">Know More...</a></p>
                                                       
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center py-16 text-6xl font-semibold wow animate__animated animate__fadeInUpBig">UPCOMING <span className="text-[#0060a1]">EVENTS</span></h1>

            <div className="w-full">
                <div className="grid  pb-32 ">
                {props.upcoming.map((val,e)=>(
                     <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl wow animate__animated animate__fadeInUpBig
                     ">
                     <div className="h-full w-full">
                         <img  className ="h-full w-full object-cover transition-transform duration-500 delay-500 group-hover:bg-opacity-0.1" src={val.img} alt="" />
                     </div>
                     <div className="w-full absolute inset-0">
                         <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] group-hover:translate-y-0 transition-transform ease-in group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75 delay-3000 duration-3000">
                             <div className="bg-[#1B2A2C] bg-opacity-75 opacity-0 w-full py-4 mb-4 group-hover:bg-opacity-0 group-hover:opacity-100">
                             <h1 className="font-dmserif text-6xl font-bold text-white mb-4 group-hover:mb-4 ">E-Summit <span className="text-[#0060a1]">2023</span></h1>  
                             </div>
                             <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.content}</p>
                             
                         </div>
                     </div>
                 </div>
                ))}
             </div>  
            </div>
        </div>
        </div>
</section>
    )
};

export default App
