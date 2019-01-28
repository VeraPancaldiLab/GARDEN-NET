import * as React from "react";
import { CytoscapeManager } from "../../containers/CytoscapeManager";
import { ControlPanel } from "./ControlPanel/ControlPanel";

export class Viewer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-10" style={{ padding: "0px"}}>
            <CytoscapeManager />
          </div>
          <div className="col-lg-2" style={{ padding: "0px"}}>
            <ControlPanel />
          </div>
        </div>
      </div>
    );
  }
}
