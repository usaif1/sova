//imports
import { movie } from "../config/moviesApi";

//action types
import { FETCH_MOVIES } from "./types";

export const searchByName = (name) => async (dispatch) => {
  try {
    const res = await movie.get("", {
      params: {
        s: name,
        type: "movie",
      },
    });

    console.log(res.data);

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data.Search,
    });
  } catch (err) {
    alert("Something went wrong!");
    return;
  }
};
