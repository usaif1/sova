//dependencies
import React from "react";
import { connect } from "react-redux";

//imports
const Homepage = (props) => {
  console.log("props in movies", props.movies);

  return <div>Homepage</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(Homepage);
