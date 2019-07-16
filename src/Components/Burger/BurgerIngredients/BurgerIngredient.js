import React from "react";
import "./BurgerIngredient.css";
const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="add-ons">Bread-bottom</div>;
      break;
    case "bread-top":
      ingredient = <div className="add-ons">Bread-top</div>;
      break;
    case "patty":
      ingredient = <div className="add-ons">Patty</div>;
      break;
    case "cheese":
      ingredient = <div className="add-ons">Cheese</div>;
      break;
    case "lettuce":
      ingredient = <div className="add-ons">Lettuce</div>;
      break;
  }
  return ingredient;
};
export default burgerIngredient;
