//dependencies
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

//imports
import { searchByName } from "../../actions/movieActions";
import useStyles from "./styles";

const Searchbar = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const { searchByName } = props;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("onClick called");
    searchByName(title);
  };

  return (
    <div className={classes.inputContainer}>
      <input
        id="searchbar"
        type="text"
        style={{ outline: "none", border: "none" }}
        className={classes.input}
        onChange={handleChange}
        value={title}
      />
      <SearchIcon onClick={onClickHandler} />
    </div>
  );
};

export default connect(null, { searchByName })(Searchbar);
