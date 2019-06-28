import * as React from "react";
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from "reactstrap";

export class MetadataPanel extends React.Component<any, any> {

  private BASE_URL = "http://CRCT2107:8080/data/";

  constructor(props: any) {
    super(props);
    this.state = { network_properties: {}, network_statistics: {}, metadata_error: false };
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url).then((response) => {
      const json = response.json();
      return json;
    }).catch((_err) => {
        this.setState({metadata_error: true});
    });
  }

  // react-redux v7
  public componentDidMount() {
    this.forceUpdate();
  }

  public componentDidUpdate = (prevProps: any) => {
    if (Object.keys(this.state.network_properties).length === 0 || this.props.chromosome !== prevProps.chromosome) {
      this.fetchAsyncJson(this.BASE_URL + this.props.organism + "/" + this.props.cell_type + "/" + "metadata" + "/" + "chr" + this.props.chromosome + ".json").then((json) => {
        this.setState({ network_properties: json.network_properties, network_statistics: json.network_statistics });
      });
    }
  }

  public render() {
    return (
      <div className="text-center" style={{ paddingTop: "15px" }}>
        <Modal isOpen={this.state.metadata_error} centered={true} className="text-center">
          <ModalHeader>
            <b className="text-danger" style={{marginLeft: "210px"}}>Error</b>
          </ModalHeader>
          <ModalBody>
            There is not metadata to be downloaded
          </ModalBody>
          <ModalFooter>
            <Button color="danger" style={{marginRight: "200px"}} onClick={() => this.setState({metadata_error: false})}>Close</Button>
          </ModalFooter>
        </Modal>
        <Label className="text-center">{this.props.chromosome === "PP" ? "Promoter-Promoter only" : "Chromosome " + this.props.chromosome} network data</Label>
        <Row style={{ fontSize: "85%" }}>
          <Col xs={6}>
            <Table bordered={true} size="sm">
              <thead>
                <tr>
                  <th>Network properties</th>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.state.network_properties).map((key) => (<tr key={key}><td>{key}</td><td>{this.state.network_properties[key]}</td></tr>))}
              </tbody>
            </Table>
          </Col>
          <Col xs={6}>
            <Table bordered={true} size="sm">
              <thead>
                <tr>
                  <th>Network statistics</th>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.state.network_statistics).map((key) => (<tr key={key}><td>{key}</td><td>{this.state.network_statistics[key]}</td></tr>))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
