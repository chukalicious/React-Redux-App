import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log("Props in CharacterDetails component: ", props.details);
  const params = useParams();
  console.log("params: ", params);

  const details = props.details.find(
    (character) => character.mal_id === Number(params.id)
  );
  console.log("props.details", details);

  return (
    <div>
      <h2>{details.name} details component</h2>
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
