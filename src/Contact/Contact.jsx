import React from 'react';
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaCodeFork } from "react-icons/fa6";
import Heading from '../heading/Heading';
import { Donut } from "react-awesome-shapes";
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact flex flex-col items-center justify-center h-screen p-4 relative">





      <Heading heads={"Contact"} />

      <footer className="flex flex-col sm:flex-row items-center justify-items-center gap-4 p-10 ">
        <div className="icon flex flex-col items-center gap-5">
          <a href="https://github.com/S15jn">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/somyajain2002/">
            <RiLinkedinFill size={40} />
          </a>
        </div>

        <div className="line border-l-2 h-20 hidden sm:block"></div>

        <div className="suggestion flex flex-col items-center gap-5">
          <a href="mailto:somujain10@gmail.com" className="flex items-center gap-2 text-[#314158] hover:text-black transition duration-300">
            <MdEmail size={30} /> <span className="text-lg">somyajain853.com</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-black transition duration-300">
            Help me to improve <FaCodeFork size={30} />
          </a>
        </div>
      </footer>


      <div>
        &copy; Developed By Somya Jain
      </div>
      <Donut
        className="Donut animate-rotate"
        color="#f43f5e"
        size="3px"
        width={['10px', '10px', '10px', '10px']}
        zIndex={0}

      />
      <Donut
        className="Donut animate-rotate left-5"
        color="#fff"
        size="9px"
        width={['20px', '10px', '10px', '10px']}
        zIndex={0}

      />
      <Donut
        className="Donut animate-rotaterev e left-3"
        color="#0fbdff"
        size="3px"
        width={['10px', '10px', '10px', '10px']}
        zIndex={0}

      />
      <Donut
        className="Donut animate-rotaterev e right-5 m-6"
        color="#7dad3f"
        size="10px"
        width={['10px', '10px', '10px', '10px']}
        zIndex={0}

      />
      <Donut
        className="Donut animate-rotaterev right-9"
        color="#0fbdff"
        size="17px"
        width={['17px', '17px', '10px', '10px']}
        zIndex={0}

      />
    </div>
  );
}
