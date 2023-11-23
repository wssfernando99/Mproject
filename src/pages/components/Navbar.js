import React, { useState } from 'react';
import './navbar.css'
import { Link , useNavigate} from 'react-router-dom';

function Navbar() {
  const  auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/Login")
  }
    
return (

    <div className="nav">
    <a className='nav__brand'>Autisum spectrum</a>
    <ul className='nav__menu'>
      <li className='nav__item'>{auth ? <Link to='/Homepage'><a href='#' className='nav__link'>home</a></Link>
      :<Link to='/'><a href='#' className='nav__link'>home</a></Link>}</li><hr/>
      <li className='nav__item'><Link to ='/aboutpage'><a href='#' className='nav__link'>Aboutus</a></Link></li><hr/>
      <li className='nav__item'><a href='#' className='nav__link'>help</a></li><hr/>
      <li className='nav__item'>{auth ?<Link onClick={logout} to='/Login'><a href='#' className='nav__link'>Logout</a></Link>
      :<Link to="/Login"><a href='#' className='nav__link'>Login</a></Link>}</li>
    </ul>
  
    <div className='nav__toggler'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
    </div>
      
    </div>
    

  )
}

export default Navbar
