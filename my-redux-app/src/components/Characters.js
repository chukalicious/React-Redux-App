import React from "react";
import Character from "./Character";
import { connect } from "react-redux";
import { getAnime } from "../actions";

const Characters = (props) => {
  console.log("Props passed down to the Characters component: ", props);
  return (
    <div>
      <h2>This is the Characters component</h2>
      <button onClick={props.getAnime()}>Show Characters</button>
      {props.characters.map((char) => (
        <Character key={char.mal_id} character={char} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};
export default connect(mapStateToProps, { getAnime })(Characters);
