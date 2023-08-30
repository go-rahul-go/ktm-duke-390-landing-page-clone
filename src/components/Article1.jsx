import { poster } from "../data";

import React from 'react'
import "./components.css";

const Article1 = () => {
  return (
    <div class="poster1">
      <img src={poster[0].url} alt={poster[0].alt}/>
    </div>
  )
}

export default Article1;