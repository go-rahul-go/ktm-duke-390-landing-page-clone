import {section2} from "../data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import React,{useState} from 'react'

const Launch = () => {
    const [slide,setSlide]=useState(0);
    const previous = ()=>{
        if(slide===0)
        {
            setSlide(4)
        }
        else{
            setSlide(slide-1)
        }
    }
    const next = ()=>{
        if(slide===4)
        {
            setSlide(0)
        }
        else{
            setSlide(slide+1)
        }
    }
  return (
    <div class="launch">
        <h1 id="launch-h1"><span id="orange">02.</span> 3, 2, 1 - LAUNCH!</h1>
        <div className="launch-container">
            <BsArrowLeft onClick={previous} className="arrow"/>
        {
            section2.map((item,index)=>{
                return(
                    <div key={index} className={(slide===index)?"launch-slider":"launch-slider launch-slider-hidden"}>
                        <img src={item.url} alt={item.alt}/>
                        <div className="launch-txt">
                        <h3>{item.h3}</h3>
                        <h1>{item.h1}</h1>
                        <p>{item.p}</p>
                        </div>
                    </div>
                )
            })
        }
        <BsArrowRight onClick={next} className="arrow"/>
        </div>
    </div>
  )
}

export default Launch