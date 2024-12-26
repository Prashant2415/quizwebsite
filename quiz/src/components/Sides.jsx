import React from 'react'
import { Link } from 'react-router-dom'
import "./component.css"
const Sides = () => {
  return (
    <div className='sides-container'>
      <ul className='sides-ul'>
        <li className='sides-li'>
            <Link className='sides-link' to="/">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sides
