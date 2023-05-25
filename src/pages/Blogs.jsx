import React from 'react';
import img from './1.jpg';

export default function Blogs() {
  return (
    <div>
      <div className = "flex min-h-screen items-center justify-center bg-cyan-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white">Social Media</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit mollitia. Earum!</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white">Social Media</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo deserunt illum!</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white">Social Media</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae voluptatum corporis.</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        
       
      </div>
    </div>
  )
}
