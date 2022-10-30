import React from 'react'
import arijit from '../img/arijit.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className="user">
        <img src={arijit} alt='' />
        <span>Arijit</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
