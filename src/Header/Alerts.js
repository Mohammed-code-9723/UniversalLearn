import React, { useState, useEffect } from 'react';
import image1 from './IconsHeader/image1.png';
import image2 from './IconsHeader/image2.png';
import image3 from './IconsHeader/image3.png';
import { BsMoonStars, BsMoonFill } from 'react-icons/bs';
import { toggleMode } from '../Store/ThemeSlice';
import {useDispatch,useSelector} from 'react-redux';
import "./Styles/Alerts.css";
import { Button } from '@mui/joy';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
function Alerts() {
    const [close, setClose] = useState(false);
    const [lightMode, setLightMode] = useState(true);
    
        const dispatch=useDispatch();
        const theme=useSelector((state)=>state.theme);

        useEffect(()=>{
          
          if (lightMode) {
            dispatch(toggleMode('light')); 
            document.body.style.background='linear-gradient(143deg, rgba(210,210,210,1) 0%, rgba(198,196,196,1) 27%, rgba(255,255,255,1) 46%, rgba(212,214,214,1) 66%, rgba(208,209,209,1) 80%, rgba(210,210,210,1) 100%)';
            document.body.style.backgroundPosition='center';
            document.body.style.backgroundSize='cover';
            document.body.style.backgroundRepeat='no-repeat';
          }else{
            dispatch(toggleMode('dark')); 
            document.body.style.background=`url(LandingPageDarkModeColor.svg)`;
            document.body.style.backgroundSize='cover';
            document.body.style.backgroundRepeat='no-repeat';
          }
        },[lightMode]);

        const toggleMood = () => {
          setLightMode(!lightMode);
        };

  return (
    <div className="alerts-wrapper">
      <div id='alertUI' className={`box ${close ? 'closed' : ''}`}>     
        <div className="group">
          <div className="left-section" >
          &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; 
            <img className="phone" alt="Phone" src={image1} />
            <a className="div" href="tel:(+1)3344999999" rel="noopener noreferrer" target="_blank">
            (+212) 6344 999 999
            </a>
          </div>

          <div className="center-section">
            <img className="email" alt="Email" src={image2} />
            <div className="text-wrapper">WEHELP@gmail.com</div>
          </div>

          <div className="right-section">
            <img className="fax" alt="Fax" src={image3} />
            <a className="text-wrapper-2" href="tel:(+1)3344999999" rel="noopener noreferrer" target="_blank">
              (+212) 5344 999 999
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <span className='mode'>
              {lightMode ? <Button onClick={toggleMood} sx={{background:'transparent'}} onMouseEnter={(e)=>e.target.style.background='transparent'}><MdLightMode/></Button>:<Button onClick={toggleMood} sx={{background:'transparent'}} onMouseEnter={(e)=>e.target.style.background='transparent'}><MdDarkMode/></Button>}         
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
