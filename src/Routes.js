//dependecies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//imports
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Movie from "./components/Movie/Movie";

const routes = [
  {
    id: "1",
    path: "/",
    component: Homepage,
  },
  {
    id: "2",
    path: "/:id",
    component: Movie,
  },
];

const Routes = () => {
  return (
    <Router>
      <Navbar />
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact
          key={route.id}
        />
      ))}
    </Router>
  );
};

export default Routes;
