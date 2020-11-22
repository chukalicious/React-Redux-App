import React from "react";
import { Link, Route } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
  return (
    <>
      <Link to="/character_details/:id">
        <div className="character-card">
          <h4>{props.character.name}</h4>
          <img src={props.character.image_url} />
        </div>
      </Link>
      <Route path="/character_details/:id" component={CharacterDetails} />
    </>
  );
};

export default Character;
