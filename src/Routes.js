import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dash from "./Pages/Dashboard";
import Case from "./Pages/Case";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registrar" component={Register} />
        <Route path="/app" component={Dash} />
        <Route path="/case/novo" component={Case} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
