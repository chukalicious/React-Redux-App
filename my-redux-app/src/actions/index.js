import axios from "axios";

const FETCH_ANIME_START = "FETCH_ANIME_START";
const ANIME_SUCCESS = "ANIME_SUCCESS";
const ANIME_FAIL = "ANIME_FAIL";

export const getAnime = (dispatch) => () => {
  dispatch({ type: FETCH_ANIME_START });
  axios
    .get("https://api.jikan.moe/v3/anime/30")
    .then((res) => dispatch({ type: ANIME_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ANIME_FAIL, payload: err }));
};
