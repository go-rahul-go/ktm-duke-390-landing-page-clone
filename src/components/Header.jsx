



import React from 'react'
import "./components.css"

const Header = () => {
  return (
    <div className="heading">
      <div className="logo-icons">
      <i class="fa-solid fa-location-dot"></i>
      <i class="fa-solid fa-globe"></i>
        <img src={require("../images/logo.jpg")} alt="header logo" />
      </div>
    </div>

  )
}

export default Header