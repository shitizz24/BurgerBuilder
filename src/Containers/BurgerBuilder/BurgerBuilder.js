import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";
import BurgerMaker from "../../Components/BurgerMaker/BurgerMaker";
class BurgerBuilder extends Component {
  state = {
    count: []
  };
  adder = () => {
    const prev = [...this.state.count];
    prev.push("patty");
    this.setState({ count: prev });
  };
  render() {
    return (
      <Aux>
        <Burger adder={this.state.count} />
        <BurgerMaker add={this.adder} />
      </Aux>
    );
  }
}
export default BurgerBuilder;
