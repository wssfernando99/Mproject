import React from 'react'
import './aboutpage.css'
import Navbar from './components/Navbar';

export const  Aboutpage = () => {
  return (
    <div className='wrapper1'>
    <div className='navigationbar'><Navbar /></div>
    <div className='background-about'>

    <div className='head-about'>Autism Sprectrum is <br></br>Brought to you By:</div>

    <div className='details'> <p> B M D D P Munasinghe<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>
    </div>
    </div>
  )
}

