//dependencies
import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

//imports
import { searchByName } from "../../actions/movieActions";
import useStyles from "./styles";

const Searchbar = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const { searchByName } = props;
  const titleRef = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        searchByName(titleRef.current.value);
      }
    };
    document.addEventListener("keyup", listener);
    return () => {
      document.removeEventListener("keyup", listener);
    };
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onClickHandler = (e) => {
    searchByName(title);
  };

  return (
    <div className={classes.inputContainer}>
      <input
        ref={titleRef}
        id="searchbar"
        type="text"
        style={{ outline: "none", border: "none" }}
        className={classes.input}
        onChange={handleChange}
        value={title}
      />
      <SearchIcon
        onClick={onClickHandler}
        fontSize="large"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default connect(null, { searchByName })(Searchbar);
