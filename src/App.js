//dependencies
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//imports
import reducers from "./reducers";
import Routes from "./Routes";

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
