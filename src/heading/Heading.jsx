import React from 'react';
import './Heading.css';

export default function Heading({ heads }) {
  return (
    <div className="justify-items-center text-3xl capitalize decoration-double mt-4 sm:mt-[10rem] md:mt-16 lg:mt-2 pt-10">
      <h1 className="text-[#0fbdff]">.../{heads}...</h1>
    </div>
  );
}
