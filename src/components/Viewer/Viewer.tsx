import * as React from "react";
import * as Reactstrap from 'reactstrap';
import { ControlPanel } from './ControlPanel/ControlPanel'
import { Cytoscape_container } from '../../containers/CytoscapeContainer'

export class Viewer extends React.Component<{},{}> {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <ControlPanel/>
        </div>
        <div className="row">
          <Cytoscape_container/>
        </div>
      </div>
    );
  }
}
