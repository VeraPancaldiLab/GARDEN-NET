import * as React from "react";
import { Header } from "./Header";
import { Viewer } from "./Viewer/Viewer";

export class Frontend extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Header />
        <Viewer />
      </div>
    );
  }
}
