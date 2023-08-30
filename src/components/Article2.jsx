import {poster} from "../data";
import "./components.css";


import React from 'react'

const Article2 = () => {
  return (
    <div className="poster2">
        <img src={poster[1].url} alt={poster[1].alt}/>
    </div>
  )
}

export default Article2;