import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/userFormSchema";

//Initial form state
const initFormValues = {
  username: "",
  password: "",
  email: "",
};

//initial form errors
const initFormErrors = {
    username: "",
    password: "",
    email: "",
};

//disable sign up button
const disabledForm = true;

export default function SignupForm() {
  //form state
  const [userInfo, setUserInfo] = useState(initFormValues);
  //form errors state
  const [formErrors, setFormErrors] = useState(initFormErrors);
  //disable button state
  const [disabled, setDisabled] = useState(disabledForm);

  //helper functions

//   validation helper
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  //change handler
  const onChange = (evt) => {
    const { name, value } = evt.target;
    //validate formValues
    validate(name, value);
    //set onChange to state
    setUserInfo({ ...userInfo, [name]: value });
  };

  //submit handler
  const onSubmit = (evt) => {
    //stop default reload upon submission
    evt.preventDefault();

    //collect new user data
    const newUser = {
      name: userInfo.name.trim(),
      password: userInfo.password.trim(),
      email: userInfo.email.trim(),
    };

    //post newUser to endpoint, USING FAKE API AS PLACEHOLDER
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => console.log("NEW RECIPE RESPONSE", res))
      .catch((err) => {
        debugger;
      });
    setFormValues(initialFormValues);
  };

  //disabledForm accordingly every time formValues changes
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
  return (
    <div className="form-container">
      <h2>Sign up to start adding your favorite recipes!</h2>

      <form onSubmit={onSubmit}>
        <div className="form-inputs">
          {/* name text input */}
          <div className="input-div">
            <div className="error-div">{formErrors.name}</div>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={onChange}
                placeholder="Enter your name"
                maxLength="18"
                size="18"
              />
            </label>
          </div>

                   {/* password text input */}
                   <div className="input-div">
            <div className="error-div">{formErrors.password}</div>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={formValues.password}
                onChange={onChange}
                placeholder="enter a password"
                maxLength="18"
                size="18"
              />
            </label>
          </div>

                    {/* email text input */}
                    <div className="input-div">
            <div className="error-div">{formErrors.email}</div>
            <label>
              Email
              <input
                type="text"
                name="password"
                value={formValues.email}
                onChange={onChange}
                placeholder="enter email"
                maxLength="30"
                size="30"
              />
            </label>
          </div>
        </div>
        <button disabled={disabled}>Submit Recipe</button>
      </form>
    </div>
  );
}
