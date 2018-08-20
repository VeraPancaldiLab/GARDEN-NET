import * as React from "react";
import { ColorPanel } from './SubPanels/ColorPanel';
import { SelectionPanelContainer } from './../../../containers/SelectionPanelContainer';
import { SizePanelContainer } from './../../../containers/SizePanelContainer';
import { ColorPanelContainer } from './../../../containers/ColorPanelContainer';

export class ControlPanel extends React.Component<{},{}> {
  render() {
    return (
      <div className='container' >
        <div className="row">
          <div className="col text-center">
            <ColorPanelContainer/>
          </div>
          <div className="col">
            <SelectionPanelContainer/>
          </div>
          <div className="col">
            <SizePanelContainer/>
          </div>
        </div>
      </div>
    );
  }
}
