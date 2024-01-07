import React from 'react'
import './Homepage.css'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    
    <div className='wrapper'>
      <div className='navigationbar'><Navbar /></div>
      <div className="wrapper2"> 
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
              <div className='bt1'><Link to='/TestPage'><button id='bt1'>Test</button></Link></div>
            </div>
        </div>
       </div>
       <div className='wrapper3'>
        <div className='wrapper3topic'>
          <h1>What is Autism?</h1>
        </div>
        <div className='wrapper3para'>
          <p>There is no one type of autism, but many.</p>
        </div>
       </div>
       <div className='wrapper4'>
        <div className='wrapper4para'>
          <p>Autism, or autism spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communication. According to the Centers for Disease Control, autism affects an estimated 1 in 36 children in the United States today.
          </p><br/>
          <p>
          We know that there is not one autism but many subtypes, most influenced by a combination of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strengths and challenges. The ways in which people with autism learn, think and problem-solve can range from highly skilled to severely challenged. Some people with ASD may require significant support in their daily lives, while others may need less support and, in some cases, live entirely independently.
          </p>
        </div>

       </div>
       <div className='wrapper5'>
        <div className='wrapper5logo'>
        </div>
        <div className='wrapper5para'>
        <p>
        If you've met one person with autism, you've met one person with autism.
        </p>
        </div>
        <div className='wrapper5para1'>
        <p>
        - DR. STEPHEN SHORE
        </p>
        </div>
       </div>
    </div>
    
    

  )
}
