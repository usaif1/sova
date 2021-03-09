//dependencies
import React from "react";
import { connect } from "react-redux";

//imports

const ThemeSwitch = (props) => {
  return <div>Theme Switch</div>;
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ThemeSwitch);
