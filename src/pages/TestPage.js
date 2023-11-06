import './TestPage.css';
// import img1 from './images/logo1.png'; 
import React, { useState } from 'react';

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
       {/* <img src={img1} className="App-logo" alt="logo"/> */}
  
  
        <div className="questions">
          <h1>AQ-10 Test</h1>
          <form>
            
            <label htmlFor="q1">1.  Does your child gaze at you when his/her name is called by you?</label>
              <label>
               <input
                  type="radio"
                  value="q1a1"
                  checked={selectedOption === 'q1a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q1a2"
                  checked={selectedOption === 'q1a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q1a3"
                  checked={selectedOption === 'q1a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q1a4"
                  checked={selectedOption === 'q1a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>
          
  
              <label htmlFor="q2">2.  How far is it easy for you to come in eye contact with your child?</label>
              <label>
               <input
                  type="radio"
                  value="q2a1"
                  checked={selectedOption === 'q2a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q2a2"
                  checked={selectedOption === 'q2a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q2a3"
                  checked={selectedOption === 'q2a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q2a4"
                  checked={selectedOption === 'q2a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>

              <label htmlFor="q3">3.  Does your child point for indicating that he/she wants something? ? (e.g. pointing a toy which is out of reach from him/her)</label>
              <label>
               <input
                  type="radio"
                  value="q3a1"
                  checked={selectedOption === 'q3a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q3a2"
                  checked={selectedOption === 'q3a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q3a3"
                  checked={selectedOption === 'q3a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q3a4"
                  checked={selectedOption === 'q3a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>

              <label htmlFor="q4">4.  Does your child point for sharing interest with you? (e.g. pointing towards an captivating sight)</label>
              <label>
               <input
                  type="radio"
                  value="q4a1"
                  checked={selectedOption === 'q4a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q4a2"
                  checked={selectedOption === 'q4a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q4a3"
                  checked={selectedOption === 'q4a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q4a4"
                  checked={selectedOption === 'q4a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>

              <label htmlFor="q5">5.  Does your child pretend? (e.g. caring for dolls, talking on a toy phone)</label>
              <label>
               <input
                  type="radio"
                  value="q5a1"
                  checked={selectedOption === 'q5a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q5a2"
                  checked={selectedOption === 'q5a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q5a3"
                  checked={selectedOption === 'q5a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q5a4"
                  checked={selectedOption === 'q5a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>

              <label htmlFor="q6">6.  Does your child follow your sight?</label>
              <label>
               <input
                  type="radio"
                  value="q6a1"
                  checked={selectedOption === 'q6a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q6a2"
                  checked={selectedOption === 'q6a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q6a3"
                  checked={selectedOption === 'q6a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
  
              <label htmlFor="q7">7.  Does your child show signs of comforting you or someone else in the family when you or someone else is upset? (e.g. stroking your or their hair, hugging you or them)</label>
              <label>
               <input
                  type="radio"
                  value="q7a1"
                  checked={selectedOption === 'q7a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q7a2"
                  checked={selectedOption === 'q7a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q7a3"
                  checked={selectedOption === 'q7a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>
              <label>
               <input
                  type="radio"
                  value="q7a4"
                  checked={selectedOption === 'q7a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>        

              <label htmlFor="q8">8.  You would describe your child's first words as?</label>
              <label>
               <input
                  type="radio"
                  value="q6a1"
                  checked={selectedOption === 'q6a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q6a2"
                  checked={selectedOption === 'q6a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q6a3"
                  checked={selectedOption === 'q6a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>     
              <label>
               <input
                  type="radio"
                  value="q8a4"
                  checked={selectedOption === 'q8a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label>    

              <label htmlFor="q9">9.  Does your child use basic gestures? (e.g. waving good bye)</label>
              <label>
               <input
                  type="radio"
                  value="q9a1"
                  checked={selectedOption === 'q9a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q9a2"
                  checked={selectedOption === 'q9a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q9a3"
                  checked={selectedOption === 'q9a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>    
              <label>
               <input
                  type="radio"
                  value="q9a4"
                  checked={selectedOption === 'q9a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label> 

              <label htmlFor="q10">10.  Does your child gaze at nothing without any purpose?</label>
              <label>
               <input
                  type="radio"
                  value="q10a1"
                  checked={selectedOption === 'q10a1'}
                  onChange={handleOptionChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q10a2"
                  checked={selectedOption === 'q10a2'}
                  onChange={handleOptionChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="q10a3"
                  checked={selectedOption === 'q10a3'}
                  onChange={handleOptionChange}
               />
                  Disagree
              </label>    
              <label>
               <input
                  type="radio"
                  value="q10a4"
                  checked={selectedOption === 'q10a4'}
                  onChange={handleOptionChange}
               />
                  Strongly Disagree
              </label> 
  
        
            <button onClick={handleSubmit}>Result</button>
          </form>
        </div>
      </div>
    
    );
  };
  
  
