import * as React from "react";
import { Col } from "reactstrap";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { FeaturesMetadataPanelContainer } from "./../../../containers/FeaturesMetadataPanelContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { UploadButtonContainer } from "./../../../containers/UploadButtonContainer";

export class ControlPanel extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <Col className="text-center">
          <ChromosomesPanelContainer />
          <FeaturesPanelContainer />
          <FeaturesMetadataPanelContainer />
          <UploadButtonContainer />
        </Col>
      </div>
    );
  }
}
