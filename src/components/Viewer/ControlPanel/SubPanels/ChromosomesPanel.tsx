import * as React from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Label } from "reactstrap";

interface IChromosomeProps {
  onChromosomeChange: (feature: string) => void;
  onTextChange: (gene: string) => void;
  chromosome: string;
  organism: string;
}

export class ChromosomesPanel extends React.Component<IChromosomeProps, any> {

  private BASE_URL = "http://CRCT2107:8080/data/";

  constructor(props: any) {
    super(props);
    this.state = { dropdownOpen: false, chromosomes: [""] };
  }

  public onChromosomeChange = (event: React.MouseEvent<HTMLElement>) => {
    const selector = event.target as HTMLInputElement;
    this.props.onChromosomeChange(selector.value);
    this.props.onTextChange("");
  }

  public toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  public componentDidUpdate = () => {
    if (this.state.chromosomes[0] == "") {
      this.fetchAsyncJson(this.BASE_URL + this.props.organism + "/" + "chromosomes.json").then((json) => {
        this.setState({ chromosomes: json });
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
      setTimeout(() => {
        alert("There are no suggestions to be downloaded");
      }, 0);
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
      marginBottom: "5px",
      fontSize: "small",
    };

    return (
      <Form style={margin_style}>
        <FormGroup className="text-center">
          <Label for="Select">Chromosomes</Label>
          <br />
          <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret={true} style={{ fontSize: "small" }}>
              {this.props.chromosome}
            </DropdownToggle>
            <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
              {this.state.chromosomes.slice(0, -1).map((chromosome: string) => <div key={chromosome}><DropdownItem value={chromosome} onClick={this.onChromosomeChange}>{chromosome}</DropdownItem><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
              {this.state.chromosomes.slice(-1).map((chromosome: string) => <DropdownItem key={chromosome} value={chromosome} onClick={this.onChromosomeChange}>{chromosome}</DropdownItem>)}
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
