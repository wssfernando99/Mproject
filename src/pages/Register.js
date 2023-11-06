import React from 'react';
// import {useRef,useState, useEffect} from "react";
import './register.css';
// import img1 from './images/mlogo.png';




export const Register = () => {

  


  return (
    

  
  
    <div className="background">
      {/* <img src={img1} className="App-logo" alt="logo"/> */}

      {/* <div className="logo-container">
        <img src={img1} className="App-logo" alt="logo" />
      </div> */}

     

      <div className="registration-container">
        <div className='header'>
        <h1>Register</h1>
        </div>
        <form>
          <label htmlFor="username">Firstname</label>
          <input type="text" id="username" />

          <label htmlFor="username">Lastname</label>
          <input type="text" id="username" />

          <label htmlFor="username">Email</label>
          <input type="email" id="email" />


          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button type="submit" >Register</button>
          <div className='link_to_other'> 
          
              <p>already register ? <span>Login</span> </p>
         
          </div>
        </form>
      </div>
    </div>
  
  );
};

 