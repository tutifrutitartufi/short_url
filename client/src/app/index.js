import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
