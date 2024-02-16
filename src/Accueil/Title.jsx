import React from 'react';
import './Styles/Title.css';
import {useSelector} from 'react-redux';

export default function Title({title,direction}) {
    const themeColor=useSelector((state)=>state.theme.mode);
    return (
        <div className='titleSection' >
            {
                direction==="left"?(
                    <>
                        <img src={direction==='left'?"Line 19.svg":"Line 21.svg"} alt="line" height={20}/>
                        <h1 style={{color:themeColor==='dark'?'white':'black',transition:'0.8s',marginLeft:'20px'}}>{title}</h1>
                    </>
                ):(
                    <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',width:'100%'}}>
                        <h1 style={{color:themeColor==='dark'?'white':'black',transition:'0.8s',marginRight:'150px'}}>{title}</h1>
                        <img src={direction==='left'?"Line 19.svg":"Line 21.svg"} alt="line" height={30}/>
                    </div>
                )
            }
        </div>
    )
}
