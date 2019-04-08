import * as React from "react";
import { Col } from "reactstrap";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { DownloadButtonContainer } from "./../../../containers/DownloadButtonContainer";
import { FeaturesMetadataPanelContainer } from "./../../../containers/FeaturesMetadataPanelContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { UploadButton } from "./SubPanels/UploadButton";

export class ControlPanel extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center" style={{ visibility: "hidden" }}>Panel</h3>
        <Col className="text-center">
          <ChromosomesPanelContainer />
          <FeaturesPanelContainer />
          <FeaturesMetadataPanelContainer />
          <UploadButton />
          <DownloadButtonContainer />
        </Col>
      </div>
    );
  }
}
