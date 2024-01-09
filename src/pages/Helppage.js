import React from 'react'
import Navbar from './components/Navbar';
import './helppage.css';
import { Footer } from './components/Footer';

export default function Helppage() {
  return (
    <>
    <div className='navbar1'><Navbar /></div>
    

    <div className='container4'>
    {/* <div className='about-us'> */}
    <div className='header-help'>
    <p1>Welcome to Autism Detection Help Center
</p1>
    </div>
       {/* add baby image */}
<div className='all-paragraphs'>
    <div className='paragraph-help'>
      <p>
1. Understanding Autism:<br/>
What is Autism Spectrum Disorder (ASD)?<br/>
Gain insights into the basics of ASD, its characteristics, and how it affects individuals.
      </p>
    </div>
    <div className='paragraph-help'>
      <p>
2. Using the AQ-10 Questionnaire:<br/>
What is the AQ-10?<br/>
Learn about the AQ-10 questionnaire, its purpose, and how it contributes to early autism detection.<br/>
How to Complete the AQ-10?<br/>
Step-by-step guide on navigating and answering questions in the AQ-10 for accurate results.
      </p>
    </div>
    <div className='paragraph-help'>
      <p>
3. Interpreting Results:<br/>
Understanding Your AQ-10 Results:<br/>
Decode your AQ-10 results and what they mean in terms of autism risk.<br/>
What to Do After Receiving Results:<br/>
Guidance on the next steps to take based on your AQ-10 results.
      </p>
    </div>
    <div className='paragraph-help'>
      <p>
4. Privacy and Security:<br/>
Data Security Measures:<br/>
Learn about the stringent measures we take to ensure the privacy and security of your information.<br/>
Privacy Policy:<br/>
Review our comprehensive privacy policy to understand how your data is handled.
      </p>
    </div>
    <div className='paragraph-help'>
      <p>
5. Getting Support:<br/>
Connecting with Professionals:<br/>
Information on seeking support from healthcare professionals, therapists, and specialists.<br/>
Support Groups and Communities:<br/>
Discover online and local communities for individuals and families affected by autism.

      </p>
    </div>
</div>

    {/* </div> */}

    <div className='footer'><Footer /></div>
    </div>

    </>
  )
}
