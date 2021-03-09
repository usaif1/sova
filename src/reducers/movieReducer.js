//imports
import {
  FETCH_MOVIES,
  LOADING_TRUE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
} from "../actions/types";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SET_ERROR_TRUE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_ERROR_FALSE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}
