function validation(Values) {
    let error = {};
    const email_pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const password_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (Values.email === "") {
      error.email = "*email should not be empty";
    } else if (!email_pattern.test(Values.email)) {
      error.email = "email Didn't match";
    } else {
      error.email = "";
    }
  
    if (Values.password === "") {
      error.password = "*password should not be empty";
    } else if (password_pattern.test(Values.password)) {
      error.password = "*password didn't match";
    } else {
      error.password = "";
    }
  
    return error;
  }
  export default validation;
  