import * as React from "react";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";
import { ControlPanel } from "./ControlPanel/ControlPanel";

export class Viewer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-10">
            <div className="row">
              <div className="col" style={{ paddingRight: "0px" }}>
                <Cytoscape_container cytoscape_container="cytoscape_container_left" />
              </div>
              <div className="col" style={{ paddingRight: "0px" }}>
                <Cytoscape_container cytoscape_container="cytoscape_container_right" />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}
