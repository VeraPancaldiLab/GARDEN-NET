import * as cytoscape from "cytoscape";
import * as React from "react";
import { Modal, ModalBody } from "reactstrap";
import { Cytoscape_container } from "../../containers/CytoscapeContainer";

export class Cytoscape_manager extends React.Component<any, any> {

  private BASE_URL = "http://localhost:8080/data/";
  private cache: Map<string, any> = new Map();
  private URL = {
    chromosome: this.BASE_URL + "chromosomes/chr",
    gene: this.BASE_URL + "genes/",
    range: this.BASE_URL + "ranges/",
    search: "http://127.0.0.1:5000/?features=true&search=",
  };
  private left_container_id = "left_container_id";
  private right_container_id = "right_container_id";
  private left_cy_network: any;
  private right_cy_network: any;
  private reuse_message: boolean

  constructor(props: any) {
    super(props);
    this.reuse_message = false
    this.state = { cytoscape_loading: true, loading_message: "", left_network: undefined, right_network: undefined };
  }

  public onDownloadChange = (download: string) => {
    this.props.onDownloadChange(download);
  }

  public genePath(gene: string): string {
    return this.URL.gene + gene + ".json";
  }

  public chromosomePath(chromosome: string): string {
    return this.URL.chromosome + chromosome + ".json";
  }

  public rangePath(range: string): string {
    return this.URL.range + range + ".json";
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
      this.setState({ cytoscape_loading: false });
      if (this.props.search !== "") {
        this.cache.delete(this.props.search);
      }
      // Let the loading message disappear thanks to delay the alert message with a zero time out
      setTimeout(() => {
        alert('There are not any node which matches with the search petition: "' + this.props.search + '"');
      }, 0);
    });
  }

  public buildNetwork(cy_json_elements: any, cytoscape_container_id: string, hide_message: boolean = true) {
    const cy = cytoscape({

      container: document.getElementById(cytoscape_container_id), // container to render in

      elements: cy_json_elements,

      style: [ // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "mapData(" + this.props.feature + ", 0, 1, black, green)",
            "label": "data(curated_gene_name)",
            "color": "gold",
            "font-size": 9.5,
            "text-valign": "center",
            "text-halign": "center",
            "width": 35,
            "height": 35,
            "border-color": "#ccc",
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
          if (cy_json_elements !== undefined && hide_message) {
            this.setState({ cytoscape_loading: false });
          }
        },
      },
    });
    cy.on('tap', 'node', (event: any) => {
      const node = event.target;
      const node_real_id = node.data('chr') + '_' + node.data('start')
      let message = "Search " ;
      const node_name = node.data('curated_gene_name') 
      if (node_name != '') {
        message += node_name
      } else {
        const node_message = node_real_id.replace('_', ':')
        message += 'by id ' + node_message
      }
      this.reuse_message = true
      this.setState({ loading_message: message });
      this.props.onSearchChange(node_real_id);
    });
    return cy
  }

  public componentDidMount() {
    // Load first chromosome in left view
    // Right view empty
    setTimeout(() => {
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message });
      const cy_json_elements = this.fetchAsyncJson(url);
      this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
      this.cache.set(this.props.chromosome, this.left_cy_network);
      this.right_cy_network = this.buildNetwork(undefined, this.right_container_id);
    }, 500);
  }

  public componentDidUpdate(prevProps: any) {
    // If chromosome change, update left view and delete right view
    if ((this.props.chromosome !== prevProps.chromosome) && this.props.chromosome !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.chromosomePath(this.props.chromosome);
      // this.onDownloadChange(url);
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message });

      setTimeout(() => {
        if (this.cache.has(this.props.chromosome)) {
          const cy = this.cache.get(this.props.chromosome);
          this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
          this.cache.set(this.props.chromosome, this.left_cy_network);
        }
        // Clean right view
        this.right_cy_network.elements().remove();
      }, 500);

    } else if ((this.props.gene !== prevProps.gene) && this.props.gene !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.genePath(this.props.gene);
      const message = "Gene " + this.props.gene;
      this.setState({ loading_message: message });

      setTimeout(() => {
        if (this.cache.has(this.props.gene)) {
          const cy = this.cache.get(this.props.gene);
          this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
          this.cache.set(this.props.gene, this.left_cy_network);
        }
        // Clean right view
        this.right_cy_network.elements().remove();
      }, 500);

    } else if ((this.props.range !== prevProps.range) && this.props.range !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.rangePath(this.props.range);
      const message = "Range" + this.props.range;
      this.setState({ loading_message: message });

      setTimeout(() => {
        if (this.cache.has(this.props.range)) {
          const cy = this.cache.get(this.props.range);
          this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
          this.cache.set(this.props.range, this.left_cy_network);
        }
        // Clean right view
        this.right_cy_network.elements().remove();
      }, 500);

      // If search change, update right view and change to the searched node chromosome
    } else if ((this.props.search !== prevProps.search) && this.props.search !== "") {
      this.setState({ cytoscape_loading: true });
      const search = this.props.search.toString().toLowerCase();
      const url = this.searchPath(search);
      if (!this.reuse_message) {
        this.reuse_message = false
        const message = "Search " + this.props.search;
        this.setState({ loading_message: message });
      }
      setTimeout(() => {
        if (this.cache.has(search)) {
          const cy = this.cache.get(search);
          const hide_message = false;
          this.right_cy_network = this.buildNetwork(cy.elements().jsons(), this.right_container_id, hide_message);
          this.right_cy_network.style()
            .selector("node")
            .style({
              "width": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "height": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "border-color": "mapData(chr, 1, 21, blue, darkorange)",
              "border-width": (ele: any) => 3 + 0.5 * ele.data("total_degree"),
            }).update();
          const searched_node = this.right_cy_network.nodes().forEach(function(node: any) {
            if (node.data("curated_gene_name" === search)) {
              return node;
            }
          });

          const searched_chromosome = searched_node.data("chr");
          const message = "Chromosome " + searched_chromosome;
          this.setState({ loading_message: message });
          if (this.cache.has(searched_chromosome)) {
            const cy = this.cache.get(searched_chromosome);
            this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
          } else {

            const url = this.chromosomePath(searched_chromosome);
            const cy_json_elements = this.fetchAsyncJson(url);
            this.left_cy_network.elements().remove();
            this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
            this.cache.set(searched_chromosome, this.left_cy_network);
          }
        } else {
          const cy_json_elements = this.fetchAsyncJson(url);
          const hide_message = false;
          this.right_cy_network = this.buildNetwork(cy_json_elements, this.right_container_id, hide_message);
          this.cache.set(search, this.right_cy_network);
          this.right_cy_network.one("layoutstop", (event: any) => {
            event.cy.style()
              .selector("node")
              .style({
                "width": (ele: any) => 20 + 1.5 * ele.data("degree"),
                "height": (ele: any) => 20 + 1.5 * ele.data("degree"),
                "border-color": "mapData(chr, 1, 21, blue, darkorange)",
                "border-width": (ele: any) => 3 + 0.5 * ele.data("total_degree"),
              }).update();
            const searched_node = this.right_cy_network.nodes().forEach(function(node: any) {
              if (node.data("curated_gene_name" === search)) {
                return node;
              }
            });
            const searched_chromosome = searched_node.data("chr");
            const message = "Chromosome " + searched_chromosome;
            this.setState({ loading_message: message });
            if (this.cache.has(searched_chromosome)) {
              const cy = this.cache.get(searched_chromosome);
              this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);
            } else {

              const url = this.chromosomePath(searched_chromosome);
              const cy_json_elements = this.fetchAsyncJson(url);
              this.left_cy_network.elements().remove();
              this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);
              this.cache.set(searched_chromosome, this.left_cy_network);
            }
          });
        }
      }, 500);

    } else if ((this.props.feature !== prevProps.feature) && this.props.feature !== "") {
      this.setState({ cytoscape_loading: false });
      // If feature change update both views
      this.left_cy_network.style()
        .selector("node")
        .style({
          "background-color": "mapData(" + this.props.feature + ", 0, 1, black, green)",
        })
        .update();
      if (this.right_cy_network !== undefined) {
        this.right_cy_network.style()
          .selector("node")
          .style({
            "background-color": "mapData(" + this.props.feature + ", 0, 1, black, green)",
          })
          .update();

      }
    }
    // TODO: if left view is clicked do a search of that node
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
        <div className="col" style={{ paddingRight: "0px" }}>
          <Cytoscape_container cytoscape_container_id={this.left_container_id} />
        </div>
        <div className="col" style={{ paddingRight: "0px" }}>
          <Cytoscape_container cytoscape_container_id={this.right_container_id} />
        </div>
      </div>
    );
  }
}
