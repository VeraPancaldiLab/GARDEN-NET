import * as cytoscape from "cytoscape";
import * as React from "react";
import { Modal, ModalBody } from "reactstrap";
import Tippy from "tippy.js";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";

export class Cytoscape_manager extends React.Component<any, any> {

  private BASE_URL = "http://CRCT2107:8080/data/";
  private SEARCH_URL = "http://CRCT2107:5000/";
  private cache: Map<string, any> = new Map();
  private left_container_id = "left_container_id";
  private right_container_id = "right_container_id";
  private left_cy_network: any;
  private right_cy_network: any;
  private reuse_message: boolean;
  private clean_right_view: boolean = true;
  private old_neighbourhood: any;
  private tooltip_tippy: any;
  private initial_rendering = true;
  // http://www.perbang.dk/rgbgradient/
  private chromosome_color: any = { 1: "#F90300", 2: "#FA2E00", 3: "#FA5A00", 4: "#FA8501", 5: "#FAB001", 6: "#FBDC02", 7: "#EFFB02", 8: "#C4FB03", 9: "#9AFB03", 10: "#6FFB03", 11: "#45FC04", 12: "#1AFC04", 13: "#05FC19", 14: "#05FC45", 15: "#06FD70", 16: "#06FD9B", 17: "#06FDC5", 18: "#07FDF0", 19: "#07E0FD", 20: "#08B6FE", 21: "#088BFE", 22: "#0961FE", X: "#0937FE", Y: "#090EFF", MT: "#FFFFFF" };

  constructor(props: any) {
    super(props);
    this.reuse_message = false;

    this.state = {
      cytoscape_loading: false, loading_message: "",
      left_network: undefined, right_network: undefined, left_title: "",
      right_title: "", neighbourhood_node_ids: [],
    };
  }

  public onDownloadChange = (download: string) => {
    this.props.onDownloadChange(download);
  }

  public chromosomePath(chromosome: string): string {
    return this.BASE_URL + this.props.organism + "/" + this.props.cell_type + "/" + "chromosomes" + "/" + "chr" + chromosome + ".json";
  }
  public searchPath(search: string): string {
    return this.SEARCH_URL + "?" + "organism=" + this.props.organism + "&" + "cell_type=" + this.props.cell_type + "&" + "search=" + search;
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

  public buildNetwork = (cy_json_elements: any, cytoscape_container_id: string) => {
    const cy = cytoscape({

      container: document.getElementById(cytoscape_container_id), // container to render in

      elements: cy_json_elements,

      style: [ // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "label": (ele: any) => {
              let label = ele.data("names").split(" ").slice(0, 3).join("\n");
              if (ele.data("names").split(" ").length > 3) {
                label += "\n...";
              }
              return label;
            },
            "text-wrap": "wrap",
            "color": "black",
            "font-size": 9.5,
            "text-valign": "center",
            "text-halign": "center",
            "width": 20,
            "height": 20,
            "border-color": (ele: any) => this.chromosome_color[ele.data("chr")],
            "border-width": 3,
            "background-color": "#ccc",
          },
        },
        {
          selector: 'node[type = "P"]',
          style: {
            shape: "ellipse",
          },
        },
        {
          selector: 'node[type = "O"]',
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
      this.setState({ neighbourhood_node_ids: [node_internal_id] });
      let node_real_id = node_internal_id + "-" + node.data("end");
      node_real_id = node_real_id.replace("_", ":");
      let message = "Search ";
      const node_name = node.data("names");
      if (node_name != "") {
        let label = node_name.split(" ").slice(0, 2).join(" ");
        if (node_name.split(" ").length > 2) {
          label += "...";
        }
        message += label;
        this.setState({ right_title: label + " (" + node_real_id + ")" });
      } else {
        this.setState({ right_title: node_real_id });
        message += "by id " + node_real_id;
      }
      this.reuse_message = true;
      this.setState({ loading_message: message });
      this.props.onSearchChange(node_internal_id);
    });
    cy.on("mouseover", "node", (event: any) => {
      const node = event.target;
      const node_id = node.data("chr") + ":" + node.data("start") + "-" + node.data("end");
      const ref = node.popperRef(); // used only for positioning
      const gene_name = node.data("names");
      const tooltip_content = (gene_name.length !== 0 ? "<b>" + gene_name + "</b><br/>" : "") + node_id;

      // using tippy ^4.0.0
      this.tooltip_tippy = Tippy(ref, { // tippy options:
        content: () => {
          const content = document.createElement("div");
          content.innerHTML = tooltip_content;
          return content;
        },
        arrow: true,
        theme: "light-border",
        trigger: "manual",
      });
      this.tooltip_tippy.show();
    });
    cy.on("mouseout", "node", () => {
      this.tooltip_tippy.hide();
    });
    return cy;
  }

  public componentDidUpdate(prevProps: any) {
    // If chromosome change, update left view and delete right view
    // Force to update chrosome view if this the first render caused by react router props initialization
    if (this.initial_rendering || this.props.chromosome !== prevProps.chromosome) {
      if (this.initial_rendering) {
        this.right_cy_network = this.buildNetwork(undefined, this.right_container_id);
        this.initial_rendering = false;
      }
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);
      let message = "";
      if (this.props.chromosome != "PP") {
        message = "Chromosome " + this.props.chromosome;
      } else {
        message = "Promoter-Promoter only";
      }
      this.setState({ cytoscape_loading: true, loading_message: message, left_title: message });
      const updateChromosomeStyle = (cy: any) => {
        let dict_style = {
          height: (ele: any) => 20 + 1 * ele.data("total_degree"),
          width: (ele: any) => 20 + 1 * ele.data("total_degree"),
        };
        const features_style = {
          backgroundColor: (ele: any) => {
            if (ele.data(this.props.feature) == 0) {
              return "#ccc";
            } else {
              return "pink";
            }
          },
        };

        if (this.props.feature != "Choose" && this.props.feature != "") {
          dict_style = { ...dict_style, ...features_style };
        }
        cy.style()
          .selector("node")
          .style(dict_style).update();
      };
      const updateNeighbourhood = (cy: any) => {
        if (this.state.neighbourhood_node_ids.length != 0) {
          const left_nodes = this.left_cy_network.nodes().filter((node: any) => { const node_id = node.data("chr") + "_" + node.data("start"); return this.state.neighbourhood_node_ids.includes(node_id.toLowerCase()); });

          if (left_nodes.length != 0) {
            const all_left_nodes_together = cy.collection();
            for (let i = 0; i < left_nodes.length; i++) {
              all_left_nodes_together.merge(left_nodes[i]);
            }
            const neighbourhood = all_left_nodes_together.closedNeighbourhood();
            cy.fit(neighbourhood);
            cy.elements().style({
              opacity: 0.3,
            });
            neighbourhood.nodes().style({
              opacity: 1,
            });
            neighbourhood.edges().style({
              opacity: 1,
            });
            this.old_neighbourhood = neighbourhood;
          } else {
            this.right_cy_network.elements().remove();
            this.setState({ right_title: "Search view", neighbourhood_node_ids: [] });
            this.clean_right_view = true;
          }
        }
      };
      setTimeout(() => {
        if (this.cache.has(this.props.chromosome)) {
          const cy = this.cache.get(this.props.chromosome);
          this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
          updateChromosomeStyle(this.left_cy_network);
          updateNeighbourhood(this.left_cy_network);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
          this.cache.set(this.props.chromosome, this.left_cy_network);
          this.left_cy_network.on("layoutstop", (event: any) => {
            updateChromosomeStyle(event.cy);
            updateNeighbourhood(event.cy);
          });
        }
        // Clean right view only if we select explictly a chromosome
        if (this.clean_right_view) {
          this.right_cy_network.elements().remove();
          this.setState({ right_title: "Search view", neighbourhood_node_ids: [] });
        } else {
          this.clean_right_view = true;
        }

      }, 500);

      // If search change, update right view and change to the searched node chromosome
    } else if ((this.props.search !== prevProps.search) && this.props.search !== "") {
      this.setState({ cytoscape_loading: true });
      this.clean_right_view = false;
      const search = this.props.search.toString().toLowerCase();
      const url = this.searchPath(search);
      if (!this.reuse_message) {
        const message = "Search " + this.props.search;
        this.setState({ loading_message: message });
      } else {
        this.reuse_message = false;
      }
      const updateSearchStyle = (cy: any) => {
        const min = cy.nodes().min((node: any) => node.data("total_degree")).value;
        const max = cy.nodes().max((node: any) => node.data("total_degree")).value;

        const opacityStyle = (ele: any) => {
          let opacity = (ele.data("total_degree") - min) / (max - min);

          if (isNaN(opacity)) {
            opacity = 0;
          }

          if (opacity <= 0.3) {
            return 0.3;
          } else {
            return opacity;
          }
        };

        let dict_style = {
          "height": (ele: any) => 20 + 1 * ele.data("degree"),
          "width": (ele: any) => 20 + 1 * ele.data("degree"),
          "border-color": (ele: any) => this.chromosome_color[ele.data("chr")],
          // normalize total_degree to 0-1 range but never 0
          "border-opacity": opacityStyle,
          "background-opacity": opacityStyle,
        };

        const features_style = {
          backgroundColor: (ele: any) => {
            if (ele.data(this.props.feature) == 0) {
              return "#ccc";
            } else {
              return "pink";
            }
          },
        };

        if (this.props.feature != "Choose" && this.props.feature != "") {
          dict_style = { ...dict_style, ...features_style };
        }

        cy.style()
          .selector("node")
          .style(dict_style).update();

        const right_nodes = this.right_cy_network.nodes().filter((node: any) => node.data("searched") == "true");

        if (right_nodes.length == 0) {
          // This node searched is not found so exit inmmediately without crash
          return;
        }

        // Use the first left_node as reference

        const node_name = right_nodes[0].data("names");
        const node_range = right_nodes[0].data("chr") + ":" + right_nodes[0].data("start") + "-" + right_nodes[0].data("end");
        let node_complete_name = node_range;
        if (node_name != "") {
          let label = node_name.split(" ").slice(0, 2).join(" ");
          if (node_name.split(" ").length > 2) {
            label += "...";
          }
          node_complete_name = label;
          node_complete_name += " (" + node_range + ")";
        }

        this.setState({ right_title: node_complete_name });

        const nodes_internal_ids = [];
        for (let i = 0; i < right_nodes.length; i++) {
          nodes_internal_ids.push(right_nodes[i].data("chr") + "_" + right_nodes[i].data("start"));
        }
        this.setState({ neighbourhood_node_ids: nodes_internal_ids });

        const searched_chromosome = right_nodes[0].data("chr");
        // Force color the neighbourhood when the chromosome is the same
        if (this.props.chromosome === searched_chromosome || this.props.chromosome === "PP") {
          const left_nodes = this.left_cy_network.nodes().filter((node: any) => { const node_id = node.data("chr") + "_" + node.data("start"); return this.state.neighbourhood_node_ids.includes(node_id.toLowerCase()); });

          if (left_nodes.length != 0) {
            const all_left_nodes_together = left_nodes[0];
            for (let i = 1; i < left_nodes.length; i++) {
              all_left_nodes_together.merge(left_nodes[i]);
            }
            const neighbourhood = all_left_nodes_together.closedNeighbourhood();
            this.left_cy_network.fit(neighbourhood);
            // Clean neighbourhood first
            if (this.old_neighbourhood) {
              this.left_cy_network.elements().style({
                opacity: 1,
              });
            }
            this.left_cy_network.elements().style({
              opacity: 0.3,
            });
            neighbourhood.nodes().style({
              opacity: 1,
            });
            neighbourhood.edges().style({
              opacity: 1,
            });
            this.old_neighbourhood = neighbourhood;
            // If there is not left_node and we are showing the PP network, we know that is a other end
          } else if (this.props.chromosome == "PP") {
            this.props.onChromosomeChange(searched_chromosome);
          }
        } else {
          this.props.onChromosomeChange(searched_chromosome);
        }
      };

      setTimeout(() => {
        if (this.cache.has(search)) {
          const cy = this.cache.get(search);
          this.right_cy_network = this.buildNetwork(cy.elements().jsons(), this.right_container_id);
          updateSearchStyle(this.right_cy_network);

        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.right_cy_network = this.buildNetwork(cy_json_elements, this.right_container_id);
          this.cache.set(search, this.right_cy_network);
          this.right_cy_network.one("layoutstop", (event: any) => {
            updateSearchStyle(event.cy);
          });
        }

      }, 500);

    } else if (this.props.feature !== prevProps.feature && this.props.feature !== "Choose" && this.props.feature !== "") {

      const updateFeatures = (cy_network: any) => {
        cy_network.style()
          .selector("node")
          .style({
            "background-color": (ele: any) => {
              if (ele.data(this.props.feature) == 0) {
                return "#ccc";
              } else {
                return "pink";
              }
            },
          })
          .update();
      };
      // If feature change update both views
      // If the chromosome is not ready for applying the features don't do nothing
      if (this.left_cy_network !== undefined) {
        updateFeatures(this.left_cy_network);
      }

      if (this.right_cy_network !== undefined) {
        updateFeatures(this.right_cy_network);
      }
    }
  }

  public render() {
    // When the PP network is showed the selected chromosome is PP
    // So we need to extract the right chromosome from the range
    let chromosome_in_right_title = "MT"; // MT is the black chromosome
    if (this.state.right_title) {
      const match = this.state.right_title.match(/([0-9XY]+):\d+-\d+/);
      if (match) {
        chromosome_in_right_title = match[1];
      }
    }

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
          <h3 className="text-center" style={{ color: this.chromosome_color[this.props.chromosome] }}>{this.state.left_title ? this.state.left_title : "Chromosome " + this.props.chromosome}</h3>
          <Cytoscape_container cytoscape_container_id={this.left_container_id} />
        </div>
        <div className="col-sm-6" style={{ padding: "0px" }}>
          <h3 className="text-center" style={{ color: this.chromosome_color[chromosome_in_right_title] }}>{this.state.right_title ? this.state.right_title : "Search view"}</h3>
          <Cytoscape_container cytoscape_container_id={this.right_container_id} />
        </div>
      </div>
    );
  }
}
