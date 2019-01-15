import * as React from "react";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";
import { ControlPanel } from "./ControlPanel/ControlPanel";

export class Viewer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-10">
            <Cytoscape_container />
          </div>
          <div className="col-md-2">
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}
