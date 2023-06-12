import React from "react";
import { useState } from "react";

// function Form() {
//     // state variables to store from input values
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//     // state variables to handle error and success message 
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//     // event handlers for input changes 
//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//     // event handler for from submission
//   const handleOnSubmit = (e) => {
//     e.preventDefault(); // Prevents the default form submission behavior

//         // event handler for form submission 
//     setErrorMessage("");
//     setSuccessMessage("");

//         // form validation checks 
//     if(!name || !email || !password) {
//         setErrorMessage("Please fill in all fields.");
//         return;
//     }

//     if(!isValidEmail(email)){
//             // check if email is valid with helper function 
//         setErrorMessage("Please enter a valid email address.");
//         return;
//     }

//     if(password.length < 6 || password > 12 ) {
//             // check if the password length is within the specified range
//         setErrorMessage("Password length should be between 6 and 12 characters ")
//         return;
//     }

//         // if all validation checks pass, display success message 
//     setSuccessMessage("Form submitted successfully");

//   };
//   return (
//     <div>
//       <h1>Form</h1>
//       <hr />
//       <form onSubmit={handleOnSubmit}>

//         <label htmlFor="name">Name: </label>
//         <input type="text" name="name" value={name} onChange={handleName}/>
//         <br />

//         <label htmlFor="email">Email: </label>
//         <input type="text" name="email" value={email} onChange={handleEmail}/>
//         <br />

//         <label htmlFor="password">Password: </label>
//         <input type="password" name="password" value={password} onChange={handlePassword}/>
//         <br />
//         <button>submit</button>
//         <hr />

//       </form>
//         {/* display error and success messages */}
//       {errorMessage && <p>{errorMessage}</p>}
//       {successMessage && <p>{successMessage}</p>}
//     </div>
//   );
// }

//     // helper function to help validate the email format 
// const isValidEmail = (email) => {
//     //basic email validation 
//     return email.includes("@") && email.includes(".");
// }


function Form() {
    // state variables to store from input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // state variables to handle error messages for each input field
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

    // event handlers for name input changes 
  const handleName = (e) => {
    const value = e.target.value
    setName(value);

        // validate name
    if(value.trim() === "") {
        setNameError("name is required")
    } else if (value.length === 1){
        setNameError("name is not valid")
    } else if (/\d/.test(value)) { // check if the name contains a num
        setEmailError("name should not contain numbers")
    } else {
        setNameError("")
    }
  };

       // helper function to help validate the email format 
    const isValidEmail = (email) => {
        //basic email validation 
    return email.includes("@") && email.includes(".");
}

    // event handlers for email input changes 
  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value);

        // validate emil
    if( value.trim() === ""){
        setEmailError("email is required");
    } else if (!isValidEmail(value)) {
        setEmailError("please enter a valid email address");
    } else {
        setEmailError("");
    }
  };

    // event handlers for password input changes 
  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value);

        // password validation 
    if (value.trim() === ""){
        setPasswordError("password is required")
    } else if (value.length < 6 || value.length > 12) {
        setPasswordError("password length should be between 6 and 12 characters")
    } else {
        setPasswordError("")
    }
  };

    // event handler for from submission preform final validation before submission 
  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

       //perform final validation before submission
    if (name.trim() === "") {
        setNameError("name is required");
        return;
    }

    if (email.trim() === "") {
        setEmailError("email is required")
        return;
    } else if (!isValidEmail(email)) {
        setEmailError("please enter a valid email address")
        return;
    }

    if (password.trim() === "") {
        setPasswordError("password is required")
        return;
    } else if (password.length < 6 || password.length > 12){
        setEmailError("Password length should be between 6 and 12 characters  ")
        return;
    }

        // if all validation checks pass, display success message 
    alert("form submitted successfully")

  };
  return (
    <div>
      <h1>Form</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>

        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleName}/>
        <br />

        <label htmlFor="email">Email: </label>
        <input type="text" name="email" value={email} onChange={handleEmail}/>
        <br />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword}/>
        <br />
        <button>submit</button>
        <hr />

      </form>

        {/* display error and success messages */}
        <div>
            <ul>
                <h3>Requirements</h3>
                <li>Name must not contain any numbers and must be grater than (1) single character.</li>
                <li>Email must contain at bare minimum an (@) and (.).</li>
                <li>Password must be longer than (6) characters long but may not excide (12) characters.</li>
            </ul>
            <hr />
            {nameError && <h4>{nameError}</h4>}
            {emailError && <h4>{emailError}</h4>}
            {passwordError && <h4>{passwordError}</h4>}
            <hr />
        </div>

    </div>
  );
}

export default Form;
