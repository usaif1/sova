import React from "react";

//imports
import { useStyles } from "./styles";

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div>
        <img
          src={movie.Poster}
          alt={`${movie.Title}-poster`}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
