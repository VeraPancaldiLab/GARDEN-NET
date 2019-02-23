import * as React from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Label } from "reactstrap";

export class FeaturesPanel extends React.Component<any, any> {

  private BASE_URL = "http://localhost:8080/data/";

  constructor(props: any) {
    super(props);
    this.state = { dropdownOpen: false, features: [""] };
  }

  public componentDidUpdate = () => {
    if (this.state.features[0] == "") {
      this.fetchAsyncJson(this.BASE_URL + this.props.organism + "/" + this.props.cell_type + "/" + "features.json").then((json) => {
        this.setState({features: json});
        this.props.onFeatureChange(json[0]);
      });
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
        this.setState({features: null});
    });
  }

  public onFeatureChange = (event: any) => {
    this.props.onFeatureChange(event.target.value);
  }

  public toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      paddingLeft: "5px",
      paddingRight: "5px",
      marginTop: "15px",
    };

    return (
      <div style={{ display: (this.state.features.length == 0 ? "none" : "block") }}>
        <Form className="text-center" style={margin_style}>
          <FormGroup className="text-center">
            <Label for="Select">Features</Label>
            <br />
            <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle style={{ color: "black", backgroundColor: "white" }} caret={true}>
                {this.props.feature}
              </DropdownToggle>
              <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
                {this.state.features.slice(0, -1).map((feature: string) => <div key={feature}><DropdownItem value={feature} onClick={this.onFeatureChange}>{feature}</DropdownItem><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
                {this.state.features.slice(-1).map((feature: string) => <div key={feature}><DropdownItem value={feature} onClick={this.onFeatureChange}>{feature}</DropdownItem></div>)}
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
