import  { useState } from 'react';
import './login.css';
// import img1 from './img/mlogo.png'




export const Login = () => {
  
  // const initialValues = {email:"" , password:""};
  // const [formValues ,setFormValues]= useState(initialValues);
  // const [formErrors ,setFormErrors]= useState({});


  // const handleChange =(e) => {
  //   console.log(e.target);
  //   const {name,value} = e.target;
  // };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    };

  //   const validate = (values) =>{ 
  //     const errors ={};
  //     const regex = /^[^\s@]+@[^\s@]+\. [^\s@]{2,}$/i;


  //     if (!values.email){
  //       errors.username = "e-mail is required"
  //     }

  //     if(!values.password){
  //       errors.username = "password is required"
  //     }

  //   }

 const [email, setEmail] = useState ('');
 const [pass, setPass] = useState('');


  return (
  
  
    <div className="background">
     

      {/* <div className="logo1-container">
        <img src={img1} className="App1-logo" alt="logo1" />
      </div> */}

     

      <div className="login-container">
        <div className='header'>
        <h1>Login</h1>
        </div>
        <form  onSubmit={handleSubmit}>
          

          <label htmlFor="username">Email</label>
          <input  type="email" name="email" id="email" /*value={formValues.email}*//>


          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" /*value={formValues.password} onChange={handleChange}*//>

          <button  className='button' type="submit">Login</button>
          <div className="link_to_other">
          <p>Don't have account <span>Register?</span> </p>
          </div>
        </form>
      </div>
    </div>
  
  );
};

