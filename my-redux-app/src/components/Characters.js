import React, { useEffect } from "react";
import CharacterCard from "./CharacterCard";
import CharacterDetails from "./CharacterDetails";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import axios from "axios";
import { Link, Route, useHistory } from "react-router-dom";

const Characters = (props) => {
  const history = useHistory();
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
      <button onClick={() => history.goBack()}> Go Back </button>
      {props.characters.map((character, index) => (
        <div key={index}>
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
        </div>
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
