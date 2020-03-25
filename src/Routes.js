import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registrar" component={Register} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
