import React from "react";

//imports
import { useStyles } from "./styles";

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <img
        src={movie.Poster}
        alt={`${movie.Title}-poster`}
        style={{ width: "100%", cursor: "pointer" }}
      />
    </div>
  );
};

export default MovieCard;
