import {poster} from "../data";

import React from 'react'
import "./components.css";
const Article3 = () => {
  return (
    <div className="poster3">
        <img src={poster[2].url} alt={poster[2].alt}/>
    </div>
  )
}

export default Article3;