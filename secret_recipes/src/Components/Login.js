import React, { useState } from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";


const Login = props => {

  const initialValues = {
    username: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialValues)

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://ptct-secret-recipes.herokuapp.com/api/auth/login', formValues)
    .then (res => {
        console.log(res)
        //placeholder function until I can figure out what's going on with the endpoints
    })
    .catch(err => console.log(err))
    setFormValues(initialValues)
  
  }

  return (
    <div>
      <h1>Log In</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit = {handleSubmit}>
          <label>Username: </label>
          <input id = 'username' type = 'text' name = 'username' value = {formValues.username} onChange = {handleChange}/>
          <label> Password: </label>
          <input id = 'password' type = 'password' name = 'password' value = {formValues.password} onChange = {handleChange}/>
          <button id = 'submit'>Log In</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;