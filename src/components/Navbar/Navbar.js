//dependencies
import React from "react";

//imports
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import ThemeSwitch from "./ThemeSwitch";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Logo />
      <Searchbar />
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
