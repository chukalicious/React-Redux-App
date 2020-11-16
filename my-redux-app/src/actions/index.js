import axios from "axios";

export const FETCH_ANIME_START = "FETCH_ANIME_START";
export const ANIME_SUCCESS = "ANIME_SUCCESS";
export const ANIME_FAIL = "ANIME_FAIL";

export const getAnime = (dispatch) => () => {
  dispatch({ type: FETCH_ANIME_START });
  axios
    .get("https://api.jikan.moe/v3/anime/30/characters_staff")
    .then((res) =>
      dispatch({ type: ANIME_SUCCESS, payload: res.data.characters })
    )
    .catch((err) => dispatch({ type: ANIME_FAIL, payload: err }));
};
