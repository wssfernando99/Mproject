function validation(Values) {
    let error = {};
    const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const password_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (Values.username === "") {
      error.username = "Name should not be empty";
    } else {
      error.username = "";
    }
  
    if (Values.email === "") {
      error.email = "*email should not be empty";
    }
  
    else if(!email_pattern.test(Values.email)) {
    error.email="*email Didn't match"
    }
    else {
      error.email = " ";
    }
  
    if (Values.password === "") {
      error.password = "*Password should not be empty";
    } else if (!password_pattern.test(Values.password)) {
      error.password = "*Password didn't match";
    } else {
      error.password = "";
    }
  
    return error;
  }
  export default validation;
  