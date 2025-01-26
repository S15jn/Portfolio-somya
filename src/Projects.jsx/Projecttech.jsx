import React from 'react';
import './Projecttech.css';

export default function Projecttech({ skills }) { 
  return (
    <div className='flex gap-3 justify-end justify-items-end'>
      {skills.map((item, index) => (
        <div className='tech capitalize' key={index}>{item}</div>
      ))}
    </div>
  );
}
