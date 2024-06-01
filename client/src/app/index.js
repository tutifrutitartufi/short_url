import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { NavBar } from "../components";
import { Admin, Generate } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/generate" exact component={Generate} />
        <Route path="/admin" exact component={Admin} />
        <Redirect from="/" to="/generate" />
      </Switch>
    </Router>
  );
}

export default App;
