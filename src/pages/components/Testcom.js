import React from "react";
import { useState } from "react";


export const Testcom = (props) => {
   
      const [selectedOption, setSelectedOption] = useState('');
    
      const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return (
    

        
        <div>
            
            <label htmlFor="q1">{props.question}</label>
              <label>
               <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleRadioChange}
               />
                  Strongly Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleRadioChange}
               />
                  Agree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="option3"
                  checked={selectedOption === 'option3'}
                  onChange={handleRadioChange}
               />
                  Disagree
              </label>
  
              <label>
               <input
                  type="radio"
                  value="option4"
                  checked={selectedOption === 'option4'}
                  onChange={handleRadioChange}
               />
                  Strongly Disagree
              </label>
              {selectedOption === '' ? <p>Please select an option.</p> : null}
        </div>
     );
    };
    