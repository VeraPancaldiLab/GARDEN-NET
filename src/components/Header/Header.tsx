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
            <Col />
          </div>
        </Container>
      </Row>
    );
  }

}
