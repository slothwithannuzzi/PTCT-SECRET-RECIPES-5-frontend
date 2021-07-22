import React from "react";
import styled from "styled-components";
import Recipes from "./Recipes-two.jpg";

export default function RecipeList(props) {
  const { foods } = props;

  return (
    <Container className="foodListContainer">
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
      {foods.map((food) => (
        <Card className="food-list" key={food.id}>
          <h2>{food.recipe_name}</h2>
          <p>By {food.source}</p>
          <h3>Indigredients</h3>
          <p>{food.ingredienrs}</p>
          <h3>Instructions</h3>
          <p>{food.instructions}</p>
        </Card>
      ))}
    </Container>
  );
}

//Styled-Components

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

const Image = styled.img`
  width: 100%;
`;
