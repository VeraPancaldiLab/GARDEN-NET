import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { FrontendContainer } from "./../containers/FrontendContainer";
import { PortalMenu } from "./PortalMenu";

export const Portal = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={PortalMenu} />
      <Route exact={true} path="/Visualization/:organism/:cell_type" component={FrontendContainer} />
    </div>
  </Router>
);
