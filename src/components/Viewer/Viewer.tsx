import * as React from "react";
import { CytoscapeManager } from "../../containers/CytoscapeManager";
import { ControlPanel } from "./ControlPanel/ControlPanel";

export class Viewer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-10">
            <CytoscapeManager />
          </div>
          <div className="col-md-2">
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}
