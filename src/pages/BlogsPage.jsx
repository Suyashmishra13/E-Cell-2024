import React from "react";
import img1 from "../images/Ray_Kroc.png"
import img2 from "../images/burgers.png"

export default function BlogsPage() {
    return (
        <>
            <div className="bg-gray-900 py-16 px-36">
                <div className="py-8">
                    <h1 className="text-white text-6xl text-center font-bold pb-12">Detangling Mcdonalds...</h1>
                    <p className="text-right italic">Published on 15 May 2023</p>
                </div>
                
                <div className="flex w-full">
                <div className="w-2/5">
                        <img src={img1} className="w-96 py-32"></img>
                    </div>
                    <div className="w-3/5 pb-12 text-2xl pb-8">
                    <h1 className="text-white text-4xl font-bold pb-4">History</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure dicta sequi quis beatae obcaecati. Ea quaerat labore 
                            accusantium beatae voluptatum, voluptate temporibus porro 
                            iusto accusamus libero, nam maxime optio alias. Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Earum, amet.
                             Officia vero nihil, itaque, officiis ratione possimus alias 
                             vitae nam sed quisquam id maiores, dolorum quod unde eos 
                             repudiandae similique.</p>
                    <h1 className="text-white text-4xl font-bold pb-12">Business Model</h1>
                        <ul className="text-white list-disc">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Accusantium possimus repellat impedit eveniet.</li>
                             <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Accusantium possimus repellat impedit eveniet.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Accusantium possimus repellat impedit eveniet.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Accusantium possimus repellat impedit eveniet.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full">
                <div className="w-3/5 text-2xl pb-8">
                    <h1 className="text-white text-4xl font-bold pb-4">Revenue, Number of Branches</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure dicta sequi quis beatae obcaecati. Ea quaerat labore 
                            accusantium beatae voluptatum, voluptate temporibus porro 
                            iusto accusamus libero, nam maxime optio alias. Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit..</p>
                    <h1 className="text-white text-4xl font-bold pb-4">Growth Plan</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iure dicta sequi quis beatae obcaecati. Ea quaerat labore 
                            accusantium beatae voluptatum, voluptate temporibus porro 
                            iusto accusamus libero, nam maxime optio alias. Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="w-2/5 flex-column justify-center items-center m-auto">
                        <img src={img2} className="w-full"></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}