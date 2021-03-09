//imports
import { movie } from "../config/moviesApi";

//action types
import { FETCH_MOVIES, LOADING_TRUE } from "./types";

export const searchByName = (name) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });

  try {
    const res = await movie.get("", {
      params: {
        s: name,
        type: "movie",
      },
    });

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data.Search,
    });
  } catch (err) {
    alert("Something went wrong!");
    return;
  }
};
