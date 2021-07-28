import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
import RecipeList from "./Components/RecipeList";
<<<<<<< HEAD
//This is Dummy-data
=======

//dummy-data for recipe card testing
>>>>>>> main
import data from "./data";

//import RecipeForm component
import RecipeForm from "./Components/RecipeForm";
import Footer from "./Components/Footer";

//import user Sign Up form component
import SignUpForm from "./Components/UserForm";
import axios from "axios";
import Login from "./Components/Login";

const Head = styled.nav`
  position: absolute;
  color: white;
  top: 2rem;
  right: 2rem;
  z-index: +2;
  // border: 1px solid black;
  @media (max-width: 625px) {
    position: static;
    background: rgba(255, 255, 255, 0.9);
    color: gray;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    flext-content: center;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 0 auto;
  // border: 1px solid black;
  @media (max-width: 625px) {
    font-size: 20px;
  }
`;

const Bar = styled.div`
  width: 100%;
  @media (max-width: 625px) {
    width:auto;
    display:flex;
    flex-direction: row;
    flex-content: center;
    // border:1px solid  black;
}
  a {
    // border:1px solid  black;
    width: 100%;
    padding: 1%;
    text-decoration: none;
    color: white;
    font-size: 23px;
    line-height: 1.6;
    display: flex;
    justify-content: flex-end;
    &:hover {
      border-radius: 10px;
      color: #b66a50;
    }
    @media (max-width: 625px) {
      font-size:15px;
      color:gray;
      justify-content:center;
      width:80%;

  }
`;

// function fetch() {
//   return Promise.resolve({ success: true, data });

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://ptct-secret-recipes.herokuapp.com/api/recipes")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("failed to retrieve data:", err));
  }, []);

  return (
    <div>
      <Head>
        <Title>Secret Family Recipes</Title>
        <Bar>
          <Link to="/">Home </Link>
          <Link to="/login">Log In </Link>
          <Link to="/register">Sign Up </Link>
          <Link to="/recipe-list">Recipes </Link>
          <Link to="/add">Add Recipe </Link>
        </Bar>
      </Head>

      <Route exact path="/">
        <Home homeFood={list} />
      </Route>
      <Route path="/add">
        <RecipeForm />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <SignUpForm />
      </Route>
      <Route path="/recipe-list">
        <RecipeList foods={list} />
      </Route>
    </div>
  );
}

export default App;
