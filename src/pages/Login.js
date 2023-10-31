import  { useState } from 'react';
import './login.css';
import img1 from './image/mlogo.png';




const LoginBox = () => {
  
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
     

      <div className="logo-container">
        <img src={img1} className="App-logo" alt="logo" />
      </div>

     

      <div className="login-container">
        <h1>Login</h1>
        <form  onSubmit={handleSubmit}>
          

          <label htmlFor="username">Email</label>
          <input value= {email} type="email" name="email" id="email" /*value={formValues.email}*//>


          <label htmlFor="password">Password</label>
          <input value= {pass} type="password" name="password" id="password" /*value={formValues.password} onChange={handleChange}*//>

          <button type="submit">Login</button>
          <p>Don't have account <link rel=''/>register </p>
        </form>
      </div>
    </div>
  
  );
};

export default LoginBox;