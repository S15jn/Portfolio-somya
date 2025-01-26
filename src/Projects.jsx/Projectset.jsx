import React from 'react';
import './Projectset.css'
import Projecttech from './Projecttech';


export default function Projectset({Simg,SSimg,Limg}) {
  return (
    <div className='flex p-10 gap-3'>
         <div className="short">
       <img src={Simg} alt=""  />
      </div>
      <div className="image">
       <img src={Limg} alt=""  />
      </div>
      <div className="short down">
       <img src={SSimg} alt=""  />
      </div>

 

    </div>
  )
}
