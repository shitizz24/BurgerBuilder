import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import "../Layout/Layout.css";
import "./Burger.css";
const burger = props => {
  const element = props.adder.map(element => {
    return <BurgerIngredient type="patty" />;
  });

  return (
    <div className="make">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="patty" />
      {element}
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
