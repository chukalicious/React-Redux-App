import React, { useEffect, useState } from "react";
import Character from "./Character";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import axios from "axios";

const Characters = (props) => {
  console.log("Props passed down to the Characters component: ", props);

  const [characters, setCharacters] = useState([]);
  console.log("characters: ", characters);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/anime/30/characters_staff")
      .then((res) => {
        setCharacters(res.data.characters);
        props.getCharacters(res.data.characters);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {characters.map((char) => (
        //try making the code below the link to the character, see what happens
        <Character key={char.mal_id} character={char} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getCharacters })(Characters);
