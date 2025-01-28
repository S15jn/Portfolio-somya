import React from 'react'
import Projectset from './Projectset'
import Projecttech from './Projecttech'
import Projectname from './Projectname'
import Projectbtn from './Projectbtn';
import somport from './projectasset/ssomport.png';
import ssomport from './projectasset/sssomport.png';
import soms from './projectasset/somport.png';
import weather from './projectasset/weather.png';
import sweather from './projectasset/sweather.png'
import ssweather from './projectasset/sswaether.png'


export default function AdditionalProject() {
  return (
    <>
      {/* Projrct 2-SomayPortfolio */}
          <Projectname Pname={"Somya's Portfolio"}/> 
               <div className='flex justify-items-center justify-evenly flex-wrap mt-3'>
               
               <Projectset  Limg={soms} Simg={somport} SSimg={ssomport}/>
              <Projecttech skills={['react','javascript','tailwind Css','css']}/>
              <Projectbtn link={"https://github.com/S15jn/Portfolio-somya"} live={"https://portfolio-somya.vercel.app/"}/>
                 
               </div>
              
    {/* Projrct 4-Wanderlust */}
                   {/* <Projectname Pname={"Wanderlust"}/>
                        <div className='flex justify-items-center justify-evenly flex-wrap mt-3'>
                        
                        <Projectset/>
                       <Projecttech skills={['node','mongodb','express','javascript','css','html']}/>
                    
                       <Projectbtn/>
                        </div> */}

    {/* Projrct 4-WeatherApp */}

                   <Projectname Pname={"WeatherApp"}/>
                        <div className='flex justify-items-center justify-evenly flex-wrap mt-3'>
                        
                        <Projectset Limg={weather} Simg={sweather} SSimg={ssweather}/>
                       <Projecttech skills={['React','javascript',"API's","material UI"]}/>
                    
                       <Projectbtn live={"https://weather-app-dun-eight-35.vercel.app/"} link={"https://github.com/S15jn/WeatherApp"}/>
                        </div>
    </>
  )
}

