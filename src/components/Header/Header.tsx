import * as React from "react";
import { Alert, Col, Container, Row } from "reactstrap";
import { MetadataPanelContainer } from "../../containers/MetadataPanelContainer";
import { SearchPanelContainer } from "./../../containers/SearchPanelContainer";

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <Row>
        <Container fluid={true}>
          <div className="row flex-column-reverse flex-lg-row">
            <Col>
              <Col>
                <MetadataPanelContainer />
              </Col>
            </Col>
            <Col>
              <Container fluid={false}>
                <Row>
                  <Col>
                    <h1 className="text-center"><a href="https://github.com/VeraPancaldiLab/GARDEN-NET">GARDEN-NET</a></h1>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col xs="auto">
                    <Alert className="text-center" color="primary">Still in development!</Alert>
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col lg="2" />
                  <Col>
                    <SearchPanelContainer />
                  </Col>
                  <Col lg="2" />
                </Row>
              </Container>
            </Col>
            <Col>
              <Row style={{ marginRight: "15px", marginTop: "15px" }}>
                <span>
                  Here you will be able to visualize chromosome conformation capture datasets as networks of interacting chromatin fragments. The published datasets available were generated with the <em>Promoter Capture HiC</em> technique, which returns contacts involving promoters.
                  </span>
                <span>
                  A selection of epigenomic features that have been mapped to the chromatin fragments will be available from the drop-down menu on the right. Select one of them to visualize chromatin fragments that have that feature and to calculate statistics relating to this feature and the 3D network.
                  </span>
                <span>
                  <a href="https://bitbucket.org/eraineri/chaser" target="_blank">ChAseR</a> R package enables calculations of network statistics and chromatin assortativity (<em><a href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-016-1003-3" target="_blank">Pancaldi et al. 2016</a></em>).
                    </span>
              </Row>
            </Col>
          </div>
        </Container>
      </Row>
    );
  }

}
