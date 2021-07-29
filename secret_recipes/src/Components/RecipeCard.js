import axios from "axios";
import React, { useState } from "react";
import EditMenu from "./EditMenu";


export default function RecipeCard(props) {
    
    const { food, deleteHandler } = props;
    const [edit, toggleEdit] = useState(false);

    const editToggler = () => {
        toggleEdit(true);
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
        <div>
            {
            (edit === true)
                ? <EditMenu food = {food} edit ={edit} toggleEdit = {toggleEdit}/>
                : <div></div>
            }
        </div>

      </div>
    )
}