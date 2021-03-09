//imports
import { movie } from "../config/moviesApi";

//action types
import {
  FETCH_MOVIES,
  LOADING_TRUE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
} from "./types";

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

    if (res.data.Response === "True") {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data.Search,
      });
    } else {
      dispatch({
        type: SET_ERROR_TRUE,
        payload: res.data.Error,
      });
    }
  } catch (err) {
    alert("Something went wrong!", err);
    console.log(err);
    dispatch({
      type: SET_ERROR_TRUE,
      payload: "Movie Not Found",
    });
    return;
  }
};

export const closeAlert = () => (dispatch) => {
  dispatch({
    type: SET_ERROR_FALSE,
  });
};

export const fetchDetails = async (id) => {
  try {
    const res = await movie.get("", {
      params: {
        i: id,
        type: "movie",
      },
    });
    return res.data;
  } catch (error) {}
};
