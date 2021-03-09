//dependencies
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//imports
import { useStyles } from "./style";

const AlertSnackbar = ({ errorMsg, open, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transitionDuration={500}
        classes={{ anchorOriginTopCenter: classes.anchorPosition }}
      >
        <MuiAlert
          severity="error"
          onClose={onClose}
          elevation={6}
          variant="filled"
          classes={{ message: classes.text }}
        >
          {errorMsg}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default AlertSnackbar;
