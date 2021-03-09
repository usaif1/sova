//dependencies
import React from "react";

//imports
import sova from "../../assets/sova-logo.png";
import useStyles from "./styles";
const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img src={sova} alt="sova-logo" className={classes.logo} />
    </div>
  );
};

export default Logo;
