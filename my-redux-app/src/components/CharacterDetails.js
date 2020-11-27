import React from "react";

const CharacterDetails = (props) => {
  console.log("Props in CharacterDetails component: ", props.character);

  return (
    <div>
      <h2>Character Details: This is the details component</h2>
    </div>
  );
};

export default CharacterDetails;
