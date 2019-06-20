import * as React from "react";
import { Link } from "react-router-dom";
import { ButtonDropdown, Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";

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

    const cell_types: any = {
      Choose: {},
      Homo: { aCD4: "Activated total CD4+T cells", EP: "Endothelial precursors", Ery: "Erythroblasts", FoeT: "Fetal thymus", Mac0: "Macrophages M0", Mac1: "Macrophages M1", Mac2: "Macrophages M2", MK: "Megakaryocytes", Mon: "Monocytes", naCD4: "Non-activated total CD4+T cells", nCD4: "Naive CD4+ T cells", nCD8: "Naive CD8+ T cells", Neu: "Neutrophils", tCD4: "Total CD4+ T cells", tCD8: "Total CD8+ T cells" },
      Mus: { Embryonic_stem_cells: "Embryonic stem cells" },
    };

    const organism_key = this.state.organism.split(" ")[0];

    return (
      <div className="container">
        <Row style={{ margin: "15px" }}>
          <h3 className="text-center">Welcome to
          <br/>
          <a href="https://github.com/VeraPancaldiLab/GARDEN-NET" target="_blank">
            <img src="images/garden-net.png" width="120" height="120" alt="GARDEN-NET logo"/>
          </a>
            <br/>
            Genome ARchitecture DNA Epigenome and Nucleome - Network Exploration Tool</h3>
          <br />
          <span>
            Here you will be able to visualize chromosome conformation capture datasets as networks of interacting chromatin fragments. The published datasets available were generated with the <em>Promoter Capture HiC</em> technique, which returns contacts involving promoters.
            </span>
          <br />
          Choose your organism and cell type from the drop-down menu to visualize the corresponding network (by chromosome or genome wide when showing only promoter-promoter contacts). A selection of epigenomic features that have been mapped to the chromatin fragments will be available from the drop-down menu on the right. Select one of them to visualize chromatin fragments that have that feature and to calculate statistics relating to this feature and the 3D network.
            <br />
          <br />
          <span>
            <b>GARDEN-NET</b> uses functionality provided by the <a href="https://bitbucket.org/eraineri/chaser" target="_blank">ChAseR</a> R package to compute chromatin assortativity (<em><a href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-016-1003-3" target="_blank">Pancaldi et al. 2016</a></em>).
            </span>
          <br />
          User submitted features can also be visualized on the networks and used for the network based calculations.
          </Row>
        <Row className="text-center">
          <Col>
            Organism
            </Col>
          <Col>
            Cell Type
            </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen_organism} toggle={this.toggle_organism}>
              <DropdownToggle caret={true}>
                {this.state.organism}
              </DropdownToggle>
              <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
                {organisms.slice(0, -1).map((organism) => <div key={organism}><DropdownItem value={organism} onClick={this.onClick} className="organism">{organism}</DropdownItem><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
                {organisms.slice(-1).map((organism) => <DropdownItem key={organism} value={organism} onClick={this.onClick} className="organism">{organism}</DropdownItem>)}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
          <Col>
            <ButtonDropdown style={{ display: "grid" }} isOpen={this.state.dropdownOpen_cell_type} toggle={this.toggle_cell_type} >
              <DropdownToggle disabled={this.state.organism == "Choose"} caret={true}>
                {this.state.organism == "Choose" ? "Choose an organism first" : "Choose"}
              </DropdownToggle>
              <DropdownMenu className="text-center container-fluid" style={{ height: "auto", maxHeight: "200px", overflowX: "hidden" }}>
                {Object.keys(cell_types[organism_key]).slice(0, -1).map((cell_type_key: any) => <div key={cell_type_key}><Link target="_blank" to={"/Visualize/" + this.state.organism.split(" ").join("_") + "/" + cell_type_key} key={cell_type_key}>{cell_types[organism_key][cell_type_key]}</Link><DropdownItem style={{ margin: 0 }} divider={true} /></div>)}
                {Object.keys(cell_types[organism_key]).slice(-1).map((cell_type_key: any) => <Link target="_blank" to={"/Visualize/" + this.state.organism.split(" ").join("_") + "/" + cell_type_key} key={cell_type_key}>{cell_types[organism_key][cell_type_key]}</Link>)}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
      </div>
    );
  }
}
