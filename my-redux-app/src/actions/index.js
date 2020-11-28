/* export const FETCH_ANIME_START = "FETCH_ANIME_START";
export const ANIME_SUCCESS = "ANIME_SUCCESS";
export const ANIME_FAIL = "ANIME_FAIL"; */
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_PICTURES = "GET_PICTURES";
export const GET_EPISODES = "GET_EPISODES";

/* export const getAnime = () => (dispatch) => () => {
  dispatch({ type: FETCH_ANIME_START });
  axios
    .get("https://api.jikan.moe/v3/anime/30/characters_staff")
    .then((res) =>
      dispatch({ type: ANIME_SUCCESS, payload: res.data.characters })
    )
    .catch((err) => dispatch({ type: ANIME_FAIL, payload: err }));
}; */

export const getCharacters = (characters) => {
  return {
    type: GET_CHARACTERS,
    payload: characters,
  };
};

export const getPictures = (pictures) => {
  return {
    type: GET_PICTURES,
    payload: pictures,
  };
};

export const getEpisodes = (episodes) => {
  return {
    type: GET_EPISODES,
    payload: episodes,
  };
};
