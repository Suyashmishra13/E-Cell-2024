import React from 'react';

import Banner from './Banner';
import About from './About';
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Initiatives from './Initiatives'


import BannerData from "../data/Banner.json";
// import BlogsData from './data/Blogs.json';

export default function Homepage(){
    return(
        <>
        {/* <div className="container mx-auto mb-8 px-8 z-100">  */}
        <Navbar />

      {/* </div> */}
        <Banner {...BannerData}/>
        <About />
        <Gallery/>
        <Blogs/>
        {/* <Initiatives/> */}
        </>
    )
}