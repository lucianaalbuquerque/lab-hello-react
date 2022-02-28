import React from 'react';
import logo from '../../images/ironhack-logo-xs.png';
import menu from '../../images/menu-top-xs.png'


function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="Ironhack logo" />
        <img src={menu} alt="Ironhack logo" />
    </div>
  )
}

export default Navbar