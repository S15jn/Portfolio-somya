import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import Projectroot from './Projectroot';
import { MdOutlineExpandLess } from "react-icons/md";
import AdditionalProject from './AdditionalProject';
import Heading from '../heading/Heading'
import { Circle } from "react-awesome-shapes";
import './Project.css'



export default function Project() {
  const [showMore, setShowMore] = useState(false);

  const toggleProjects = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Heading heads={"Projects"}/>
      <Circle
      className='Circle left-9  drop-down-animation'
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['120px', '120px', '130px', '130px']}
    zIndex={2}
/>
      <Circle
      className='Circle right-1 place-content-end justify-end  drop-down-animation'
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['120px', '120px', '130px', '130px']}
    zIndex={2}
/>
<Circle
className='Circle right-5 drop-down-slow-animation'
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['100px', '100px', '110px', '110px']}
    zIndex={2}
/>
      <Projectroot />
      {showMore && (
        <div className="additional-projects">
          <AdditionalProject />
        </div>
      )}
      <button
        onClick={toggleProjects}
        className="btn-toggle flex items-center justify-center mt-8 rounded-3xl"
        style={{
          padding: '10px 20px',
          backgroundColor: '#b8e6fe',
          color: '0f172b',
          border: 'none',
         
          cursor: 'pointer',
        }}
      >
        {showMore ? (
  <>
    Less &nbsp; <MdOutlineExpandLess />
  </>
) : (
  <>
    More &nbsp; <MdExpandMore />
  </>
)}

      </button>
    </div>
  );
}
