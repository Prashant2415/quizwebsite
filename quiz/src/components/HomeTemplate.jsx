import React from 'react'
import "./component.css";
import Sides from './Sides';
import Dashboard from './Dashboard';
const HomeTemplate = () => {
  return (
    <div className='main-container'>
      <div className="sides-section">
        <Sides/>
      </div>
      <div className="main-content-section">
        <Dashboard/>
      </div>
    </div>
  )
}

export default HomeTemplate
