import React, { useState } from "react";
// import img1 from "./image/mlogo.png";
import "./register.css";
import { Link } from "react-router-dom";

import validation from './Registervalidation';
// import axios from "axios";

 function Register() {

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const navigate = useNavigate();
  const HandleSubmit = (event) => {
    console.log("Submit buton clicked");
    console.log(Values);
    event.preventDefault();

    setErrors(validation(Values));
    // if (
    //   errors.username === "" &&
    //   errors.email === "" &&
    //   errors.password === ""
    // ) {
    //   console.log("No errors");
    //   axios
    //     .post("http://localhost:8081/signup", Values)
    //     .then((res) => {
    //       console.log("Response:", res.data);
    //       window.location = "http://localhost:3000/login";
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   console.log("Errors are there");
    // }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };

  return (
    <div className="background">
      {/* <div className="logo-container">
        <img src={img1} className="App-logo" alt="logo" />
      </div> */}

      <div className="registration-container">
        <h1 className="header1">Register</h1>
        <form action="" onSubmit={HandleSubmit}>
          <div className="box1">
            <label htmlFor="username" className="box">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={Values.username}
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
              value={Values.email}
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
              value={Values.password}
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

 