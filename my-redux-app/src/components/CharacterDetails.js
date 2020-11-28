import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  const params = useParams();

  //function to use params to match to url
  const details = props.details.find(
    (character) => character.mal_id === Number(params.id)
  );

  return (
    <div>
      <h2>{details.name} Details: </h2>
      <img src={details.image_url} />
      <h4>Role: {details.role}</h4>
      <p>Voiced By: </p>
      {details.voice_actors.map((voice) => (
        <p>{voice.name}</p>
      ))}
    </div>
  );
};

export default CharacterDetails;
