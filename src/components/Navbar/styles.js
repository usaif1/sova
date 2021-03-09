//dependencies
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 4rem",
    background: "black",
  },

  /* sova-logo */
  logoContainer: {
    width: "5rem",
  },

  logo: {
    width: "100%",
  },

  /* search-bar */
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    width: "70rem",
    padding: "0.5rem",
    borderRadius: "2rem",
    background: "white",
  },
  input: {
    width: "100%",
    borderRadius: "inherit",
  },

  /*theme-switch */
}));

export default useStyles;
