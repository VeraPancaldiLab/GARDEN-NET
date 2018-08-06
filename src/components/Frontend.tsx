import * as React from "react";
import * as Reactstrap from 'reactstrap';
import { Header } from "./Header"
import { Viewer } from "./Viewer"

export class Frontend extends React.Component<{},{}> {
  render() {
    return (
      <div>
      <Header/>
      <Viewer/>
      </div>
    );
  }
}
