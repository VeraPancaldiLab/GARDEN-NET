import * as React from "react";
import { Table } from "reactstrap";

export class FeaturesMetadataPanel extends React.Component<any, any> {

  private BASE_URL = "http://CRCT2107:8080/data/";

  constructor(props: any) {
    super(props);
    this.state = { dropdownOpen: false, feature_metadata: {} };
  }

  public componentDidUpdate = (prepProps: any) => {
    if (this.props.feature !== prepProps.feature && this.props.features !== "Choose") {
      if (this.props.feature in this.props.features_metadata) {
          this.setState({feature_metadata: this.props.features_metadata[this.props.feature]});
      } else {
      this.fetchAsyncJson(this.BASE_URL + this.props.organism + "/" + this.props.cell_type + "/" + "features_metadata.json").then((json) => {
        if (json.length != 0) {
          this.setState({feature_metadata: json});
        }
      });
      }
    }
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url).then((response) => {
      const json = response.json();
      return json;
    }).catch((_err) => {
       this.props.onFeaturesMetadataChange({});
    });
  }

  public toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  public render() {
    let net_statistics = null;
    let pp_statistics = null;
    let po_statistics = null;
    if (this.state.feature_metadata.net) {
      net_statistics = Object.keys(this.state.feature_metadata.net).map((key) => (<tr key={key}><td>{key}</td><td>{ key == "Random ChAs interval" ? this.state.feature_metadata.net[key][this.props.feature] :
        parseFloat(this.state.feature_metadata.net[key][this.props.feature]).toFixed(3)}</td></tr>));
      pp_statistics = Object.keys(this.state.feature_metadata.pp).map((key) => (<tr key={key}><td>{key} (PP)</td><td>{parseFloat(this.state.feature_metadata.pp[key][this.props.feature]).toFixed(3)}</td></tr>));
      po_statistics = Object.keys(this.state.feature_metadata.po).map((key) => (<tr key={key}><td>{key} (PO)</td><td>{parseFloat(this.state.feature_metadata.po[key][this.props.feature]).toFixed(3)}</td></tr>));
    }
    return (
      <div style={{ display: (this.props.feature != "Choose" ? "block" : "none"), fontSize: "85%", marginTop: "10px" }} className="text-center">
        <Table bordered={true} size="sm" style={{ fontSize: "small", marginBottom: "5px" }}>
          <thead>
            <tr>
              <th>{this.props.feature} statistics</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {net_statistics}
            {pp_statistics}
            {po_statistics}
          </tbody>
        </Table>
      </div>
    );
  }
}
