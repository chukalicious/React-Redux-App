import { FETCH_ANIME_START, ANIME_SUCCESS, ANIME_FAIL } from "../actions";

const initialState = {
  isLoading: false,
  characters: [],
  error: "",
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_START:
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
      };
    default:
      return state;
  }
};
