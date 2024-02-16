import React from 'react';
import { FaStar } from "react-icons/fa6";
import './Styles/Statistics.css';
import {useSelector} from 'react-redux';
export default function Statistics() {
    const themeColor=useSelector((state)=>state.theme.mode);
    return (
        <div className='StatisticsContainer' style={{color:themeColor==='dark'?'white':'black',transition:'0.8s'}}>
            <div className='divs'>
                <div className='StatisticsDiv'>
                    <p>Trainning centers</p>
                    <p>60K+</p>
                </div>
                <div className='StatisticsDiv'>
                    <p>Universities</p>
                    <p>35+</p>
                </div>
                <div className='StatisticsLongDiv '>
                    <span>View our 1,602 reviews</span>
                    <span>4.9</span>   
                    <span><FaStar style={{color:'goldenrod'}}/></span>
                </div>
                <div className='StatisticsDiv'>
                    <p>Schools</p>
                    <p>20k+</p>
                </div>
                <div className='StatisticsDiv'>
                    <p>Students</p>
                    <p>120K+</p>
                </div>
            </div>
        </div>
    )
}
