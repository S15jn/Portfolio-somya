import React, { useState } from 'react';
import Heading from '../heading/Heading';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import me from './me.jpeg';
import { GiClick } from "react-icons/gi";
import './About.css';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="abt text-[#90a1b9] flex flex-col items-center px-4">
      <Heading heads={"About"} />

      <div className="flex flex-wrap justify-center items-center w-full mt-6">
        <div className="shine w-4/5 md:w-1/3 border-2 p-4 m-4 bg-slate-300 rounded-3xl">
          <h3 className="text-[#0f172b] text-center ">
            Hello, I'm Somya Jain. I'm a Full Stack Developer.
          </h3>
        </div>
      </div>

      <div className="studies p-6 border-2 m-4 rounded-3xl text-[#0fbdff] w-4/5 md:w-1/2 bg-transparent">
        <ul className='bg-transparent'>
          <li className='bg-transparent'>
            <strong className='bg-transparent'>Education:</strong> Pursuing an Integrated MCA program at IIPS, DAVV, Indore.
          </li>
          <br />
          <li className='bg-transparent'>
            <strong className='bg-transparent'>Academic Standing:</strong> Currently in the 4th year with a consistent CGPA of 7.5+, reflecting strong academic performance.
          </li>
        </ul>
      </div>

      <div className="img-container relative flex flex-col items-center mt-6">
        <div
          className="centered text-xl sm:text-2xl z-10 text-[#bad0ff] flex items-center pt-1"
        >
          Click me <GiClick className="Click scaleup-animation ml-2 text-2xl sm:text-3xl" />
        </div>

        {isHovered ? (
          <img
            src={me}
            alt="Hovered Avatar"
            className="avatar-image z-10"
            onMouseLeave={() => setIsHovered(false)}
          />
        ) : (
          <DotLottieReact
            src="https://lottie.host/c8e948c1-fd4a-4775-8b14-97e3c7ce8fc9/w1Z0ZE16U1.lottie"
            loop
            className="bg-transparent"
            autoplay
            style={{ width: "200px", height: "200px" }}
            onClick={() => setIsHovered(true)}
          />
        )}
      </div>
    </div>
  );
}
