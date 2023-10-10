import React from "react";
import './Home.css'
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Login from "./Login";
import LogoGo from '../assets/LogoGo.png';
import carde from '../assets/carde.png';
import ii from '../assets/ii.png';
import im from '../assets/im.png';
export default function Home (){
    const navig = useNavigate()
   
  return(
    <body style={{ backgroundColor: '#EEEEEE' }}>
    <div>
       <img src={LogoGo} alt="logo" className="animat-log"/>
       <h1 className="titre">GOMYCODE <span style={{ color: 'red' }}>COURSES</span></h1>
       <div className="card">
      <div className="card-content">
        <h2>WHAT IS GO<span style={{color: 'red'}}>MYCODE</span>COURSES</h2>
        <p>GOMYCODE COURSES is a plate-forme that provides you with the opportunity to manage your courses, consult the students list, the students group and to constact them whenever you it's necessary.</p>
        <img src={carde} alt="Card Image"  />
      </div>
      
      <div className="card3">
      <div className="card-content3">
        <h2>TO THE NEXT <span style={{color: 'red'}}>STEP</span></h2>
        <p>Are you ready to discover our GO<span style={{color: 'red'}}>MYCODE COURSES ?</span></p>
        <img src={im} alt="Card Image" style={{
           position: 'absolute',
           top: 280,
           resizeMode: 'center',
           height: 60,
           width: 50,
           backgroundColor: '#fff',
           left:55,
           
        }}  /><button className="batouna"  id="loula" onClick={()=>{navig('/Login')}} > Get Started</button>
      </div>
      
    </div>

    </div>
    <div className="card1">
      <div className="card-content1">
        <h2>WHAT IS GO<span style={{color: 'red'}}>MYCODE</span> ?</h2>
        <p>GOMYCODE is an innovative educational Startup that trains top talents on the latest digital skills through a hybrid learning model that combines in-person guidance and an online learning platform.</p>
        <img src={ii} alt="ii Image" />
      </div>
      
    </div>
    </div>
    </body>
  )
}