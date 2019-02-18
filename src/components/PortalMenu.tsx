import * as React from "react";
import { Link } from "react-router-dom";

export const PortalMenu = () => (
  <div>
    <Link replace={true} to="/">Portal</Link>
    <Link target="_blank" to="/Visualization/homo/mon">Frontend</Link>
  </div>
);
