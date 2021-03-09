//dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//imports
import { closeAlert } from "../../actions/movieActions";
import CircularLoader from "../common/CircularLoader";
import Alert from "../common/AlertSnackbar";
import MovieCard from "./MovieCard";
import { useStyles } from "./styles";

const Homepage = (props) => {
  const { movies, loading, error, closeAlert } = props;
  const classes = useStyles();

  const movieList = () => {
    if (movies && movies.length > 0) {
      return (
        <div className={classes.movieListContainer}>
          {movies.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/${movie.imdbID}`}
              className={classes.link}
            >
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      );
    } else {
      return (
        <div className={classes.textContainer}>
          <h1 style={{ textAlign: "center" }}>
            Type Something To See Search Results
          </h1>
        </div>
      );
    }
  };

  const renderMovies = () =>
    loading ? (
      <div className={classes.loaderContainer}>
        <CircularLoader size={5} />
      </div>
    ) : (
      <>{movieList()}</>
    );

  const hideAlert = () => {
    closeAlert();
  };

  return (
    <>
      {error ? (
        <Alert errorMsg="No Movie Found" open={true} onClose={hideAlert} />
      ) : null}
      {renderMovies()}
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps, { closeAlert })(Homepage);
