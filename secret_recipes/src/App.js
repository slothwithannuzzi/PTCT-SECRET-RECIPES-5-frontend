import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
import RecipeList from "./Components/RecipeList";

//dummy-data for recipe card testing
import data from "./data";

//import RecipeForm component
import RecipeForm from "./Components/RecipeForm";
import Footer from "./Components/Footer";

//import user Sign Up form component
import SignUpForm from "./Components/UserForm";
import axios from "axios";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";

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
        setList(res.data);
      })
      .catch((err) => console.log("failed to retrieve data:", err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Head>
        <Title>Secret Family Recipes</Title>
        <Bar>
          <Link to="/">Home</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/recipe-list">Recipes</Link>
          <Link to="/add">Add Recipe</Link>
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </Bar>
      </Head>
      <Switch>
        <Route exact path="/">
          <Home homeFood={list} />
        </Route>
        <PrivateRoute exact path="/add">
          <RecipeForm list={list} setList={setList} />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <SignUpForm />
        </Route>
        <PrivateRoute path="/recipe-list">
          <RecipeList foods={list} setFoods={setList} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
