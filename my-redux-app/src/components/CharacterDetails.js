import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log("Props in CharacterDetails component: ", props.details);
  const params = useParams();
  console.log("params: ", params);

  return (
    <div>
      <h2>{props.details.name} details component</h2>
      <p>Role: {props.details.role}</p>
      <p>Voiced By: </p>
      {props.details.voice_actors.map((voice) => (
        <p>{voice.name}</p>
      ))}
    </div>
  );
};

export default CharacterDetails;
