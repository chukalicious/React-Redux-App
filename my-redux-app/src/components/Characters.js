import React, { useEffect } from "react";
import Character from "./Character";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = (props) => {
  console.log("Props passed down to the Characters component: ", props);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/anime/30/characters_staff")
      .then((res) => {
        props.getCharacters(res.data.characters);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {props.characters.map((character) => (
        <Link to={`/charcters/${character.mal_id}`}>
          <Character key={character.mal_id} character={character} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};
export default connect(mapStateToProps, { getCharacters })(Characters);
