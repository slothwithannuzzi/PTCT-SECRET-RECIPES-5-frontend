import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/recipeFormSchema";
//import styled components
import styled from "styled-components";
//import background picture
import favRecipes from "./add-favorite-recipes.jpg";

//styled-components

const Image = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: inherit;
    background-clip: content-box;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    padding-left: calc(30% - 50px);
    padding-right: 50px;
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  margin: 17% auto;
  padding: 5% 5%;
  width: 60%;
  text-align: center;
  line-height: 2;

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
    border: 1px solid black;
    background: white;
    margin: 68% auto;
    padding: 5% 5%;
    border: 0;
  }
`;

const Texth2 = styled.h2`
  font-size: 30px;
  @media (max-width: 625px) {
    font-size: 20px;
  }
`;

//Initial form state
const initialFormValues = {
  name: "",
  source: "",
  category: "",
  ingredients: "",
  instructions: "",
};

//initial form errors
const initialFormErrors = {
  name: "",
  source: "",
  category: "",
  ingredients: "",
  instructions: "",
};

//disable submit button
const initialDisabled = true;

export default function RecipeForm() {
  //form state
  const [formValues, setFormValues] = useState(initialFormValues);
  //form errors state
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //disable button state
  const [disabled, setDisabled] = useState(initialDisabled);

  //helper functions

  //validation helper
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };
  //change handler
  const onChange = (evt) => {
    const { name, value } = evt.target;
    //validate formValues
    validate(name, value);
    //set onChange to state
    setFormValues({ ...formValues, [name]: value });
  };

  //submit handler
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

  //setDisabled accordingly every time formValues changes
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
  return (
    <div>
      {/* <div className="form-container"> */}
      <Image src={favRecipes} alt="colorful-tarts" />
      <Center>
        <Container>
          <Texth2>Add Your Favorite Recipe</Texth2>
          <form onSubmit={onSubmit}>
            <div className="form-inputs">
              {/* name text input */}
              <div className="input-div">
                <div className="error-div">{formErrors.name}</div>
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
                <div className="error-div">{formErrors.source}</div>
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
                <div className="error-div">{formErrors.category}</div>
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
                <div className="error-div">{formErrors.ingredients}</div>
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
                <div className="error-div">{formErrors.instructions}</div>
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
            <button disabled={disabled}>Submit Recipe</button>
          </form>
        </Container>
      </Center>
    </div>
  );
}
