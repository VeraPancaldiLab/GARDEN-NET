import * as React from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Label
} from "reactstrap";

export class FeaturesPanel extends React.Component<any, any> {

  private BASE_URL = "https://pancaldi.bsc.es/garden-net/data/";

  constructor(props: any) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  // react-redux v7
  public componentDidMount() {
    this.forceUpdate();
  }

  public componentDidUpdate = () => {
    if (this.props.features_list[0] == "") {
      this.fetchAsyncJson(
        this.BASE_URL +
          this.props.organism +
          "/" +
          this.props.cell_type +
          "/" +
          "features.json"
      ).then(json => {
        this.props.onFeatureChange(json[0]);
        this.props.onFeaturesListChange(json);
      });
    }
  };

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url)
      .then(response => {
        const json = response.json();
        return json;
      })
      .catch(_err => {
        this.props.onFeaturesListChange(null);
      });
  }

  public onFeatureChange = (event: any) => {
    this.props.onFeatureChange(event.target.value);
  };

  public toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      paddingLeft: "5px",
      paddingRight: "5px",
      fontSize: "small"
    };

    return (
      <div
        style={{
          display: this.props.features_list.length == 0 ? "none" : "block"
        }}
      >
        <Form className="text-center" style={margin_style}>
          <FormGroup className="text-center">
            <Label for="Select">
              <b>Features</b>
            </Label>
            <br />
            <ButtonDropdown
              style={{ display: "grid" }}
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "small"
                }}
                caret={true}
              >
                {this.props.feature}
              </DropdownToggle>
              <DropdownMenu
                className="text-center container-fluid"
                style={{
                  height: "auto",
                  maxHeight: "200px",
                  overflowX: "hidden"
                }}
              >
                {this.props.features_list
                  .slice(0, -1)
                  .map((feature: string) => (
                    <div key={feature}>
                      <DropdownItem
                        value={feature}
                        onClick={this.onFeatureChange}
                      >
                        {feature}
                      </DropdownItem>
                      <DropdownItem style={{ margin: 0 }} divider={true} />
                    </div>
                  ))}
                {this.props.features_list.slice(-1).map((feature: string) => (
                  <div key={feature}>
                    <DropdownItem
                      value={feature}
                      onClick={this.onFeatureChange}
                    >
                      {feature}
                    </DropdownItem>
                  </div>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
