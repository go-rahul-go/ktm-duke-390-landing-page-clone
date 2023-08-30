import React, { useState } from 'react'
import {section3} from "../data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./components.css";

const Style = () => {

  const [slider,updateSlider] = useState(0)
  const previous = ()=>{
    if(slider===0)
    {
      updateSlider(5);
    }
    else{
      updateSlider(slider-1)
    }
  }
  const next = ()=>{
    if(slider===5)
    {
      updateSlider(0)
    }
    else{
      updateSlider(slider+1)
    }
  }
  return (
    <div className="style">
      <h1 className="style-h1"><span id="orange">03.</span>style and function</h1>
      <div className="style-slider-box">
        <BsArrowLeft className='style-arrow' onClick={previous}/>
      {
        section3.map((item,index)=>{
          return(
            <div className={(slider===index)?"style-slider":"style-slider style-slider-hidden"}>
                <img src={item.url} alt={item.alt}/>
                <div className="style-txt">
                  <h3>{item.h3}</h3>
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                </div>
            </div>
          )
        })
      }
      <BsArrowRight className='style-arrow' onClick={next}/>
      </div>
    </div>
   
  )
}

export default Style;