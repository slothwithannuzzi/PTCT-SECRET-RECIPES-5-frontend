import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

//import RecipeForm component
import RecipeForm from "./Components/RecipeForm";

//import user Sign Up form component
import SignUpForm from "./Components/UserForm";

function App() {
  return (
    <div>
      <Head>
        <Title>Secret Recipes</Title>
        <Bar>
          <Link to="/">Home</Link>
          <Link to="">Recipes</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/add">Add Recipe</Link>
        </Bar>
      </Head>
      <Home />
      <hr />
      <Route path="/add">
        <RecipeForm />
      </Route>
      <hr />
      <hr />
      <Route path="/register">
        <SignUpForm />
      </Route>
      <hr />
      <Footer />
    </div>
  );
}

export default App;

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
    color: white;
    font-size: 23px;
    line-height: 1.6;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;
