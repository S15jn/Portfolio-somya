import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import './Projectbtn.css'
import { MdLiveTv } from "react-icons/md";

export default function Projectbtn({link,live}) {
  return (
    <div className="github-container flex">
    <a
      href={link ?link :"not found"}
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <IoLogoGithub className="github-icon" />
      <FaArrowCircleUp className="arrow-icon" />
    </a>
     <div className='m-3 text-3xl p-7'>
     <a  className='live'href={live ?live :"not found" }>
    <MdLiveTv  className='live-btn'/>
    </a>
     </div>
  </div>
  )
}
