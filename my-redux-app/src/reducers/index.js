import { FETCH_ANIME_START, ANIME_SUCCESS, ANIME_FAIL } from "../actions";

const initialState = {
  isLoading: false,
  characters: [],
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_START:
      return {
        ...state,
        isLoading: true,
      };
    case ANIME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      };
    default:
      return state;
  }
};
