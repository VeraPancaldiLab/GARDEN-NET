import * as React from "react";
import { Button, Col } from "reactstrap";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { FeaturesMetadataPanelContainer } from "./../../../containers/FeaturesMetadataPanelContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { UploadButtonContainer } from "./../../../containers/UploadButtonContainer";

export class ControlPanel extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center" style={{ visibility: "hidden" }}>
          Panel
        </h3>
        <Button className="text-center" style={{ visibility: "hidden" }}>
          Panel
        </Button>
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
