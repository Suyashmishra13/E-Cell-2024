import React from 'react';

import Banner from './Banner';
import About from './About';
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Initiatives from './Initiatives'
import Events from './Events';


import BannerData from "../data/Banner.json";
import NavbarData from "../data/Navabr.json"
import AboutData from "../data/About.json"
import EventsData from "../Events.json"
import BlogsData from '../data/Blogs.json';


export default function Homepage(){
    return(
        <>
        <Navbar {...NavbarData}/>
        <Banner {...BannerData}/>
        <About {...AboutData}/>
        {/* <Initiatives/> */}
        <Events {...EventsData}/>
        <Gallery/>
        <Blogs {...BlogsData} />
        </>
    )
}