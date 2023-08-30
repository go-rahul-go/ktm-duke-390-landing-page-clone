


import React from 'react'
import {poster} from "../data";
import "./components.css";

const Article4 = () => {
  return (
    <div className="poster4">
        <img src={poster[3].url} alt={poster[3].alt}/>
    </div>
  )
}

export default Article4;