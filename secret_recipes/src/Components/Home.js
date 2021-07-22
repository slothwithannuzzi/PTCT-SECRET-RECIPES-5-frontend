import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Recipes from "./Recipes.jpg";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
    </div>
  );
}

export default Home;

//Styled-components here!
const Image = styled.img`
  width: 100%;
`;
