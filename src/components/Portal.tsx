import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Frontend } from "./Frontend";
import { PortalMenu } from "./PortalMenu";

export const Portal = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={PortalMenu} />
      <Route exact={true} path="/Visualization" component={Frontend} />
    </div>
  </Router>
);
