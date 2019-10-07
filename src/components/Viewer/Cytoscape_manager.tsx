import cytoscape from "cytoscape";
import * as React from "react";
import {
  Button,
  ButtonDropdown,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";
import Tippy from "tippy.js";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";
import { MetadataPanelContainer } from "../../containers/MetadataPanelContainer";

// import _svg from "cytoscape-svg";
// cytoscape.use(_svg);

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
  private new_features_names: Set<string> = new Set();
  private tooltip_tippy: any;
  private initial_rendering = true;
  private initial_search = false;
  // http://www.perbang.dk/rgbgradient/
  private chromosome_color: any = {
    1: "#CC6699",
    2: "#990066",
    3: "#FF33FF",
    4: "#FF99FF",
    5: "#CC99CC",
    6: "#9933FF",
    7: "#330099",
    8: "#3333CC",
    9: "#0066FF",
    10: "#0099FF",
    11: "#3399CC",
    12: "#009999",
    13: "#006666",
    14: "#33FFCC",
    15: "#33CC99",
    16: "#33FF66",
    17: "#FFCC33",
    18: "#663300",
    19: "#993300",
    20: "#CC0000",
    21: "#CC9900",
    22: "#CC6666",
    MT: "#FFFFFF",
    X: "#66CC33",
    Y: "#666666"
  };
  constructor(props: any) {
    super(props);
    this.reuse_message = false;

    this.state = {
      chromosome_statistics_modal: false,
      cytoscape_loading: false,
      dropdownOpenLeftPicture: false,
      dropdownOpenRightPicture: false,
      left_network: undefined,
      left_title: "",
      legend_modal: false,
      loading_message: "",
      max_feature: null,
      min_feature: null,
      neighbourhood_node_ids: new Set(),
      right_network: undefined,
      right_title: "",
      search_error: false,
      search_timeout: false
    };
  }

  public chromosomePath(chromosome: string): string {
    return (
      this.BASE_URL +
      this.props.organism +
      "/" +
      this.props.cell_type +
      "/" +
      "chromosomes" +
      "/" +
      "chr" +
      chromosome +
      ".json"
    );
  }
  public searchPath(search: string): string {
    return (
      this.SEARCH_URL +
      "?" +
      "organism=" +
      this.props.organism +
      "&" +
      "cell_type=" +
      this.props.cell_type +
      "&" +
      "search=" +
      search
    );
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url)
      .then(response => {
        const json = response.json();
        if (response.status !== 200) {
          if (response.status === 404) {
            this.setState({ search_error: true });
          } else if (response.status === 408) {
            this.setState({ search_timeout: true });
          }
          if (this.props.search !== "") {
            this.cache.delete(this.props.search);
          }
          this.setState({ cytoscape_loading: false, right_title: "" });
        }
        return json;
      })
      .catch(() => {}); // Silence the broken json
  }

  public buildNetwork = (
    cy_json_elements: any,
    cytoscape_container_id: string
  ) => {
    const cytoscape_definition_data = {
      container: document.getElementById(cytoscape_container_id), // container to render in

      elements: cy_json_elements,

      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#ccc",
            "border-color": (ele: any) =>
              this.chromosome_color[ele.data("chr")],
            "border-width": 3,
            color: "black",
            "font-size": 9.5,
            height: 20,
            label: (ele: any) => {
              let label = ele
                .data("names")
                .split(" ")
                .slice(0, 3)
                .join("\n");
              if (ele.data("names").split(" ").length > 3) {
                label += "\n...";
              }
              return label;
            },
            "text-halign": "center",
            "text-valign": "center",
            "text-wrap": "wrap",
            width: 20
          }
        },
        {
          selector: 'node[type = "P"]',
          style: {
            shape: "ellipse"
          }
        },
        {
          selector: 'node[type = "O"]',
          style: {
            shape: "rectangle"
          }
        },
        {
          selector: "edge",
          style: {
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            width: 3
          }
        }
      ],

      layout: {
        animate: false,
        name: "preset",
        stop: () => {
          if (cy_json_elements !== undefined) {
            this.setState({ cytoscape_loading: false });
          }
        }
      }
    };

    // Fix TS2345 in TypeScript 3.5.1
    const cy = cytoscape(cytoscape_definition_data);

    cy.on("click", "node", (event: any) => {
      const node = event.target;
      const node_real_range =
        node.data("chr") + ":" + node.data("start") + "-" + node.data("end");
      const WASHUP_URL_BASE =
        "http://epigenomegateway.wustl.edu/browser/?genome=";
      const organism_map: any = { Homo_sapiens: "hg19", Mus_musculus: "mm9" };
      const node_url =
        WASHUP_URL_BASE +
        organism_map[this.props.organism] +
        "&position=chr" +
        node_real_range;
      try {
        // your browser may block popups
        window.open(node_url);
      } catch (e) {
        // fall back on url change
        window.location.href = node_url;
      }
    });

    cy.on("cxttap", "node", (event: any) => {
      const node = event.target;
      const node_internal_id =
        node.data("chr") + "_" + node.data("start") + "_" + node.data("end");
      this.setState({ neighbourhood_node_ids: new Set([node_internal_id]) });
      const node_real_range =
        node.data("chr") + ":" + node.data("start") + "-" + node.data("end");
      let message = "Search ";
      const node_name = node.data("names");
      if (node_name !== "") {
        let label = node_name
          .split(" ")
          .slice(0, 2)
          .join(" ");
        if (node_name.split(" ").length > 2) {
          label += "...";
        }
        message += label;
        this.setState({ right_title: label + " (" + node_real_range + ")" });
      } else {
        this.setState({ right_title: node_real_range });
        message += "by id " + node_real_range;
      }
      this.reuse_message = true;
      this.setState({ loading_message: message });
      this.props.onSearchChange(node_internal_id);
    });
    cy.on("mouseover", "node", (event: any) => {
      const node = event.target;
      const node_id =
        node.data("chr") + ":" + node.data("start") + "-" + node.data("end");
      const ref = node.popperRef(); // used only for positioning
      this.setState({ current_feature_value: node.data(this.props.feature) });
      const gene_name = node.data("names");
      let intronic_region = "";
      let feature_information = "";
      const feature_value =
        Math.round(node.data(this.props.feature) * 1000) / 1000;
      if (this.props.feature !== "Choose") {
        feature_information =
          (gene_name.length !== 0 ? "<br/>" : "") +
          this.props.feature +
          ": " +
          feature_value;
        // svg rectangle is width (minus borders) is between 5 and 132 px
        const current_feature_position =
          ((this.state.current_feature_value - this.state.min_feature) /
            (this.state.max_feature - this.state.min_feature)) *
            132 +
          5;
        const features_range_color =
          `
          <div>
              ` +
          Math.round(this.state.min_feature * 100) / 100 +
          `
            <svg width="140" height="30">
              <defs>
                <linearGradient id="linealGradient1">
                  <stop offset="0%" stop-color="lightblue" />
                  <stop offset="100%" stop-color="pink" />
                </linearGradient>
              </defs>
              <rect
                x="3"
                y="3"
                rx="5"
                width="135"
                height="25"
                fill="url(#linealGradient1)"
                style="border-style: solid;stroke: #aaa; stroke-width: 3"
              />
              <line
                x1= ` +
          current_feature_position +
          `
                y1="4"
                x2= ` +
          current_feature_position +
          `
                y2="27"
                style="stroke:black;stroke-width:2"
              >
              </line>
            </svg>
              ` +
          Math.round(this.state.max_feature * 100) / 100 +
          `
          </div>
        `;
        feature_information = feature_information + features_range_color;
      }
      if (this.props.organism === "Homo_sapiens") {
        // node.data("intronic_regions") from searched neighbourhood return 1 or 0 instead "TRUE" or "FALSE"
        let intronic_regions = node.data("intronic_regions");
        if (typeof intronic_regions === "number") {
          if (intronic_regions === 1) {
            intronic_regions = "TRUE";
          } else {
            intronic_regions = "FALSE";
          }
        }
        intronic_region =
          intronic_regions.trim() === "TRUE"
            ? "" +
              (gene_name.length !== 0 || feature_information.length !== 0
                ? "<br/>"
                : "") +
              "(<b>intronic region</b>)"
            : "";
      }

      const tooltip_content =
        (gene_name.length !== 0 ? "<b>" + gene_name + "</b>" : "") +
        feature_information +
        intronic_region +
        (gene_name.length !== 0 ||
        feature_information.length !== 0 ||
        intronic_region.length !== 0
          ? "<br/>"
          : "") +
        node_id;

      // using tippy ^4.0.0
      this.tooltip_tippy = Tippy(ref, {
        // tippy options:
        arrow: true,
        content: () => {
          const content = document.createElement("div");
          content.innerHTML = tooltip_content;
          return content;
        },
        theme: "light-border",
        trigger: "manual"
      });
      this.tooltip_tippy.show();
    });
    cy.on("mouseout", "node", () => {
      this.tooltip_tippy.hide();
    });
    return cy;
  };

  // react-redux v7
  public componentDidMount() {
    this.forceUpdate();
  }

  public componentDidUpdate(prevProps: any) {
    // If chromosome change, update left view and delete right view
    // Force to update chromosome view if this the first render caused by react router props initialization
    if (
      this.initial_rendering ||
      this.props.chromosome !== prevProps.chromosome
    ) {
      if (this.initial_rendering) {
        this.right_cy_network = this.buildNetwork(
          undefined,
          this.right_container_id
        );
        this.initial_rendering = false;
        // Use reproducible search in urls so we have to force to update i
        if (this.props.search !== "") {
          this.initial_search = true;
          this.left_cy_network = this.buildNetwork(
            undefined,
            this.left_container_id
          );
          return;
        }
      }

      const url = this.chromosomePath(this.props.chromosome);
      let message = "";
      if (this.props.chromosome !== "PP") {
        message = "Chromosome " + this.props.chromosome;
      } else {
        message = "Promoter-Promoter only";
      }
      this.setState({
        cytoscape_loading: true,
        left_title: message,
        loading_message: message
      });
      const updateChromosomeStyle = (cy: any) => {
        let dict_style = {
          height: (ele: any) => 20 + 1 * ele.data("total_degree"),
          width: (ele: any) => 20 + 1 * ele.data("total_degree")
        };
        if (this.props.feature !== "Choose" && this.props.feature !== "") {
          if (this.props.feature in this.props.features_new) {
            this.addUserFeatures(cy, "name");
          }

          const min_feature = this.left_cy_network
            .nodes()
            .min((node: any) => node.data(this.props.feature)).value;
          const max_feature = this.left_cy_network
            .nodes()
            .max((node: any) => node.data(this.props.feature)).value;
          this.setState({ min_feature, max_feature });
          const features_style = {
            backgroundColor:
              "mapData(" +
              this.props.feature +
              ", " +
              min_feature +
              ", " +
              max_feature +
              ", lightblue, pink)"
          };
          dict_style = { ...dict_style, ...features_style };
        }
        cy.style()
          .selector("node")
          .style(dict_style)
          .update();
      };
      const updateNeighbourhood = (cy: any) => {
        if (this.state.neighbourhood_node_ids.size !== 0) {
          const left_nodes = this.left_cy_network
            .nodes()
            .filter((node: any) => {
              const node_id =
                node.data("chr") +
                "_" +
                node.data("start") +
                "_" +
                node.data("end");
              return this.state.neighbourhood_node_ids.has(
                node_id.toLowerCase()
              );
            });

          if (left_nodes.length !== 0) {
            const all_left_nodes_together = cy.collection();
            for (let i = 0; i < left_nodes.length; i++) {
              all_left_nodes_together.merge(left_nodes[i]);
            }
            const neighbourhood = all_left_nodes_together.closedNeighbourhood();
            cy.fit(neighbourhood);
            cy.elements().style({
              opacity: 0.3
            });
            neighbourhood.nodes().style({
              opacity: 1
            });
            neighbourhood.edges().style({
              opacity: 1
            });
            this.old_neighbourhood = neighbourhood;
          } else {
            this.right_cy_network.elements().remove();
            this.setState({
              neighbourhood_node_ids: new Set(),
              right_title: "Search view"
            });
            this.clean_right_view = true;
          }
        }
      };
      setTimeout(() => {
        if (this.cache.has(this.props.chromosome)) {
          const cy = this.cache.get(this.props.chromosome);
          this.left_cy_network = this.buildNetwork(
            cy.elements().jsons(),
            this.left_container_id
          );
          updateChromosomeStyle(this.left_cy_network);
          updateNeighbourhood(this.left_cy_network);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(
            cy_json_elements,
            this.left_container_id
          );
          this.cache.set(this.props.chromosome, this.left_cy_network);
          this.left_cy_network.on("layoutstop", (event: any) => {
            updateChromosomeStyle(event.cy);
            updateNeighbourhood(event.cy);
          });
        }
        // Clean right view only if we select explicitly a chromosome
        if (this.clean_right_view) {
          this.right_cy_network.elements().remove();
          this.setState({
            neighbourhood_node_ids: new Set(),
            right_title: "Search view"
          });
        } else {
          this.clean_right_view = true;
        }
      }, 500);

      // If search change, update right view and change to the searched node chromosome
    } else if (
      this.initial_search ||
      (this.props.search !== prevProps.search && this.props.search !== "")
    ) {
      this.initial_search = false;

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
        const min = cy.nodes().min((node: any) => node.data("total_degree"))
          .value;
        const max = cy.nodes().max((node: any) => node.data("total_degree"))
          .value;

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
          // normalize total_degree to 0-1 range but never 0
          "background-opacity": opacityStyle,
          "border-color": (ele: any) => this.chromosome_color[ele.data("chr")],
          "border-opacity": opacityStyle,
          height: (ele: any) => 20 + 1 * ele.data("degree"),
          width: (ele: any) => 20 + 1 * ele.data("degree")
        };

        if (this.props.feature !== "Choose" && this.props.feature !== "") {
          if (this.props.feature in this.props.features_new) {
            this.addUserFeatures(cy, "id");
          }
          const min_feature = this.left_cy_network
            .nodes()
            .min((node: any) => node.data(this.props.feature)).value;
          const max_feature = this.left_cy_network
            .nodes()
            .max((node: any) => node.data(this.props.feature)).value;
          this.setState({ min_feature, max_feature });
          const features_style = {
            backgroundColor:
              "mapData(" +
              this.props.feature +
              ", " +
              min_feature +
              ", " +
              max_feature +
              ", lightblue, pink)"
          };

          dict_style = { ...dict_style, ...features_style };
        }

        cy.style()
          .selector("node")
          .style(dict_style)
          .update();

        const right_nodes = this.right_cy_network
          .nodes()
          .filter((node: any) => node.data("searched") === "true");

        if (right_nodes.length === 0) {
          // This node searched is not found so exit immediately without crash
          return;
        }

        // Use the first left_node as reference

        const node_name = right_nodes[0].data("names");
        const node_range =
          right_nodes[0].data("chr") +
          ":" +
          right_nodes[0].data("start") +
          "-" +
          right_nodes[0].data("end");
        let node_complete_name = node_range;
        if (node_name !== "") {
          let label = node_name
            .split(" ")
            .slice(0, 2)
            .join(" ");
          if (node_name.split(" ").length > 2) {
            label += "...";
          }
          node_complete_name = label;
          node_complete_name += " (" + node_range + ")";
        }

        this.setState({ right_title: node_complete_name });

        const nodes_internal_ids = [];
        for (let i = 0; i < right_nodes.length; i++) {
          // Always use lowercase for X and Y chromosomes
          const node_internal_id = (
            right_nodes[i].data("chr") +
            "_" +
            right_nodes[i].data("start") +
            "_" +
            right_nodes[i].data("end")
          ).toLowerCase();
          nodes_internal_ids.push(node_internal_id);
        }
        this.setState({ neighbourhood_node_ids: new Set(nodes_internal_ids) });

        // Use bigger connected component chromosome as searched chromosome
        const bigger_connected_component_node = right_nodes.max(
          (right_node: any) => right_node.closedNeighbourhood().nodes().length
        ).ele;

        const searched_chromosome = bigger_connected_component_node.data("chr");
        // Force color the neighbourhood when the chromosome is the same
        if (
          this.props.chromosome === searched_chromosome ||
          this.props.chromosome === "PP"
        ) {
          const left_nodes = this.left_cy_network
            .nodes()
            .filter((node: any) => {
              const node_id =
                node.data("chr") +
                "_" +
                node.data("start") +
                "_" +
                node.data("end");
              return this.state.neighbourhood_node_ids.has(
                node_id.toLowerCase()
              );
            });

          if (left_nodes.length !== 0) {
            const all_left_nodes_together = left_nodes[0];
            for (let i = 1; i < left_nodes.length; i++) {
              all_left_nodes_together.merge(left_nodes[i]);
            }
            const neighbourhood = all_left_nodes_together.closedNeighbourhood();
            this.left_cy_network.fit(neighbourhood);
            // Clean neighbourhood first
            if (this.old_neighbourhood) {
              this.left_cy_network.elements().style({
                opacity: 1
              });
            }
            this.left_cy_network.elements().style({
              opacity: 0.3
            });
            neighbourhood.nodes().style({
              opacity: 1
            });
            neighbourhood.edges().style({
              opacity: 1
            });
            this.old_neighbourhood = neighbourhood;
            // If there is not left_node and we are showing the PP network, we know that is a other end
          } else if (this.props.chromosome === "PP") {
            this.props.onChromosomeChange(searched_chromosome);
          }
        } else {
          this.props.onChromosomeChange(searched_chromosome);
        }
      };

      setTimeout(() => {
        if (this.cache.has(search)) {
          const cy = this.cache.get(search);
          this.right_cy_network = this.buildNetwork(
            cy.elements().jsons(),
            this.right_container_id
          );
          updateSearchStyle(this.right_cy_network);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.right_cy_network = this.buildNetwork(
            cy_json_elements,
            this.right_container_id
          );
          this.cache.set(search, this.right_cy_network);
          this.right_cy_network.one("layoutstop", (event: any) => {
            updateSearchStyle(event.cy);
          });
        }
      }, 500);
    } else if (
      this.props.feature !== prevProps.feature &&
      this.props.feature !== "Choose" &&
      this.props.feature !== ""
    ) {
      if (this.props.feature in this.props.features_new) {
        // Load specific user feature for first time so we generate a cache with the set of all position IDs
        this.new_features_names = new Set(
          Object.keys(this.props.features_new[this.props.feature])
        );

        this.addUserFeatures(this.left_cy_network, "name");
      }

      if (
        this.right_cy_network.elements().size() !== 0 &&
        this.props.feature in this.props.features_new
      ) {
        this.addUserFeatures(this.right_cy_network, "id");
      }

      const updateFeatures = (cy_network: any) => {
        const min_feature = this.left_cy_network
          .nodes()
          .min((node: any) => node.data(this.props.feature)).value;
        const max_feature = this.left_cy_network
          .nodes()
          .max((node: any) => node.data(this.props.feature)).value;
        this.setState({ min_feature, max_feature });
        cy_network
          .style()
          .selector("node")
          .style({
            backgroundColor:
              "mapData(" +
              this.props.feature +
              ", " +
              min_feature +
              ", " +
              max_feature +
              ", lightblue, pink)"
          })
          .update();
      };
      // If feature change update both views
      // If the chromosome is not ready for applying the features don't do nothing
      if (this.left_cy_network !== undefined) {
        updateFeatures(this.left_cy_network);
      }

      if (
        this.right_cy_network !== undefined &&
        this.right_cy_network.elements().size() !== 0
      ) {
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
      <Row>
        <Modal
          isOpen={this.state.search_timeout}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b className="text-danger">Timeout</b>
          </ModalHeader>
          <ModalBody>
            {'The range searched "' +
              this.props.search +
              '" is too big to be computed on time'}
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="danger"
              onClick={() => this.setState({ search_timeout: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.search_error}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b className="text-danger">Error</b>
          </ModalHeader>
          <ModalBody>
            {'There are no nodes which matching the search petition: "' +
              this.props.search +
              '"'}
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="danger"
              onClick={() => this.setState({ search_error: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.cytoscape_loading}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b>Loading...</b>
          </ModalHeader>
          <ModalBody>
            Be patient please
            <br />
            Rendering {this.state.loading_message}
            <div className="spinner" />
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.legend_modal}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b>Legend</b>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <b>Colors as chromosome number</b>
                <img src="images/legend-colors.png" alt="legend colors" />
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <b>Shapes as fragment type</b>
              </Col>
            </Row>
            <Row>
              <Col>
                <b style={{ marginRight: "75px" }}>Promoter</b>
                <b>Other-end</b>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="images/legend-shapes.png" alt="legend shapes" />
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <b>Size as network degree</b>
                <img src="images/legend-sizes.png" alt="legend sizes" />
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <b>Node colour highlights epigenomic feature</b>
                <img src="images/legend-features.png" alt="legend features" />
                <div>
                  {this.state.min_feature == null
                    ? "min"
                    : Math.round(this.state.min_feature * 100) / 100}
                  <svg width="140" height="30">
                    <defs>
                      <linearGradient id="linealGradient1">
                        <stop offset="0%" stopColor="lightblue" />
                        <stop offset="100%" stopColor="pink" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="3"
                      y="3"
                      rx="5"
                      width="135"
                      height="25"
                      fill="url(#linealGradient1)"
                      style={{
                        borderStyle: "solid",
                        stroke: "#aaa",
                        strokeWidth: "3"
                      }}
                    />
                  </svg>
                  {this.state.max_feature == null
                    ? "max"
                    : Math.round(this.state.max_feature * 100) / 100}
                </div>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="secondary"
              onClick={() => this.setState({ legend_modal: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.chromosome_statistics_modal}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b>
              {this.props.chromosome === "PP"
                ? "Promoter-Promoter only"
                : "Chromosome " + this.props.chromosome}{" "}
              network properties
            </b>
          </ModalHeader>
          <ModalBody>
            <MetadataPanelContainer />
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              onClick={() =>
                this.setState({ chromosome_statistics_modal: false })
              }
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Col
          className="col-sm-6"
          style={{ padding: "0px", paddingLeft: "10px" }}
        >
          <h3
            className="text-center"
            style={{ color: this.chromosome_color[this.props.chromosome] }}
          >
            {this.state.left_title
              ? this.state.left_title
              : "Chromosome " + this.props.chromosome}
          </h3>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "17px"
            }}
            onClick={(event: any) =>
              this.onClickResetZoom(event, this.left_cy_network, "left")
            }
          >
            Reset zoom
          </Button>
          <ButtonDropdown
            isOpen={this.state.dropdownOpenLeftPicture}
            toggle={this.toggleLeftPicture}
          >
            <DropdownToggle
              outline={true}
              color="secondary"
              size="sm"
              style={{
                borderRadius: "2px",
                borderWidth: "2px",
                fontSize: "small",
                marginBottom: "5px",
                marginLeft: "5px"
              }}
            >
              Picture
            </DropdownToggle>
            <DropdownMenu
              onMouseLeave={this.toggleLeftPicture}
              className="text-center container-fluid"
              style={{
                width: "auto"
              }}
            >
              <DropdownItem
                onClick={(event: any) => {
                  this.onClickPNG(event, this.left_cy_network, "left");
                  this.toggleLeftPicture();
                }}
              >
                PNG
              </DropdownItem>
              <DropdownItem divider={true} />
              <DropdownItem
                onClick={(event: any) => {
                  this.onClickSVG(event, this.left_cy_network, "left");
                  this.toggleLeftPicture();
                }}
              >
                SVG
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickJSON(event, this.left_cy_network, "left")
            }
          >
            Cytoscape
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickTSVnodes(event, this.left_cy_network, "left")
            }
          >
            Genes properties
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickTSVedges(event, this.left_cy_network, "left")
            }
          >
            Edges list
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={this.onChromosomeStatistics}
          >
            Chromosome network properties
          </Button>
          <Button
            outline={true}
            color="info"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={this.onClickLegend}
          >
            Legend
          </Button>
          <Cytoscape_container
            cytoscape_container_id={this.left_container_id}
          />
        </Col>
        <Col className="col-sm-6" style={{ padding: "0px" }}>
          <h3
            className="text-center"
            style={{ color: this.chromosome_color[chromosome_in_right_title] }}
          >
            {this.state.right_title ? this.state.right_title : "Search view"}
          </h3>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "17px"
            }}
            onClick={(event: any) =>
              this.onClickResetZoom(event, this.right_cy_network, "right")
            }
          >
            Reset zoom
          </Button>
          <ButtonDropdown
            isOpen={this.state.dropdownOpenRightPicture}
            toggle={this.toggleRightPicture}
          >
            <DropdownToggle
              outline={true}
              color="secondary"
              size="sm"
              style={{
                borderRadius: "2px",
                borderWidth: "2px",
                fontSize: "small",
                marginBottom: "5px",
                marginLeft: "5px"
              }}
            >
              Picture
            </DropdownToggle>
            <DropdownMenu
              onMouseLeave={this.toggleRightPicture}
              className="text-center container-fluid"
            >
              <DropdownItem
                onClick={(event: any) => {
                  this.onClickPNG(event, this.right_cy_network, "right");
                  this.toggleRightPicture();
                }}
              >
                PNG
              </DropdownItem>
              <DropdownItem divider={true} />
              <DropdownItem
                onClick={(event: any) => {
                  this.onClickSVG(event, this.right_cy_network, "right");
                  this.toggleRightPicture();
                }}
              >
                SVG
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickJSON(event, this.right_cy_network, "right")
            }
          >
            Cytoscape
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickTSVnodes(event, this.right_cy_network, "right")
            }
          >
            Genes properties
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickTSVedges(event, this.right_cy_network, "right")
            }
          >
            Edges list
          </Button>
          <Button
            outline={true}
            color="secondary"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={(event: any) =>
              this.onClickGeneList(event, this.right_cy_network)
            }
          >
            Genes list
          </Button>
          <Button
            outline={true}
            color="info"
            size="sm"
            style={{
              borderWidth: "2px",
              fontSize: "small",
              marginBottom: "5px",
              marginLeft: "5px"
            }}
            onClick={this.onClickLegend}
          >
            Legend
          </Button>
          <Cytoscape_container
            cytoscape_container_id={this.right_container_id}
          />
        </Col>
      </Row>
    );
  }

  private onClickResetZoom = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    if (view === "left") {
      this.setState({ neighbourhood_node_ids: [] });
      this.left_cy_network.elements().style({
        opacity: 1
      });
    }
    cy.fit();
  };

  private onClickPNG = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    const png_blob = cy.png({ output: "blob", bg: "white" });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(png_blob);
    if (view === "left") {
      hiddenElement.setAttribute(
        "download",
        this.props.organism +
          "-" +
          this.props.cell_type +
          "_chr" +
          this.props.chromosome +
          ".png"
      );
    } else {
      hiddenElement.setAttribute("download", this.state.right_title + ".png");
    }
    hiddenElement.style.display = "none";
    if (view === "left" || this.right_cy_network.elements().size() !== 0) {
      hiddenElement.click();
    }
    document.body.removeChild(hiddenElement);
  };

  private onClickSVG = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    const svg_image = cy.svg({ scale: 1, full: true });
    const svg_blob = new Blob([svg_image], {
      type: "image/svg+xml;charset=utf-8"
    });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(svg_blob);
    if (view === "left") {
      hiddenElement.setAttribute(
        "download",
        this.props.organism +
          "-" +
          this.props.cell_type +
          "_chr" +
          this.props.chromosome +
          ".svg"
      );
    } else {
      hiddenElement.setAttribute("download", this.state.right_title + ".svg");
    }
    hiddenElement.style.display = "none";
    if (view === "left" || this.right_cy_network.elements().size() !== 0) {
      hiddenElement.click();
    }
    document.body.removeChild(hiddenElement);
  };

  private onClickJSON = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    const json_blob = new Blob([JSON.stringify(cy.json(), null, 2)], {
      type: "application/json"
    });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(json_blob);
    if (view === "left") {
      hiddenElement.setAttribute(
        "download",
        this.props.organism +
          "-" +
          this.props.cell_type +
          "_chr" +
          this.props.chromosome +
          ".json"
      );
    } else {
      hiddenElement.setAttribute("download", this.state.right_title + ".json");
    }
    hiddenElement.style.display = "none";
    if (view === "left" || this.right_cy_network.elements().size() !== 0) {
      hiddenElement.click();
    }
    document.body.removeChild(hiddenElement);
  };

  private onClickLegend = (event: any): any => {
    event.preventDefault();
    this.setState({ legend_modal: true });
  };

  private onClickTSVnodes = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    if (cy.nodes().size() === 0) {
      return;
    }
    const nodes = cy.nodes();
    const header = Object.keys(nodes.data()).join("\t");
    let tsv_text = header + "\n";
    for (let node_index = 0; node_index < nodes.length; node_index++) {
      const tsv_row = [];
      for (const key of Object.keys(nodes[node_index].data())) {
        tsv_row.push(nodes[node_index].data(key));
      }
      tsv_text += tsv_row.join("\t") + "\n";
    }
    const tsv_blob = new Blob([tsv_text], { type: "application/tsv" });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(tsv_blob);
    if (view === "left") {
      hiddenElement.setAttribute(
        "download",
        this.props.organism +
          "-" +
          this.props.cell_type +
          "-chr" +
          this.props.chromosome +
          ".tsv"
      );
    } else {
      hiddenElement.setAttribute("download", this.state.right_title + ".tsv");
    }
    hiddenElement.style.display = "none";
    if (view === "left" || this.right_cy_network.elements().size() !== 0) {
      hiddenElement.click();
    }
    document.body.removeChild(hiddenElement);
  };

  private onClickTSVedges = (event: any, cy: any, view: string): any => {
    event.preventDefault();
    if (cy.nodes().size() === 0) {
      return;
    }
    const edges = cy.edges();
    let tsv_text = "";
    const source_attribute = view === "left" ? "source_original" : "source";
    const target_attribute = view === "left" ? "target_original" : "target";
    for (let edge_index = 0; edge_index < edges.length; edge_index++) {
      const tsv_row = [];
      let source = edges[edge_index].data(source_attribute);
      source = "chr" + source;
      source = source.replace(/_/g, "-").replace(/-/, ":");
      tsv_row.push(source);
      let target = edges[edge_index].data(target_attribute);
      target = "chr" + target;
      target = target.replace(/_/g, "-").replace(/-/, ":");
      tsv_row.push(target);
      tsv_text += tsv_row.join("\t") + "\n";
    }
    const tsv_blob = new Blob([tsv_text], { type: "application/tsv" });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(tsv_blob);
    if (view === "left") {
      hiddenElement.setAttribute(
        "download",
        this.props.organism +
          "-" +
          this.props.cell_type +
          "-chr" +
          this.props.chromosome +
          ".tsv"
      );
    } else {
      hiddenElement.setAttribute("download", this.state.right_title + ".tsv");
    }
    hiddenElement.style.display = "none";
    if (view === "left" || this.right_cy_network.elements().size() !== 0) {
      hiddenElement.click();
    }
    document.body.removeChild(hiddenElement);
  };

  private onClickGeneList = (event: any, cy: any): any => {
    event.preventDefault();
    if (cy.nodes().size() === 0) {
      return;
    }
    const nodes = cy.nodes();
    let tsv_text = "";
    const tsv_row = new Set();
    for (let node_index = 0; node_index < nodes.length; node_index++) {
      const names = nodes[node_index].data("names").split(" ");
      if (names[0] === "") {
        continue;
      }
      names.forEach((name: string) => tsv_row.add(name));
    }
    tsv_text += Array.from(tsv_row)
      .sort()
      .join("\n");
    const tsv_blob = new Blob([tsv_text], { type: "application/text" });
    const hiddenElement = document.createElement("a");
    document.body.appendChild(hiddenElement);
    hiddenElement.href = window.URL.createObjectURL(tsv_blob);
    hiddenElement.setAttribute("download", "GeneList.txt");
    hiddenElement.style.display = "none";
    hiddenElement.click();
    document.body.removeChild(hiddenElement);
  };

  private onChromosomeStatistics = (event: any): any => {
    event.preventDefault();
    this.setState({ chromosome_statistics_modal: true });
  };

  private addUserFeatures(cy: any, name_property: string) {
    cy.batch(() => {
      cy.nodes().data(this.props.feature, 0);
      const nodes = cy.nodes().filter((ele: any) => {
        // Use precached set of position IDs
        return this.new_features_names.has(ele.data(name_property));
      });
      nodes.forEach((node: any) => {
        node.data(
          this.props.feature,
          this.props.features_new[this.props.feature][node.data(name_property)]
        );
      });
    });
  }

  private toggleLeftPicture = () => {
    this.setState({
      dropdownOpenLeftPicture: !this.state.dropdownOpenLeftPicture
    });
  };

  private toggleRightPicture = () => {
    this.setState({
      dropdownOpenRightPicture:
        !this.state.dropdownOpenRightPicture &&
        this.right_cy_network !== undefined &&
        this.right_cy_network.elements().size() !== 0
    });
  };
}
