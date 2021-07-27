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
      <Container className="homeList">
        {/* {homeFood.map((home, index) => (
          <Card className="food-list" key={index}>
            <h2>{home.recipe_name}</h2>
            <p>By {home.source}</p>
            <h3>Indigredients</h3>
            <p>{home.ingredients}</p>
            <h3>Instructions</h3>
            <p>{home.instructions}</p>
          </Card>
        ))} */}
      </Container>
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

const Container = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 250px;
  margin: 0 10px 32px;
  cursor: pointer;
`;
