import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

//import backgeround picture and Styled components
import logIn from "./logIn.jpg";
import styled from "styled-components";

//styled-components

const Image = styled.img`
  width: 100%;
  position: absolute;
  // border: 1px solid black;
  z-index: -1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: inherit;
    background-clip: content-box;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    padding-left: calc(30% - 50px);
    padding-right: 50px;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
`;

const OutOfContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  margin: 20% auto;
  padding: 10% 10%;
  text-align: center;
  line-height: 2;
  animation: fadeIn 2s ease 1 normal;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @media (max-width: 625px) {
    margin: 68% auto;
    padding: 5% 5%;
  }
`;

const Login = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ptct-secret-recipes.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        console.log(res);
        //placeholder function until I can figure out what's going on with the endpoints
      })
      .catch((err) => console.log("something went wrong", err));
    setFormValues(initialValues);
  };

  return (
    <div>
      <Image src={logIn} alt="login-picture" />
      <OutOfContainer>
        <Container>
          <h2>Log In</h2>
          <div data-testid="loginForm" className="login-form">
            <form onSubmit={handleSubmit}>
              <label>Username: </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              <br />
              <label> Password: </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <br />
              <button id="submit">Log In</button>
            </form>
          </div>

          <p id="error" className="error">
            {error}
          </p>
        </Container>
      </OutOfContainer>
    </div>
  );
};

export default Login;
