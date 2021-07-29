import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function RecipeCard(props) {
    
    const {index, food, deleteHandler } = props;
    const [edit, toggleEdit] = useState(false);

    const editToggler = () => {
        toggleEdit(!edit);
        console.log(`Edit for ${food.recipe_name} is toggled to:`, edit)
    }
    
    return(
      <div>
        <h2>{food.recipe_name}</h2>
        <p>By {food.source}</p>
        <p>Category: {food.category}</p>
        <h3>Ingredients</h3>
        <p>{food.ingredients}</p>
        <h3>Instructions</h3>
        <p>{food.instructions}</p>
        <button onClick={editToggler}>Edit</button>
        <button onClick={() => deleteHandler(food.recipe_id)}>
          Delete
        </button>
      </div>
    )
}