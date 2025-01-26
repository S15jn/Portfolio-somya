import React from 'react'
import Projectset from './Projectset';
import Projecttech from './Projecttech';
import Projectname from './Projectname';
import ochi1 from './projectasset/ochi1.png';
import sochi from './projectasset/ochi2.png';
import SSochi from './projectasset/ochi3.png';
import Projectbtn from './Projectbtn';
import somya from './projectasset/somya1.png';
import sssomya from './projectasset/sssomya.png';
import ssomya from './projectasset/ssomya.png';

export default function Projectroot() {
  return (
    <>
    {/* Projrct 1-Ochi */}
     <Projectname Pname={"Ochi"}/>
          <div className='flex justify-items-center justify-evenly flex-wrap mt-3'>
          
          <Projectset SSimg={SSochi} Simg={sochi} Limg={ochi1}/>
         <Projecttech skills={['react','javascript','css','tailwind']}/>
         <Projectbtn link={"https://github.com/S15jn/Ochi_Project"} live={"https://ochi-project-nine.vercel.app/"}/>
       
            
          </div>
          
    {/* Projrct 2-SomayPortfolio */}
     <Projectname Pname={"Somya Portfolio"}/>
          <div className='flex justify-items-center justify-evenly flex-wrap mt-3'>
          
          <Projectset Simg={ssomya}  SSimg={sssomya} Limg={somya}/>
         <Projecttech skills={['react','javascript','material UI','css']}/>
         <Projectbtn live={"https://somya-react-portfolio.vercel.app/"} link={"https://github.com/S15jn/SomyaReactPortfolio-"}/>
            
          </div>
   

    </>
  )
}
