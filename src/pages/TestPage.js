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
    
    
  <div className="background1">
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
  

// import React, { useState } from 'react';

//  const TestPage = ({ question, options, onAnswerSelected }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     onAnswerSelected(option);
//   };

//   return (
//     <div>
//       <p>{question}</p>
//       <div>
//         {options.map((option) => (
//           <label key={option}>
//             <input
//               type="radio"
//               value={option}
//               checked={selectedOption === option}
//               onChange={() => handleOptionChange(option)}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Example usage
// const MultipleChoiceQuestionExample = () => {
//   const handleAnswerSelected = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption}`);
//     // You can perform further actions with the selected option, such as updating state or submitting to a server.
//   };

//   return (
//     <div>
//       <h1>React Multiple Choice Questions</h1>
//       <TestPage
//         question="What is the capital of France?"
//         options={['Paris', 'Berlin', 'London', 'Madrid']}
//         onAnswerSelected={handleAnswerSelected}
//       />
//       {/* Add more questions as needed */}
//     </div>
//   );
// };

// export default MultipleChoiceQuestionExample;

  
// import React, { useState } from 'react';
// import { Testcom } from './components/Testcom';
// import Navbar from './components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import './TestPage.css';

// const questions = [
//   {
//     id: 1,
//     text: '01) Does your child look at you when you call his/her name?',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },

//   {
//     id: 2,
//     text: '02) How easy is it for you to get eye contact with your child?',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },

//   {
//     id: 3,
//     text: '03) Does your child point to indicate that he/she wants something? (e.g.- Toy that is out of reach)',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },

//   {
//     id: 4,
//     text: '04) Does your child point to share an interest with you? (e.g.- Pointing at an interesting sight)',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },

//   {
//     id: 5,
//     text: '05) Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },
//   {
//     id: 6,
//     text: '06) Does your child pretend? (e.g.- Care for dolls, talks on a toy phone)',
//     options: ['Strongly Agree', 'Agree', 'Disagree', 'Strongly Disagree'],
//   },
  
// ];

// export const TestPage = () => {
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [showError, setShowError] = useState(false);
//   const navigate = useNavigate();

//   const handleOptionChange = (questionId, selectedOption) => {
//     const numericalValue = {
//       'Strongly Agree': 1,
//       'Agree': 0.7,
//       'Disagree': 0.3,
//       'Strongly Disagree': 0,
//     }[selectedOption];
  
//     setSelectedOptions({ ...selectedOptions, [questionId]: selectedOption });
//   };

//   const handleSubmit = () => {
//     const hasAnsweredAllQuestions = questions.every((question) => selectedOptions.hasOwnProperty(question.id));

//    if (hasAnsweredAllQuestions) {
        
//         navigate('/'); 
//       } else {
//         setShowError(true);
//       }

   
//   };

//   return (
//     <div className="background">
//       <div className='navbar'><Navbar /></div>
//       <div className="questions">
//         <div className='header'><h1>AQ-10 Test</h1></div>
//         {questions.map((question) => (
//           <div key={question.id}>
//             <p>{question.text}</p>
//             {question.options.map((option, index) => (
//               <label key={index}>
//                 <input
//                   type="radio"
//                   value={`q${question.id}a${index + 1}`}
//                   checked={selectedOptions[question.id] === `q${question.id}a${index + 1}`}
//                   onChange={() => handleOptionChange(question.id, `q${question.id}a${index + 1}`)}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className='resultbutton'>
//         <button className='rebutton' id='rebutton' onClick={handleSubmit}>Result</button>
//         {showError && <p className="error-message">Please answer all questions.</p>}
//       </div>
//     </div>
//   );
// };



