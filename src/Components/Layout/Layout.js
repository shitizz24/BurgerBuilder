import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import "../Burger/Burger.css";
const layout = props => (
  <Aux>
    <div>Toolbar,Sidedrawer,Backdrop</div>
    <main className="Burger">{props.children}</main>
  </Aux>
);
export default layout;
