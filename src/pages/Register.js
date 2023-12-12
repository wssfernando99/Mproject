import React, { useState } from "react";

import "./register.css";
import { Link } from "react-router-dom";
import Validation from './Registervalidation';
import { useNavigate } from "react-router-dom";
import axios from "axios";


 function Register() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({

  })


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if(!Object.values(validationErrors).some(error => error !=="")){
      axios.post('http://localhost:8083/register', values)
                .then(res => {
                    navigate('/Login');
                })
                .catch(err => console.log(err));
        }
    }
   

  const handleInput =(event) => {
    setValues(prev => ({...prev,[event.target.name]: event.target.value}))
  }

  return (
    <div className="background">
    
      <div className="registration-container">
        <h1 className="header1">Register</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className="box1">
            <label htmlFor="username" className="box">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleInput}
            />
            {errors.username && (
              <span className="text-alert"> {errors.username} </span>
            )}
        </div>

         

        <div className="box1">
            <label htmlFor="email" className="box">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-alert"> {errors.email} </span>
            )}
        </div>

        <div className="box1">
            <label htmlFor="password" className="box">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-alert"> {errors.password} </span>
            )}
        </div>
          <div >
          <button type="submit" className="button1" value="Register">Register</button>
          </div>
        </form>

        <div className="link_to_other">
          <Link to="/Login">
            <p>
              already register ? <span>Login</span>{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

 