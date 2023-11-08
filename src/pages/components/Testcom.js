import React from "react";
import { useState } from "react";


export const Testcom = (props) => {
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
    

        
        <form>
            
            <label htmlFor="q1">{props.question}</label>
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
        </form>
     );
    };
    