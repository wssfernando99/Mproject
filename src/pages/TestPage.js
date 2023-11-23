import './TestPage.css';
// import img1 from './images/logo1.png'; 
import React, { useState } from 'react';
import { Testcom } from './components/Testcom';
import Navbar from './components/Navbar';

export const TestPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = () => {
      if (selectedOption !== null) {
        console.log(`Selected option: ${selectedOption}`);
      } else {
        console.log('No option selected');
      }
    };

    
    return (
    
    
  <div className="background">
        <div className='navbar'><Navbar /></div>
        <div className='header'>AQ-10 Test</div>
        <div className="questions"><Testcom question = "1. Does your child look at you when you call his/her name?" /></div>
        <div className="questions"><Testcom question = "2. How easy is it for you to get eye contact with your child?" /></div>
        <div className="questions"><Testcom question = "3. Does your child point to indicate that he/she wants something? (e.g.- Toy that is out of reach)" /></div>
        <div className="questions"><Testcom question = "4. Does your child point to share an interest with you? (e.g.- Pointing at an interesting sight)" /></div>
        <div className="questions"> <Testcom question = "5. Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)" /></div>
        <div className="questions"><Testcom question = "6. Does your child follow where you are looking?" /></div>
        <div className="questions"><Testcom question = "7. If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g.- Stroking hair, hugging them)" /></div>
        <div className="questions"><Testcom question = "8. Would you describe your child's first words  as:" /></div>
        <div className="questions"><Testcom question = "9. Does your child use simple gestures? (e.g.- Wave goodbye)" /></div>
        <div className="questions"><Testcom question = "10. Does your child stare at nothing with no apparent purpose?" /></div>

        <div className='Result'>
          <submit> Submit </submit>
        </div>
        
        {/* <div className='resultbutton'>
          <button className='rebutton' id='rebutton' >Result</button>
        </div> */}
  </div>
    
    );
  };
  
  
