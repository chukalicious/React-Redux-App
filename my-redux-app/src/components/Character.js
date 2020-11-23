import React from "react";
import { Link, Route, useParams, Switch } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
  console.log("character comp props: ", props);
  const { character } = props.character;
  console.log("attempt at deconstruction the object: ", props);
  const params = useParams();
  console.log(params, "params");

  return (
    <>
      <Link to={`/character_details/${props.character.mal_id}`}>
        <div className="character-card">
          <h4>{props.character.name}</h4>
          <img src={props.character.image_url} />
        </div>
      </Link>
      <Route
        exact
        path={`/character_details/${props.character.mal_id}`}
        render={() => {}}
      />
    </>
  );
};

export default Character;
