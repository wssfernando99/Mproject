import './TestPage.css';
// import img1 from './images/logo1.png'; 
import React, { useState } from 'react';
import { Testcom } from './components/Testcom';
import Navbar from './components/Navbar';

export const TestPage = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === '') {
      alert('Please select an option.');
      return;
    }

    // Submit the form
    console.log('Submitting form with selected option:', selectedOption);
  };
    return (

      <div className="background1">
       {/* <img src={img1} className="App-logo" alt="logo"/> */}
  
      <div className='navbar'><Navbar /></div>
      <form onSubmit={handleSubmit}>
      <div className='topic'><h1>AQ-10 Test</h1></div>
      <div className="questions">
          <Testcom question = "1. Does your child look at you when you call his/her name?" />
          <Testcom question = "2. How easy is it for you to get eye contact with your child?" />
          <Testcom question = "3. Does your child point to indicate that he/she wants something? (e.g.- Toy that is out of reach)" />
          <Testcom question = "4. Does your child point to share an interest with you? (e.g.- Pointing at an interesting sight)" />
          <Testcom question = "5. Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)" />
          <Testcom question = "6. Does your child follow where you are looking?" />
          <Testcom question = "7. If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g.- Stroking hair, hugging them)" />
          <Testcom question = "8. Would you describe your child's first words  as:" />
          <Testcom question = "9. Does your child use simple gestures? (e.g.- Wave goodbye)" />
          <Testcom question = "10. Does your child stare at nothing with no apparent purpose?" />
      </div>
      <div className='resultbutton'>
         <button className='rebutton' id='rebutton' type='submit'>Result</button>
      </div>
      </form>
      </div>
    
    );
  };