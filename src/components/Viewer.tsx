import * as React from "react";
import * as Reactstrap from 'reactstrap';
import { Cytoscape } from './Cytoscape'

export class Viewer extends React.Component<{},{}> {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <Cytoscape/>
        </div>
      </div>
    );
  }
}
