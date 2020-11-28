import React, { useEffect } from "react";
import CharacterCard from "./CharacterCard";
import CharacterDetails from "./CharacterDetails";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const Characters = (props) => {
  console.log(
    "Props passed down to the Characters component: ",
    props.characters
  );

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
        <>
          <Link to={`/characters/${character.mal_id}`}>
            <CharacterCard
              key={character.mal_id}
              name={character.name}
              image={character.image_url}
            />
          </Link>
          <Route exact path="/characters/:id">
            <CharacterDetails details={character} />
          </Route>
        </>
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
