import React from 'react'
import logo from "../images/PMlogo.png"
import "./component.css";
const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <img className='logo-image' src={logo} alt="logo" />
      </div>
      <div className="signup-signin-container">
        <button className='button-one'>Register</button>
        <button className='button-two'>Login</button>
      </div>
    </div>
  )
}

export default Header
