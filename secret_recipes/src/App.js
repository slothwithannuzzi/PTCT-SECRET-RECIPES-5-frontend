import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
import RecipeList from "./Components/RecipeList";
import data from "./data";
//import RecipeForm component
import RecipeForm from "./Components/RecipeForm";
import Footer from "./Components/Footer";


//import user Sign Up form component
import SignUpForm from "./Components/UserForm";
import axios from "axios";
import Login from "./Components/Login";

const Title = styled.h1`
  font-size: 30px;
`;

const Head = styled.nav`
  color: white;
  position: absolute;
  top: 2rem;
  right: 2rem;
  // border: 1px solid black;
`;

const Bar = styled.div`
  a {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: gray;
    font-size: 23px;
    line-height: 1.6;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`

// function fetch() {
//   return Promise.resolve({ success: true, data });


function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('https://ptct-secret-recipes.herokuapp.com/api/recipes')
    .then(res => {
      console.log(res)
      setList(res.data);
    })
    .catch(err => console.log('failed to retrieve data:', err))
  }, []);

  return (
    <div>
      <Head>
        <Title>Secret Recipes</Title>
        <Bar>
          <Link to="/">Home</Link>
          <Link to='/login'>Log In</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/recipe-list">Recipes</Link>
          <Link to="/add">Add Recipe</Link>
        </Bar>
      </Head>

      <Route exact path="/">
        <Home homeFood={list} />
      </Route>
      <Route path="/add">
        <RecipeForm />
      </Route>
      <Route path='/login'>
        <Login/>
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
