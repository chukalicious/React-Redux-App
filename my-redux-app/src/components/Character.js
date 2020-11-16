import React from "react";

const Character = (props) => {
  return (
    <div className="character-card">
      <h4>{props.character.name}</h4>
      <img src={props.character.image_url} />
    </div>
  );
};

export default Character;
