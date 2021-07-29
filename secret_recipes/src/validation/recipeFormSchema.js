import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Recipe name required")
    .min(2, "Recipe name must be at least 2 characters"),
  source: yup.string().required("Recipe source required"),
  category: yup
    .string()
    .required("Select a recipe category")
    .oneOf(
      [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Side",
        "Appetizer",
        "Miscellaneous",
      ],
      "Select a recipe category"
    ),
  ingredients: yup.string().required("Recipe ingredients required"),
  instructions: yup.string().required("Recipe instructions required"),
});
