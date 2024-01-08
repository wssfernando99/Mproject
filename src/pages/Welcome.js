import React from 'react'
import './Welcome.css'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import {Moredetails} from './components/Moredetails';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Welcome = () => {
  useEffect(()=> {
    AOS.init({duration: 3000});
},[]);
  return (
    
    <div className='wrapper'>
      <div className='navigationbar'><Navbar /></div>
      <div className="wrapper2" data-aos="fade-up"> 
        <div className="container2">
          <div className="pargraph"><p>Online autism tests can play an important role in your journey of self-discovery, and may inform your decision to pursue a formal diagnosis</p>  
          </div>
          <div class="horizontal_line"></div>
          <div className="paragraph2"><p>Do you think your child might be autistic?</p>
          </div>
          <div id="logo">
          </div> 
        </div>
        <div className="container">
          <div className='item1'><h1>Happy Childhood</h1></div> 
          <div className='item2'><p>Childhood is the most fun and memorable time in anyone's life.it's first stage of life which we enjoy in what ever we like</p>
          </div>
            <div className="item3">
              <Link to ="/Register"><div className='bt1'><button id='bt1'>Sign up</button></div></Link>
              <div className='bt1'><button id='bt2'>Learn More</button></div>
            </div>
        </div>
       </div>
       <div className='welcome-second-wrapper' data-aos="fade-left">
          <Moredetails />
       </div>
       <div className='footer'><Footer /></div>
    </div>
    
    

  )
}

