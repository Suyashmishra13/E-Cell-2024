import React from 'react';

import Banner from './Banner';
import Blogs from "./Blogs";
import Gallery from "./Gallery";

import BannerData from "../data/Banner.json";
// import BlogsData from './data/Blogs.json';

export default function Homepage(){
    return(
        <>
        <Banner {...BannerData}/>
        <Gallery/>
        <Blogs/>
        </>
    )
}