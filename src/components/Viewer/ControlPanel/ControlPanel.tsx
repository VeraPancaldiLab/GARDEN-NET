import * as React from "react";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { DownloadButtonContainer } from "./../../../containers/DownloadButtonContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { FeaturesMetadataPanelContainer } from "./../../../containers/FeaturesMetadataPanelContainer";

export class ControlPanel extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center" style={{ visibility: "hidden" }}>Panel</h3>
        <div className="col">
          <ChromosomesPanelContainer />
          <FeaturesPanelContainer />
          <FeaturesMetadataPanelContainer />
          <DownloadButtonContainer />
        </div>
      </div>
    );
  }
}
