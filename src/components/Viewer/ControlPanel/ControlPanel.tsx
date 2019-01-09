import * as React from "react";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { DownloadButtonContainer } from "./../../../containers/DownloadButtonContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { GenesPanelContainer } from "./../../../containers/GenesPanelContainer";
import { RangesPanelContainer } from "./../../../containers/RangesPanelContainer";

export class ControlPanel extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="col" style={{ margin: "5px" }}>
          <ChromosomesPanelContainer />
          <GenesPanelContainer />
          <RangesPanelContainer />
          <FeaturesPanelContainer />
          <DownloadButtonContainer />
        </div>
      </div>
    );
  }
}
