import React, { useState } from 'react';
import './navbar.css'
import { Link , useNavigate} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from 'react';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

  }
  const  auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/Login")
  }
    
return (

    <div className="navbar">
      <div className='nav_topic'>
      <h2>Autisum spectrum</h2>
      </div>
      <div className='nav_tiles'>
        <div className='navhome'>
        {auth ? <Link to='/Homepage'><a className='nav__link'>home</a></Link>
        :<Link to='/'><a href='#' className='nav__link'>home</a></Link>}
        </div>
        <div className='navabout'>
        <Link to ='/aboutpage'><a href='#' className='nav__link'>Aboutus</a></Link>
        </div>
        <div className='navhelp'>
        <a href='#' className='nav__link'>help</a>
        </div>
        <div className='navlogin'>
        {auth ?<Link onClick={logout} to='/Login'><a href='#' className='nav__link'>Logout</a></Link>
      :<Link to="/Login"><a href='#' className='nav__link'>Login</a></Link>}
        </div>
      </div>
    </div>
    

  )
}

export default Navbar
