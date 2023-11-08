import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
    <a href='#' className='nav__brand'>Autisum spectrum</a>
    <ul className='nav__menu'>
      <li className='nav__item'><Link to='/Homepage'><a href='#' className='nav__link'>home</a></Link></li><hr/>
      <li className='nav__item'><a href='#' className='nav__link'>Aboutus</a></li><hr/>
      <li className='nav__item'><a href='#' className='nav__link'>help</a></li><hr/>
      <li className='nav__item'><Link to='/Login'><a href='#' className='nav__link'>Log in</a></Link></li>
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
