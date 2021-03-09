//dependencies
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

//imports
import { useStyles } from "./style";

const CircularLoader = ({ size }) => {
  const classes = useStyles();
  return <CircularProgress className={classes.loader} size={`${size}rem`} />;
};

export default CircularLoader;
