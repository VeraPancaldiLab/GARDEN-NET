import * as React from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { ChromosomesPanelContainer } from "./../../../containers/ChromosomesPanelContainer";
import { FeaturesMetadataPanelContainer } from "./../../../containers/FeaturesMetadataPanelContainer";
import { FeaturesPanelContainer } from "./../../../containers/FeaturesPanelContainer";
import { UploadButtonContainer } from "./../../../containers/UploadButtonContainer";

export class ControlPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data_sources_modal: false };
  }
  public render() {
    return (
      <div className="container-fluid">
        <h3
          className="text-center"
          style={{ marginBottom: "0px", visibility: "hidden" }}
        >
          Panel
        </h3>
        <Col className="text-center">
          <Button
            outline={true}
            color="info"
            className="text-center"
            style={{ marginBottom: "5px", borderWidth: "2px" }}
            onClick={() => this.setState({ data_sources_modal: true })}
          >
            Data sources
          </Button>
          <ChromosomesPanelContainer />
          <FeaturesPanelContainer />
          <FeaturesMetadataPanelContainer />
          <UploadButtonContainer />
        </Col>
        <Modal
          isOpen={this.state.data_sources_modal}
          centered={true}
          className="text-center"
          size="lg"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b className="text-info">Data sources</b>
          </ModalHeader>
          <ModalBody>
            <b>Chromatin Contact networks</b>
            <br />
            Promoter Capture HiC data for haematopoietic cells in human.{" "}
            <a
              target="_blank"
              href="https://doi.org/10.1016/j.cell.2016.09.037"
            >
              <em>Javierre et al. Cell 2016</em>
            </a>
            <br />
            Promoter Capture HiC data for mouse embryonic stem cells{" "}
            <a target="_blank" href="https://doi.org/10.1101/gr.185272.114">
              <em>Shoenfelder et al. Genome Research 2015</em>
            </a>{" "}
            <br />
            <b>Features</b>
            <br />
            Mouse embryonic stem cells histone modifications and TF ChIP-Seq.{" "}
            <a
              target="_blank"
              href="https://doi.org/10.1016/j.celrep.2016.01.008"
            >
              <em>Juan et al. Cell Reports 2016</em>
            </a>
            <br />
            <b>Human Gene expression data</b>
            <br />
            GeneExp from{" "}
            <a target="_blank" href="https://doi.org/10.1186/s13073-019-0638-6">
              <em>Finotello et al. Genome Medicine 2019</em>
            </a>
            <br />
            GeneExpEPIVAR for Monocytes, Neutrophils and Tcells from{" "}
            <a
              target="_blank"
              href="https://doi.org/10.1016/j.cell.2016.10.026"
            >
              <em>Chen et al. Cell 2016</em>
            </a>
            <br />
            Human Histone modification data: EPIVAR from{" "}
            <a
              target="_blank"
              href="https://doi.org/10.1016/j.cell.2016.10.026"
            >
              <em>Chen et al. Cell 2016</em>
            </a>
            <br />
            Human Replication Timing data (GM12878).{" "}
            <a target="_blank" href="https://doi.org/10.1038/nature13986">
              <em>Pope et al. Nature 2014</em>
            </a>
            <br />
            PCHiC data processed with CHiCAGO.{" "}
            <a target="_blank" href="https://doi.org/10.1186/s13059-016-0992-2">
              <em>Cairns et al. Genome Biology 2016</em>
            </a>
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="info"
              onClick={() => this.setState({ data_sources_modal: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
