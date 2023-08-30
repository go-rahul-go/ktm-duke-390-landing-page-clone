


import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { section1 } from "../data";

const Clutch = () => {
  const [slide, updateSlider] = useState(0);
  function previous() {
    if (slide === 0) {
      updateSlider(3)
    }
    else { updateSlider(slide - 1) }
  }
  function next() {
      if(slide===3)
      {
        updateSlider(0)
      }
      else{
        updateSlider(slide+1)
      }
  }
  // function handleClick(index)
  // {
  //   updateSlider(index)
  // }
  return (
    <section className="clutch">
      <h1><span id="orange">01.</span> CLUTCH IN, REVS UP!</h1>
      <BsArrowLeft className="clutch-arrow clutch-l-arrow" onClick={previous} />
      <div className="clutch-container">
      
        {

          section1.map((item, index) => {
            return (
              <div className={(slide === index) ? "clutch-slider" : "clutch-slider clutch-slider-hidden"}>
                <img src={item.url} alt={item.alt} />
                <div className='clutch-text'>
                  <h3>{item.h3}</h3>
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                </div>
              </div>
            )
          })

        }
        {/* <span class="clutch-buttons">
          {section1.map((_,index)=>{
            return(
              <button className={(slide===index)?"btn-active":"btn-inactive"} onClick={()=>handleClick(index)}></button>
            )
          })}
        </span> */}
        
      </div>
      <BsArrowRight className="clutch-arrow clutch-r-arrow" onClick={next} />
    </section>
  )
}

export default Clutch;