//dependencies
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//imports
import reducers from "./reducers";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Homepage />
    </Provider>
  );
}

export default App;
