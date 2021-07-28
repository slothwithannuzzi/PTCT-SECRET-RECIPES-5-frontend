import React from "react";
import styled from "styled-components";
import Recipes from "./Recipes-two.jpg";

//Styled-Components

const Image = styled.img`
  width: 100%;
  position: absolute;
`;

const Text = styled.h1`
  // border: 1px solid black;
  position: absolute;
  margin-top: 17%;
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
    margin-top: 13%;
    font-size: 45px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
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
  animation: fadeIn 2s ease 1 normal;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default function RecipeList(props) {
  const { foods } = props;

  return (
    <div>
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
      <TextContainer>
        <Text>Recipes</Text>
      </TextContainer>
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
