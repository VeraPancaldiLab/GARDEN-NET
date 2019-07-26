import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { SearchPanelContainer } from "./../../containers/SearchPanelContainer";

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <Row>
        <Container fluid={true}>
          <div className="row flex-column-reverse flex-lg-row">
            <Col>
              <Col style={{ marginTop: "15px" }}>
                <span>
                  Here you will be able to visualize chromosome conformation
                  capture datasets as networks of interacting chromatin
                  fragments. The published datasets available were generated
                  with the <em>Promoter Capture HiC</em> technique, which
                  returns contacts involving promoters.
                  <div className="text-left">
                    <b>
                      Left click on nodes to navigate to WashU browser.
                    </b>
                    <br />
                    <b>
                      Right click on nodes to zoom into their neighborhood.
                    </b>
                  </div>
                </span>
                <br />
              </Col>
            </Col>
            <Col>
              <Container fluid={false}>
                <Row>
                  <Col lg="2" />
                  <Col className="text-center">
                    <a
                      href="https://pancaldi.bsc.es/garden-net"
                      target="_blank"
                    >
                      <img
                        src="images/garden-net.png"
                        width="120"
                        height="120"
                        alt="GARDEN-NET logo"
                      />
                    </a>
                  </Col>
                  <Col lg="2" />
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
                  <b>GARDEN-NET</b> uses functionality provided by the{" "}
                  <a
                    href="https://bitbucket.org/eraineri/chaser"
                    target="_blank"
                  >
                    ChAseR
                  </a>{" "}
                  R package to integrate datasets and compute chromatin
                  assortativity (
                  <em>
                    <a
                      href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-016-1003-3"
                      target="_blank"
                    >
                      Pancaldi et al. 2016
                    </a>
                  </em>
                  ).
                </span>
                <br />
                User submitted features can also be visualized on the networks
                and used for the network based calculations.
                <span>
                  A selection of epigenomic features that have been mapped to
                  the chromatin fragments will be available from the drop-down
                  menu on the right. Select one of them to visualize chromatin
                  fragments that have that feature and to calculate statistics
                  relating to this feature and the 3D network.
                </span>
              </Row>
            </Col>
          </div>
        </Container>
      </Row>
    );
  }
}
