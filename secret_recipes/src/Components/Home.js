import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Recipes from "./Recipes.jpg";
import styled from "styled-components";
import Footer from "./Footer";

function Home(props) {
  const { homeFood } = props;
  return (
    <div>
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
      <div className="homeList">
        {homeFood.map((home) => (
          <div className="food-list" key={home.id}>
            <h2>{home.recipe_name}</h2>
            <p>By {home.source}</p>
            <h3>Indigredients</h3>
            <p>{home.ingredienrs}</p>
            <h3>Instructions</h3>
            <p>{home.instructions}</p>
          </div>
        ))}
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Home;

//Styled-components here!
const Image = styled.img`
  width: 100%;
`;
