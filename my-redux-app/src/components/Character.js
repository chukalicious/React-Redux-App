import React from "react";

const Character = (props) => {
  return (
    <div>
      <h4>{props.character.name}</h4>
      <img src={props.character.image_url} />
    </div>
  );
};

export default Character;
