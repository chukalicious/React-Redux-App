import React from "react";

const Character = (props) => {
  console.log("props from passed down to the Character componet: ", props);
  return (
    <div>
      <h4>{props.character.name}</h4>
    </div>
  );
};

export default Character;
