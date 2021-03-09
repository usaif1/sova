//dependencies
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  /* movie list container */
  movieListContainer: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    margin: "auto",
  },

  /* movie card*/
  cardContainer: {
    border: "solid 1px black",
    width: "21vw",
    margin: "1rem",
    cursor: "unset",
  },

  /*text*/
  textContainer: {
    marginTop: "10%",
  },

  /*loader*/
  loaderContainer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },

  /*link*/
  link: {
    cursor: "unset",
  },
}));
