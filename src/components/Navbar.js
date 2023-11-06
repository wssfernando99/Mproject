import React from 'react';
import './navbar.css'

function Navbar() {
  return (
    <nav className="nav">
    <a href='#' className='nav__brand'>Autisum spectrum</a>
    <ul className='nav__menu'>
      <li className='nav__item'><a href='#' className='nav__link'>home</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>Aboutus</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>help</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>Log in</a></li>
    </ul>
    <div className='nav__toggler'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
    </div>
    
    </nav>

  )
}

export default Navbar
