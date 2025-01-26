import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNode,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMui, SiMongodb, SiExpress, SiNodemon } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import './skillset.css';

export default function Skillset() {
  const icons = [
    { component: <FaHtml5 />, color: "#E34F26" },
    { component: <FaCss3Alt />, color: "#1572B6" },
    { component: <FaJs />, color: "#F7DF1E" },
    { component: <FaBootstrap />, color: "#7952B3" },
    { component: <RiTailwindCssFill />, color: "#06B6D4" },
    { component: <SiMui />, color: "#007FFF" },
    { component: <FaNode />, color: "#339933" },
    { component: <SiExpress />, color: "#0fbdff" },
    { component: <SiMongodb />, color: "#47A248" },
    { component: <SiNodemon />, color: "#76D04B" },
    { component: <FaJava />, color: "#007396" },
    { component: <FaPython />, color: "#3776AB" },
  ];

  return (
    <div className="grid-container justify-items-center">
      {icons.map((item, index) => (
        <div
          className="icons text-4xl justify-items-center"
          key={index}
          style={{ color: item.color }}
        >
          {item.component}
        </div>
      ))}
    </div>
  );
}
