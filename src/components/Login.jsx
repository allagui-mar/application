
import React, { useState } from 'react';
import './Login.css';
import LogoGo from '../assets/LogoGo.png';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
export default function Login(){

    const [isHovered, setIsHovered] = useState(true); 

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const cardStyles = {
    border: '2px solid #e74c3c',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)', 
    padding: '20px',
    backgroundColor: '#ffffff',
    maxWidth: '350px',
    height: '500px',
    position: 'absolute',
    width: '350px',
    left: '550px',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000000',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    
  };

    return(
        <div>
            <img src={LogoGo} alt="logo" className="animat-log"/>
            <div
      className="card4"
      style={cardStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="card4-content">
        <h2>LOG<span style={{color: 'red'}}>IN</span></h2>
       
      </div>
      </div>
       
      <img src={LogoGo} alt="logo" className="log"/>
     

        </div>
    )
}