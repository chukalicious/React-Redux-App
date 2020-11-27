import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
  console.log("Props passed down to the Character component: ", props);

  const params = useParams();
  console.log("params: ", params);
  return (
    <>
      <div className="character-card">
        <h4>{props.character.name}</h4>
        <img src={props.character.image_url} />
      </div>

      {/* <CharacterDetails character={props.character} /> */}
    </>
  );
};

export default Character;
