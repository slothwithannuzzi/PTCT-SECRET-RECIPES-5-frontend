import React from "react";
import styled from "styled-components";
import Recipes from "./Recipes-two.jpg";

export default function RecipeList(props) {
  const { foods } = props;

  return (
    <div>
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
      <Container className="foodListContainer">
        {foods.map((food, index) => (
          <Card className="food-list" key={index}>
            <h2>{food.recipe_name}</h2>
            <p>By {food.source}</p>
            <h3>Indigredients</h3>
            <p>{food.ingredients}</p>
            <h3>Instructions</h3>
            <p>{food.instructions}</p>
          </Card>
        ))}
      </Container>
    </div>
  );
}

//Styled-Components

const Container = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  filter: drop-shadow(0 0 3px gray);
  text-align: center;
`;

const Card = styled.div`
  z-index: 1;
  width: 250px;
  margin: 0 15px 32px;
  cursor: pointer;
  background: rgba(255, 255, 255, 255);
  backdrop-filter: blur(5px);
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
`;
