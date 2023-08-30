
import React, { useState } from 'react'
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from "react-icons/bs";
import "./components.css"

import { electricOrange, blue } from "../data"
const Intro = () => {
  const [colors, changeColors] = useState(electricOrange);
  const [slide, changeSlide] = useState(0);
  const orange = (e) => {
    changeColors(electricOrange)
    console.log("orange")
  }
  const blueButton = (e) => {

    changeColors(blue)
    console.log("blue")
  }

  const previousImage = () => {
    if (slide === 0) {
      changeSlide(5);
    }
    else {
      changeSlide(slide - 1)
    }
  }
  const nextImage = () => {
    if (slide === 5) {
      changeSlide(0);
    }
    else {
      changeSlide(slide + 1)
    }
  }
  return (
    <div className="intro">
      <div className="message">
        <div id="h3-box">
        <h3>2024 KTM </h3>
        <h3>390 DUKE </h3>
        </div>
        <p>With the all-new 2024 KTM 390 DUKE, the world around you becomes your very own gymkhana. Bringing exceptional agility, lightweight handling, and punchy performance to the street, this middle-weight bruiser is ready to take on any twists or turns. Packing state-of-the-art rider aids, an all-new frame, adjustable suspension - and aggressive new looks - the 2024 KTM 390 DUKE wears the crown when it comes to carving up the asphalt. </p>
      </div>
      <div className="image-container">
        <h1 className="h1-hidden">2023 DUKE 390</h1>
        <div className="color-chooser">
          <label>Choose color</label>
          <input type="radio" value="orange" name="color" id="orange-color" onClick={orange} title="electric orange" />
          <input type="radio" value="blue" name="color" id="blue-color" onClick={blueButton} title="ocean blue" />
        </div>
        <div className="image-slider">
        <BsArrowLeftSquareFill onClick={previousImage} className="arrow left-arrow" />
          {/* <BsChevronLeft /> */}
          {
            colors.map((item, index) => {
              return (<img src={item.url} alt={item.alt} key={index} className={(slide === index) ? "slide" : "slide slide-hidden"} />)
            })
          }
          <BsArrowRightSquareFill onClick={nextImage} className="arrow right-arrow" />
        </div>

      </div>

    </div>
    
    
  )
}

export default Intro;