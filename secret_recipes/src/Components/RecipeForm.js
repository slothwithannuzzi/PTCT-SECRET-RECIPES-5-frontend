import React, { useState } from "react";
import axios from "axios";

//Initial form state
const initialFormValues = {
  name: "",
  source: "",
  category: "",
  ingredients: "",
  instructions: "",
};

export default function RecipeForm() {
  //form state
  const [formValues, setFormValues] = useState(initialFormValues);

  //helper functions
  const onChange = (evt) => {
    const { name, value } = evt.target;
    //set onChange to state
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (evt) => {
    //stop default reload upon submission
    evt.preventDefault();

    //collect new formValues
    const newRecipe = {
      name: formValues.name.trim(),
      source: formValues.source.trim(),
      category: formValues.category,
      ingredients: formValues.ingredients.trim(),
      instructions: formValues.instructions.trim(),
    };

    //post newRecipe to endpoint, USING FAKE API AS PLACEHOLDER
    axios
      .post("https://reqres.in/api/users", newRecipe)
      .then((res) => console.log("NEW RECIPE RESPONSE", res))
      .catch((err) => {
        debugger;
      });
    setFormValues(initialFormValues);
  };
  return (
    <div className="form-container">
      <h2>Add Your Favorite Recipe</h2>

      <form onSubmit={onSubmit}>
        <div className="form-inputs">
          {/* name text input */}
          <div className="input-div">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={onChange}
                placeholder="Enter your recipe name here"
                maxLength="40"
                size="40"
              />
            </label>
          </div>

          {/* source text input */}
          <div className="input-div">
            <label>
              Source
              <input
                type="text"
                name="source"
                value={formValues.source}
                onChange={onChange}
                placeholder="Where did it come from?"
                maxLength="40"
                size="40"
              />
            </label>
          </div>

          {/* category dropdown */}
          <div className="input-div">
            <label>
              Category
              <select
                name="category"
                value={formValues.category}
                onChange={onChange}
              >
                <option value="">-- select recipe category --</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="side">Side Dish</option>
                <option value="appetizer">Appetizer</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </label>
          </div>

          {/* ingredients text area */}
          <div className="input-div">
            <label>
              Ingredients
              <input
                type="textarea"
                name="ingredients"
                value={formValues.ingredients}
                onChange={onChange}
                placeholder="What ingredients do you need for your dish?"
              />
            </label>
          </div>

          {/* instructions textarea */}
          <div className="input-div">
            <label>
              Instructions
              <input
                type="textarea"
                name="instructions"
                value={formValues.instructions}
                onChange={onChange}
                placeholder="What are the steps needed to make this recipe?"
              />
            </label>
          </div>
        </div>
        <button>Submit Recipe</button>
      </form>
    </div>
  );
}
