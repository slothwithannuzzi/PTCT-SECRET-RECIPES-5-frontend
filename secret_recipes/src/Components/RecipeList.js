import axios from "axios";
import React from "react";
import styled from "styled-components";
import Recipes from "./Recipes-two.jpg";

export default function RecipeList(props) {
  const { foods, setFoods } = props;


  const deleteHandler = (id) => {
    axios.delete(`https://ptct-secret-recipes.herokuapp.com/api/recipes/${id}`)
    .then(res =>{ 
      console.log('Deleted:', res)
      axios.get('https://ptct-secret-recipes.herokuapp.com/api/recipes')
      .then(res => setFoods(res.data))
      .catch(err => console.log(err))
  })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Image className="homeImage" src={Recipes} alt="fancy-food" />
      <Container className="foodListContainer">
        {foods.map((food, index) => (
          <Card className="food-list" key={index}>
            <h2>{food.recipe_name}</h2>
            <p>By {food.source}</p>
            <h3>Ingredients</h3>
            <p>{food.ingredients}</p>
            <h3>Instructions</h3>
            <p>{food.instructions}</p>
            <button onClick = {() => deleteHandler(food.recipe_id)}>Delete</button>
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
