import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import NotFound from "./Component/NotFound";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/NotFound" component={NotFound} />
        <Route>
          <Redirect to="/NotFound"></Redirect>
        </Route>
      </Switch>
    );
  }
}

export default App;
