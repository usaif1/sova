//imports
import { FETCH_MOVIES } from "../actions/types";

const initialState = {
  movies: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}
