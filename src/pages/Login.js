import React, { useState } from "react";
import "./login.css";
// import img1 from "./image/mlogo.png";
import Validation from "./Loginvalidation";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({

  })
    

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

 const handleSubmit = (event) =>{
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if(!Object.values(validationErrors).some(error => error !=="")){
      axios.post('http://localhost:8083/login', values)
        .then(res =>{
          if(res.data === "Success"){
            navigate("/Homepage");
            // Store user data in localStorage after successful login
            localStorage.setItem("user", JSON.stringify(values));
          }
          else{
            alert("No record existed")
          }

        })
        .catch(err => console.log(err));
    }
 }

 const handleInput =(event) => {
  setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
}

  return (
    <div className="login-background">
     
      <div className="login-container">
        <h1 className="header1">Login</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className="box1">
            <label className="box" htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-alert"> {errors.email} </span>
            )}
        </div>

        <div className="box1">
            <label className="box" htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-alert"> {errors.password} </span>
            )}
        </div>

        <div >
            <button className="button2">Login</button>
        </div>
        </form>
        <div className="link_to_other">
          {/* <Link to="/register"> */}
            <p>
              Don't have account  <Link to="/register"><span>Register</span></Link> 
            </p>

           
          
        </div>
      </div>
    </div>
  );
};

export default Login;
