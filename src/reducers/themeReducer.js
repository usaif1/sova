//imports
import { SWITCH_THEME } from "../actions/types";

const initialState = {
  light: true,
};

export default function themeReducer(state = initialState, action) {
  console.log("this is theme reducer");
  return state;
}
