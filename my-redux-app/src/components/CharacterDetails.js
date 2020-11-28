import React from "react";
import { useParams, useHistory } from "react-router-dom";

const CharacterDetails = (props) => {
  const params = useParams();

  //function to use params to match to url
  const details = props.details.find(
    (character) => character.mal_id === Number(params.id)
  );
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/characters")}>
        Back to Characters
      </button>
      <h2>{details.name} Details: </h2>
      <img src={details.image_url} />
      <h4>Role: {details.role}</h4>
      <p>Voiced By: </p>
      {details.voice_actors.map((voice, index) => (
        <p key={index}>
          {voice.name} (<strong>{voice.language}</strong>)
        </p>
      ))}
      <button onClick={() => history.push("/home")}>Back to Home</button>
    </div>
  );
};

export default CharacterDetails;
