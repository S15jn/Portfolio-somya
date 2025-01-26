import React, { useState } from 'react';
import Heading from '../heading/Heading';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import me from './me.jpeg'
import './About.css';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="abt text-[#90a1b9]">
      <div className="titles">
        <Heading heads={"About"} />
        <div className="flex flex-wrap">
          {/* About Section */}
          <div className="shine w-1/4 border-2 m-10 bg-slate-300 rounded-3xl justify-between place-items-center flex">
            <h3 className="bg-slate-300 text-[#0f172b]">
              Hello, I'm Somya Jain. I'm a Full Stack Developer.
            </h3>
          </div>
        </div>

        {/* Education Section */}
        <div className="studies p-10 border-2 m-10 rounded-3xl text-[#0fbdff]">
          <ul>
            <li>
              <strong>Education:</strong> Pursuing an Integrated MCA program at IIPS, DAVV, Indore.
            </li>
            <br />
            <li>
              <strong>Academic Standing:</strong> Currently in the 4th year with a consistent CGPA of 7.5+, reflecting strong academic performance.
            </li>
          </ul>
        </div>

        {/* Lottie Animation or Image */}
        <div className="img-container flex justify-center items-center">
          {isHovered ? (
            <img
              src={me}
              alt="Hovered Avatar"
              className="avatar-image"
              onMouseLeave={() => setIsHovered(false)}
            />
          ) : (
            <DotLottieReact
              src="https://lottie.host/c8e948c1-fd4a-4775-8b14-97e3c7ce8fc9/w1Z0ZE16U1.lottie"
              loop
              autoplay
              style={{ width: "300px", height: "300px" }}
              onMouseEnter={() => setIsHovered(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
