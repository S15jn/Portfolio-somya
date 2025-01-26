import React from 'react';
import Skillset from './skillset';
import Heading from '../heading/Heading';

export default function Skill() {
  return (
    <div className="mt-[10vh] sm:mt-[10vh] md:mt-10 lg:mt-3 flex-wrap"> {/* Responsive margin */}
      <Heading heads={"Skill"} />
      <Skillset />
    </div>
  );
}
