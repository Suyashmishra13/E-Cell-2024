import React from 'react';
import img from './Screenshot (139).png';

export default function Blogs() {
  return (
    <div className='bg-gradient-to-t from-[#0F4F7A] to-[#DDDDDD] translate-y-[-8rem]'>
        <div className = "flex-col min-h-screen items-center justify-center ">
         <div className='flex items-center justify-center text-center gap-4 text-6xl font-bold  my-32 translate-y-[100%] drop-shadow-lg transition-transform duration-500 transform translate-x-0'>
           <div className='drop-shadow-lg'>OUR</div>
           <div className='text-[#0060A1]'>BLOGS</div>   
    </div>
      <div className = "flex items-center justify-center">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
                <div className="h-96 w-96">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white mb-20 group-hover:mb-4">Detangling McDonalds</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering happy meals as children to...</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
                <div className="h-96 w-96">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white mb-20 group-hover:mb-4">Detangling McDonalds</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering happy meals as children to...</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-3xl">
                <div className="h-96 w-96">
                    <img  className ="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center translate-y-[64%] group-hover:translate-y-0 transitin-all">
                        <h1 className = "font-dmserif text-3xl font-bold text-white mb-20 group-hover:mb-4">Detangling McDonalds</h1>
                        <p className = "text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mc Donald's is probably one of the very first quick service restaurants that have been established in India,and God,they stayed.From ordering happy meals as children to...</p>
                        <button className ="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                            Read More
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
       
      </div>
      </div>
    </div>
  )
}

