import {
  /* FETCH_ANIME_START,
  ANIME_SUCCESS,
  ANIME_FAIL, */
  GET_CHARACTERS,
  GET_PICTURES,
} from "../actions";

const initialState = {
  isLoading: false,
  characters: [],
  pictures: [],
  error: "",
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    /* case FETCH_ANIME_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case ANIME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
        error: "",
      };
    case ANIME_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }; */
    case GET_CHARACTERS:
      return {
        ...state,
        characters: [...action.payload],
      };
    case GET_PICTURES:
      return {
        ...state,
        pictures: [...action.payload],
      };
    default:
      return state;
  }
};
