import * as cytoscape from "cytoscape";
import * as React from "react";
import { Modal, ModalBody } from "reactstrap";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";

export class Cytoscape_manager extends React.Component<any, any> {

  private BASE_URL = "http://localhost:8080/data/";
  private cache: Map<string, any> = new Map();
  private URL = {
    chromosome: this.BASE_URL + "chromosomes/chr",
    search: "http://127.0.0.1:5000/?features=true&search=",
  };
  private left_container_id = "left_container_id";
  private right_container_id = "right_container_id";
  private left_cy_network: any;
  private right_cy_network: any;
  private reuse_message: boolean;
  private clean_right_view: boolean = true;
  private old_neighbourhood: any;
  private chromosome_color: any = { 1: "#0000ff", 2: "#4906f4", 3: "#650eea", 4: "#7a16df", 5: "#8a1ed5", 6: "#9826ca", 7: "#a32dc0", 8: "#ae34b6", 9: "#b83bab", 10: "#c042a1", 11: "#c84996", 12: "#cf508c", 13: "#d55781", 14: "#dc5e76", 15: "#e1646b", 16: "#e76a60", 17: "#ed7153", 18: "#f27846", 19: "#f67f38", X: "#fb8624", Y: "#ff8c00" };

  constructor(props: any) {
    super(props);
    this.reuse_message = false;
    this.state = {
      cytoscape_loading: true, loading_message: "",
      left_network: undefined, right_network: undefined, left_title: "",
      right_title: "", show_tooltip: false, tooltip_text: "",
      tooltip_x: 0, tooltip_y: 0,
    };
  }

  public onDownloadChange = (download: string) => {
    this.props.onDownloadChange(download);
  }

  public chromosomePath(chromosome: string): string {
    return this.URL.chromosome + chromosome + ".json";
  }
  public searchPath(search: string): string {
    return this.URL.search + search;
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url).then((response) => {
      const json = response.json();
      return json;
    }).catch((_err) => {
      this.setState({ cytoscape_loading: false, right_title: "" });
      if (this.props.search !== "") {
        this.cache.delete(this.props.search);
      }
      // Let the loading message disappear thanks to delay the alert message with a zero time out
      setTimeout(() => {
        alert('There are not any node which matches with the search petition: "' + this.props.search + '"');
      }, 0);
    });
  }

  public buildNetwork(cy_json_elements: any, cytoscape_container_id: string) {
    const cy = cytoscape({

      container: document.getElementById(cytoscape_container_id), // container to render in

      elements: cy_json_elements,

      style: [ // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "mapData(" + this.props.feature + ", 0, 1, #ccc, pink)",
            "label": "data(curated_gene_name)",
            "color": "black",
            "font-size": 9.5,
            "text-valign": "center",
            "text-halign": "center",
            "width": 35,
            "height": 35,
            "border-color": this.chromosome_color[this.props.chromosome],
            "border-width": 3,
          },
        },
        {
          selector: 'node[type = "bait"]',
          style: {
            shape: "ellipse",
          },
        },
        {
          selector: 'node[type = "oe"]',
          style: {
            shape: "rectangle",
          },
        },
        {
          selector: "edge",
          style: {
            "width": 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
          },
        },
      ],

      layout: {
        name: "preset",
        animate: false,
        stop: () => {
          if (cy_json_elements !== undefined) {
            this.setState({ cytoscape_loading: false });
          }
        },
      },
    });
    cy.on("tap", "node", (event: any) => {
      const node = event.target;
      const node_internal_id = node.data("chr") + "_" + node.data("start");
      const node_real_id = node_internal_id + "-" + node.data("end");
      let message = "Search ";
      const node_name = node.data("curated_gene_name");
      if (node_name != "") {
        message += node_name;
        this.setState({ right_title: node_name });
      } else {
        const node_message = node_real_id.replace("_", ":");
        this.setState({ right_title: node_message });
        message += "by id " + node_message;
      }
      this.reuse_message = true;
      this.setState({ loading_message: message });
      this.props.onSearchChange(node_internal_id);
    });
    cy.on("mouseover", "node", (event: any) => {
      const node = event.target;
      const node_id = node.data("chr") + ":" + node.data("start") + "-" + node.data("end");
      const x = event.originalEvent.clientX;
      const y = event.originalEvent.clientY;
      this.setState({ show_tooltip: true, tooltip_text: node_id, tooltip_x: x + 15, tooltip_y: y - 10 });
    });
    cy.on("mouseout", "node", () => {
      this.setState({ show_tooltip: false });
    });
    return cy;
  }

  public componentDidMount() {
    // Load first chromosome in left view
    // Right view empty
    setTimeout(() => {
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message, left_title: message });
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);

      this.clean_right_view = true;
      const cy_json_elements = this.fetchAsyncJson(url);
      this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
      this.left_cy_network.on("layoutstop", (event: any) => {
        event.cy.style()
          .selector("node")
          .style({
            width: (ele: any) => 20 + 1.5 * ele.data("total_degree"),
            height: (ele: any) => 20 + 1.5 * ele.data("total_degree"),
          }).update();
      });
      this.cache.set(this.props.chromosome, this.left_cy_network);
      this.right_cy_network = this.buildNetwork(undefined, this.right_container_id);
    }, 500);
  }

  public componentDidUpdate(prevProps: any) {
    // If chromosome change, update left view and delete right view
    if (this.props.chromosome !== prevProps.chromosome) {
      this.setState({ cytoscape_loading: true, show_tooltip: false });
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message, left_title: message });

      setTimeout(() => {
        if (this.cache.has(this.props.chromosome)) {
          const cy = this.cache.get(this.props.chromosome);
          this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
          this.cache.set(this.props.chromosome, this.left_cy_network);
        }
        this.left_cy_network.on("layoutstop", (event: any) => {
          event.cy.style()
            .selector("node")
            .style({
              width: (ele: any) => 20 + 1.5 * ele.data("total_degree"),
              height: (ele: any) => 20 + 1.5 * ele.data("total_degree"),
            }).update();
        });
        // Clean right view only if we select explictly a chromosome
        if (this.clean_right_view) {
          this.right_cy_network.elements().remove();
          this.setState({ right_title: "Search view" });
        } else {
          this.clean_right_view = true;
          this.left_cy_network.on("layoutstop", (event: any) => {
            const left_node = event.cy.nodes().filter((node: any) => this.checkNode(node, this.state.right_title))[0];
            if (left_node) {
              const neighbourhood = left_node.closedNeighbourhood();
              event.cy.fit(neighbourhood);
              neighbourhood.style({
                "line-color": "gold",
                "border-color": "gold",
              });
              this.old_neighbourhood = neighbourhood;
            } else {
              this.right_cy_network.elements().remove();
              this.setState({ right_title: "Search view" });
              this.clean_right_view = true;
            }
          });
        }
      }, 500);

      // If search change, update right view and change to the searched node chromosome
    } else if ((this.props.search !== prevProps.search) && this.props.search !== "") {
      this.setState({ cytoscape_loading: true, show_tooltip: false });
      this.clean_right_view = false;
      const search = this.props.search.toString().toLowerCase();
      const url = this.searchPath(search);
      if (!this.reuse_message) {
        const message = "Search " + this.props.search;
        this.setState({ loading_message: message, right_title: this.props.search });
      } else {
        this.reuse_message = false;
      }

      setTimeout(() => {
        if (this.cache.has(search)) {
          const cy = this.cache.get(search);
          this.right_cy_network = this.buildNetwork(cy.elements().jsons(), this.right_container_id);

        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.right_cy_network = this.buildNetwork(cy_json_elements, this.right_container_id);
          this.cache.set(search, this.right_cy_network);
        }

        this.right_cy_network.one("layoutstop", (event: any) => {
          // Define temporal min and max
          let max = Math.max(event.cy.nodes().data("total_degree"));
          let min = max;

          event.cy.nodes().forEach((node: any) => {
            const total_degree = node.data("total_degree");
            if (max < total_degree) {
              max = total_degree;
            }
            if (min > total_degree) {
              min = total_degree;
            }
          });

          const opacityStyle = (ele: any) => {
            const opacity = (ele.data("total_degree") - min) / (max - min);
            if (opacity <= 0.3) {
              return 0.3;
            } else {
              return opacity;
            }
          };

          event.cy.style()
            .selector("node")
            .style({
              "width": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "height": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "border-color": (ele: any) => this.chromosome_color[ele.data("chr")],
              // normalize total_degree to 0-1 range but never 0
              "border-opacity": opacityStyle,
              "background-opacity": opacityStyle,
            }).update();
          const right_node = this.right_cy_network.nodes().filter((node: any) => this.checkNode(node, search))[0];
          const searched_chromosome = right_node.data("chr");
          // Force color the neighbourhood when the chromosome is the same
          if (this.props.chromosome === searched_chromosome) {
            const left_node = this.left_cy_network.nodes().filter((node: any) => this.checkNode(node, this.state.right_title))[0];
            const neighbourhood = left_node.closedNeighbourhood();
            this.left_cy_network.fit(neighbourhood);
            // Clean neighbourhood first
            if (this.old_neighbourhood) {
              this.old_neighbourhood.style({
                "line-color": "#ccc",
                "border-color": this.chromosome_color[this.props.chromosome],
              });
            }
            neighbourhood.style({
              "line-color": "gold",
              "border-color": "gold",
            });
            this.old_neighbourhood = neighbourhood;
          } else {
            this.props.onChromosomeChange(searched_chromosome);
          }
        });
      }, 500);

    } else if ((this.props.feature !== prevProps.feature) && this.props.feature !== "") {
      this.setState({ cytoscape_loading: false });

      const updateFeatures = (cy_network: any) => {
        cy_network.style()
          .selector("node")
          .style({
            "background-color": "mapData(" + this.props.feature + ", 0, 1, #ccc, pink)",
          })
          .update();
      };
      // If feature change update both views
      updateFeatures(this.left_cy_network);

      if (this.right_cy_network !== undefined) {
        updateFeatures(this.right_cy_network);
      }
    }
  }

  public render() {
    return (
      <div className="row">
        <Modal isOpen={this.state.cytoscape_loading} centered={true} className="text-center">
          <ModalBody>
            Be patient please
            <br />
            Rendering {this.state.loading_message}
            <div className="spinner"></div>
          </ModalBody>
        </Modal>
        <div className="col-sm-6" style={{ padding: "0px", paddingLeft: "10px" }}>
          <h3 className="text-center">{this.state.left_title ? this.state.left_title : "Chromosome " + this.props.chromosome}</h3>
          <Cytoscape_container cytoscape_container_id={this.left_container_id} />
        </div>
        <div className="col-sm-6" style={{ padding: "0px" }}>
          <h3 className="text-center">{this.state.right_title ? this.state.right_title : "Search view"}</h3>
          <Cytoscape_container cytoscape_container_id={this.right_container_id} />
        </div>
        <div style={{ display: this.state.show_tooltip ? "block" : "none", left: this.state.tooltip_x, top: this.state.tooltip_y, position: "fixed", border: "#aaa", borderRadius: "5px", borderStyle: "solid", borderWidth: "2px", backgroundColor: "white" }} >{this.state.tooltip_text}</div>
      </div>
    );
  }

  private checkNode = (node: any, search: string) => {
    const node_id = node.data("chr") + "_" + node.data("start");
    const search_id = search.split("-")[0].replace(":", "_");
    if (node.data("curated_gene_name") === search || node_id.toLowerCase().startsWith(search_id)) {
      return node;
    }
    return null;
  }
}
