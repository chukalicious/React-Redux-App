import React from "react";
import Character from "./Character";
import { connect } from "react-redux";
import { getAnime } from "../actions";

const Characters = (props) => {
  console.log("Props passed down to the Characters component: ", props);
  return (
    <div>
      <h2>Neon Genesis Evangelion Characters</h2>
      <button onClick={props.getAnime()}>Show Characters</button>

      {props.isLoading === true ? (
        <h3>Loading...</h3>
      ) : (
        props.characters.map((char) => (
          <Character key={char.mal_id} character={char} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getAnime })(Characters);
