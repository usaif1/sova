//imports
import { FETCH_MOVIES, LOADING_TRUE } from "../actions/types";

const initialState = {
  movies: [],
  loading: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
