

  
import React, { useState } from 'react';
import { Testcom } from './components/Testcom';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import './TestPage.css';

const questions = [
  {
    id: 1,
    text: '01) Does your child look at you when you call his/her name?',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
   

  },

  {
    id: 2,
    text: '02) How easy is it for you to get eye contact with your child?',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
    
  },

  {
    id: 3,
    text: '03) Does your child point to indicate that he/she wants something? (e.g.- Toy that is out of reach)',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },

  {
    id: 4,
    text: '04) Does your child point to share an interest with you? (e.g.- Pointing at an interesting sight)',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },

  {
    id: 5,
    text: '05) Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },
  {
    id: 6,
    text: '06) Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },
  {
    id: 7,
    text: '07) If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g.- Stroking hair, hugging them',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },

  {
    id: 8,
    text: `08) Would you describe your child's first words  as:`,
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },
  {
    id: 9,
    text: '09) Does your child use simple gestures? (e.g.- Wave goodbye',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
  },

  {
    id: 10,
    text: '10)Does your child stare at nothing with no apparent purpose? ',
    options: ['Strongly Agree','Agree','Disagree','Strongly Disagree'],
    answerValues: [1, 1, 0, 0],
   
  }

  
];

 const TestPage = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // const handleOptionChange = (questionId, selectedOptionIndex) => {
  //   const selectedValue = questions.find((question) => question.id === questionId).answerValues[selectedOptionIndex];
  
  //   setSelectedOptions({ ...selectedOptions, [questionId]: selectedValue });

  // };

                                             // pass the values

  const handleOptionChange = (questionId, selectedOption) => {
      const selectedValue = questions.find((question) => question.id === questionId).answerValues[selectedOption];

  
    setSelectedOptions({ ...selectedOptions, [questionId]: selectedValue });
  };
  

                                                 //  validation

  const handleSubmit = () => {
    const hasAnsweredAllQuestions = questions.every((question) => selectedOptions.hasOwnProperty(question.id));

   if (hasAnsweredAllQuestions) {
        
        navigate('/Homepage'); 
      } else {
        setShowError(true);
      }

   
  };

  return (
    <><div className='navbar'><Navbar /></div>
    <div className="background2">
      
      <div className='header'><h1>AQ-10 Test</h1></div>
      <div className="questions">
        
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.text}</p>
            {question.options.map((option,answerValues) => (
              <label key={answerValues}>
                {/* <input
                  type="radio"
                  value={`q${question.id}a${index + 1}`}
                  checked={selectedOptions[question.id] === `q${question.id}a${index + 1}`}
                  onChange={() => handleOptionChange(question.id, `q${question.id}a${index + 1}`)}
                  /> */}

                  
                  {/* add radio buttons to question */}
                  <input
                   type="radio"
                   value={answerValues}
                   checked={selectedOptions[question.id] === answerValues}
                   onChange={() => handleOptionChange(question.id, answerValues)}
                  />
                
                {option}
              </label>
            ))}
            
          </div>
        ))}
      </div>
         <div className='error-question'>{showError && <p className="error-message">Please answer all questions.</p>}</div>
        <button className='rebutton' id='rebutton' onClick={handleSubmit}>Result </button>
        
         
     
    </div>
    </>
  );
};
export default TestPage;



