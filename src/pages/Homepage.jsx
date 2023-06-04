import React from 'react';

import Banner from './Banner';
import About from './About';
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Initiatives from './Initiatives'
import Events from './Events';


import BannerData from "../data/Banner.json";
// import BlogsData from './data/Blogs.json';

export default function Homepage(){
    return(
        <>
        <Navbar />
        <Banner {...BannerData}/>
        <About />
        {/* <Initiatives/> */}
        <Events/>
        <Gallery/>
        <Blogs/>
        </>
    )
}