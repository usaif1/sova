//dependencies
import React from "react";
import { connect } from "react-redux";

//imports
import MovieCard from "./MovieCard";
import { useStyles } from "./styles";

const Homepage = (props) => {
  const { movies, loading } = props;
  const classes = useStyles();

  const movieList = () => {
    if (movies.length > 0) {
      return movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ));
    } else {
      return <div>Your movies will come here</div>;
    }
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={classes.movieListContainer}>{movieList()}</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Homepage);
