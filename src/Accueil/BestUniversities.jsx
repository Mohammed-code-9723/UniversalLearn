import React,{useEffect,useState} from 'react';
import './Styles/BestUniversities.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { universities } from './data';
//
import {useSelector} from 'react-redux';
export default function BestUniversities() {
    const [verticalMode,setVerticalMode]=useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1074) {
                setVerticalMode(true);
                document.getElementById('sliderCard').style.height='50vh';
                document.getElementById('titleH2').style.width='50px';
                document.getElementById('sliderCard').style.width='150%';
                document.getElementById('sliderCard').style.marginBottom='12px';
                document.getElementById('sliderCard').style.marginLeft='50px';
            } else {
            setVerticalMode(false);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow:verticalMode?1:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        vertical: verticalMode,
        verticalSwiping: verticalMode,
    };    
    
    const themeColor=useSelector((state)=>state.theme.mode);
    return (
        <div className="slider-container">
            <Slider {...settings} className='universitiesSlider'>
                {
                    universities.map((item,index)=>(
                        <div key={index} id='sliderCard'>
                            <img id='imageSLide' src={item.image} alt={index} width={400} height={200}/>
                            <h2 id='titleH2' style={{width:'75%',color:themeColor==='dark'?'white':'black',transition:'0.8s'}}>{item.name.english}</h2>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
