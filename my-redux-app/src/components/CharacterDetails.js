import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log("Props in CharacterDetails component: ", props.details);
  const params = useParams();
  console.log("params: ", params);

  return (
    <div>
      <h2>{props.details.name} details component</h2>
    </div>
  );
};

export default CharacterDetails;
