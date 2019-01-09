import * as React from "react";
import { ControlPanel } from './ControlPanel/ControlPanel'
import { Cytoscape_container } from '../../containers/CytoscapeContainer'

export class Viewer extends React.Component<{}, {}> {
  render() {
    return (
      <div className='container-fluid'>
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
