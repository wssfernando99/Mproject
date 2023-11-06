import React, { useState } from "react";
import "./login.css";
// import img1 from "./image/mlogo.png";
import validation from "./Loginvalidation";
import { Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [Values, setValues] = useState({
    email: "",
    password: "",
  });


//  const handleChange = (event) =>{
//     setValues({
//       ...Values,
//       [event.target.name]: event.target.value,
//     });
//   }



 const handleSubmit = (event) => {
    console.log("Submit buton clicked");
    console.log(Values);
    event.preventDefault();

    setErrors(validation(Values));
    if (
      errors.email === "" &&
      errors.password === ""
    ) {
      // console.log("No errors");
      // axios
      //   .post("http://localhost:8081/signup", Values)
      //   .then((res) => {
      //     if(res.status === 200){
      //       console.log("Response:", res.data);
      //       window.location = "http://localhost:3000/home";
      //     }else if(res.status === 401){
      //       console.log("Incorrect username and password");
      //     }else{
      //       console.log("Something went wrong");
      //     }
          
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   console.log("Errors are there");
    }

    if (errors.email === "" && errors.password === "") {
      // Validation has passed; you can make your axios post request here.
    } else {
      console.log("Errors are there");
    }
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
            <input type="submit" className="button2" value="Login" />
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
