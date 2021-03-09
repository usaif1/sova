//dependencies
import { combineReducers } from "redux";

//imports
import ThemeReducer from "./themeReducer";
import MovieReducer from "./movieReducer";

export default combineReducers({
  theme: ThemeReducer,
  movies: MovieReducer,
});
