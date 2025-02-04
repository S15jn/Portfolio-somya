import React from 'react';
import logo from './female.png';
import './Home.css';
import { MdWavingHand } from "react-icons/md";
import { CircleGrid } from "react-awesome-shapes";
import somyacv from "./Somya-Jain-Resume.pdf";

export default function Home() {
  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-between m-10 relative">
      
      <CircleGrid
      className='topgrid'
   
    color="#10b981"
    size="150px"
    zIndex={1}
/>

      
      <div className="title font-bold leading-none text-center md:text-left p-10 md:w-1/2 z-20  bg-transparent">
        <h3 className="text-[#cfe0da] text-[5vh] md:text-[7vh] flex items-center justify-center md:justify-start">
          I'm Somya Jain &nbsp; 
          <span className="wave text-[#0fbdff]">
            <MdWavingHand />
          </span>
        </h3>
        <h1 className="text-[9vh] lg:text-[18vh] md:text-[16vh] sm:text-[13vh] text-teal-700 p-4 proession">
          Full Stack Developer
        </h1>
        <div className="download inline-block">
       <button className='border-2 p-5 rounded-full mt-5 dwonloadbtn bg-transparent custom-btn btn-9'><a href={somyacv} className='bg-transparent'>DownloadCV</a></button>
      </div>
      </div>
      

      {/* Logo Section */}
      <div className="logo md:w-1/2 flex justify-center items-center flex-wrap">
        <img src={logo} alt="img" className="logosvg w-full h-full " />
      </div>
    </div>
  );
}
