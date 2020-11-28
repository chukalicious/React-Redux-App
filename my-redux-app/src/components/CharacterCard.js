import React from "react";

const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <h4>{props.name}</h4>
      <img src={props.image} />
    </div>
  );
};

export default CharacterCard;
