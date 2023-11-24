import React, { useState } from 'react';
import './nav.css'
import { Link , useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const  auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout =()=>{
    localStorage.clear();
    navigate("/Login")
  }
    
return (

  <nav className="nav">
    <a className='nav__brand'>Autisum spectrum</a>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className='line1'></div>
        <div className='line1'></div>
        <div className='line1'></div>
    </div>
    <ul id="nav_tiles" className={menuOpen ? "open" : ""}>
      <li className='nav__item'>{auth ? <NavLink to='/Homepage' style={{ textDecoration: 'none' }}><h4>home</h4></NavLink>
      :<NavLink to='/' style={{ textDecoration: 'none' }}><h4>home</h4></NavLink>}</li>
      <li className='nav__item'><NavLink to ='/aboutpage' style={{ textDecoration: 'none' }}><h4>Aboutus</h4></NavLink></li>
      <li className='nav__item'><h4>help</h4></li>
      <li className='nav__item'>{auth ?<NavLink onClick={logout} to='/Login' style={{ textDecoration: 'none' }}><h4>Logout</h4></NavLink>
      :<NavLink to="/Login" style={{ textDecoration: 'none' }}><h4>Login</h4></NavLink>}</li>
    </ul>
  </nav>
    

  )
}

export default Navbar
