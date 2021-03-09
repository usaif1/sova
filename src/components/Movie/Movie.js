//dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//imports
import { fetchDetails } from "../../actions/movieActions";
import CircularLoader from "../common/CircularLoader";

const Movie = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchMovieDetails();

    //eslint-disable-next-line
  }, []);

  const movieDetails = (
    <div style={{ display: "flex" }}>
      <div>
        <img src={details.Poster} style={{ width: "100%" }} alt="poster" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          {details.Title} [{details.Year}]
        </h2>
        <p>IMDB Rating: {details.imdbRating}</p>
        <p>Genre: {details.Genre}</p>
        <p>Director: {details.Director}</p>
        <p>Country: {details.Country}</p>
        <p>Cast: {details.Actors}</p>
        <div>
          <p>Plot: {details.Plot}</p>
        </div>
      </div>
    </div>
  );

  const fetchMovieDetails = async () => {
    const res = await fetchDetails(id);
    setDetails(res);
  };

  console.log("movie details", details);

  return <div>{details ? movieDetails : <CircularLoader size={5} />}</div>;
};

export default Movie;
