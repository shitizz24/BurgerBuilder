import React from "react";
const burgerMaker = props => {
  return (
    <div>
      <button onClick={props.add}>Add Patty</button>
    </div>
  );
};
export default burgerMaker;
