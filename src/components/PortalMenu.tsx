import * as React from "react";
import { Link } from "react-router-dom";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export class PortalMenu extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      dropdownOpen_organism: false,
      dropdownOpen_cell_type: false,
      organism: "Choose",
    };
  }

  public toggle_organism = () => {
    this.setState({
      dropdownOpen_organism: !this.state.dropdownOpen_organism,
    });
  }

  public toggle_cell_type = () => {
    this.setState({
      dropdownOpen_cell_type: !this.state.dropdownOpen_cell_type,
    });
  }

  public onClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = (event.target as HTMLInputElement);
    const value = target.value;
    this.setState({ organism: value });
  }

  public render() {

    const organisms = ["Homo sapiens", "Mus musculus"];

    interface ICellTypes {
      [key: string]: string[];
    }
    const cell_types: ICellTypes = {
      Choose: [""],
      Homo: ["aCD4", "EP", "Ery", "FoeT", "Mac0", "Mac1", "Mac2", "MK", "Mon", "naCD4", "nB", "nCD4", "nCD8", "Neu", "tB", "tCD4", "tCD8"],
      Mus: ["Embryonic stem cells"],
    };

    const organism_key = this.state.organism.split(" ")[0];

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            Organism
          </div>
          <div className="col">
            Cell Type
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen_organism} toggle={this.toggle_organism}>
              <DropdownToggle caret={true}>
                {this.state.organism}
              </DropdownToggle>
              <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
                {organisms.slice(0, -1).map((organism) => <div key={organism}><DropdownItem value={organism} onClick={this.onClick} className="organism">{organism}</DropdownItem><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
                {organisms.slice(-1).map((organism) => <DropdownItem key={organism} value={organism} onClick={this.onClick} className="organism">{organism}</DropdownItem>)}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="col">
            <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen_cell_type} toggle={this.toggle_cell_type} >
              <DropdownToggle disabled={this.state.organism == "Choose"} caret={true}>
                {this.state.organism == "Choose" ? "Choose an organism first" : "Choose"}
              </DropdownToggle>
              <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
                {cell_types[organism_key].slice(0, -1).map((cell_type: any) => <div key={cell_type}><Link target="_blank" to={"/Visualize/" + this.state.organism.split(" ").join("_") + "/" + cell_type.split(" ").join("_")} key={cell_type}>{cell_type}</Link><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
                {cell_types[organism_key].slice(-1).map((cell_type: any) => <Link target="_blank" to={"/Visualize/" + this.state.organism.split(" ").join("_") + "/" + cell_type.split(" ").join("_")} key={cell_type}>{cell_type}</Link>)}
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
      </div>
    );
  }
}
