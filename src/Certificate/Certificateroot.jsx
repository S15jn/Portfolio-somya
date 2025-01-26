import React from 'react';
import Certificate from './Certificate';
import Heading from '../heading/Heading';
import './Certificateroot.css'; // Import the CSS file

const CustomStar = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-star animate-scale"
    style={style}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function Certificateroot() {
  return (
    <div className="mt-10">
      <Heading heads={"Certificates"} />
      <div className="flex gap-9 p-6 place-content-center">
      <div className="star-container right-4">
        <CustomStar
          style={{
            width: "18px",
            height: "18px",
          }}
        />
      </div> <div className="star-container">
        <CustomStar
          style={{
            width: "15px",
            height: "15px",
          }}
        />
      </div> <div className="star-container">
        <CustomStar
          style={{
            width: "15px",
            height: "15px",
          }}
        />
      </div>
      </div>
      <Certificate />
      
    </div>
  );
}
