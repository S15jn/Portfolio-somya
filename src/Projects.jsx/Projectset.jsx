import React from 'react';
import './Projectset.css'
import Projecttech from './Projecttech';


export default function Projectset({Simg,SSimg,Limg}) {
  return (
    <div className='flex p-10 gap-3'>
         <div className="short imgHover">
       <img src={Simg} alt=""  />
      </div>
      <div className="image imgHover">
       <img src={Limg} alt=""  />
      </div>
      <div className="short down imgHover">
       <img src={SSimg} alt=""  />
      </div>

 

    </div>
  )
}
