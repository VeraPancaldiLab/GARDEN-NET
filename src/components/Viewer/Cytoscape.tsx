import * as cytoscape from "cytoscape";
import * as React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./Cytoscape.css";

export class Cytoscape extends React.Component<any, any> {

  public cy: any;
  public cache: Map<string, any> = new Map();
  public BASE_URL = "https://pancaldi.bsc.es/garnet/data/";
  public URL = {
    chromosome: this.BASE_URL + "chromosomes/chr",
    gene: this.BASE_URL + "genes/",
    range: this.BASE_URL + "ranges/",
    search: "https://pancaldi.bsc.es/garnet-rest?features=true&search=",
  };

  constructor(props: any) {
    super(props);
    this.state = { cytoscape_loading: true, loading_message: "" };
  }

  public componentDidUpdate(prevProps: any) {
    if ((this.props.chromosome !== prevProps.chromosome) && this.props.chromosome !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message });
      if (this.cache.has(this.props.chromosome)) {
        const cy = this.cache.get(this.props.chromosome);

        setTimeout(() => {
          this.cy = this.buildNetwork(cy.elements().jsons());
        }, 500);
      } else if (this.props.chromosome !== "Choose") {
        setTimeout(() => {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.cache.set(this.props.chromosome, this.buildNetwork(cy_json_elements));
          this.cy = this.cache.get(this.props.chromosome);
        }, 500);
      }
    } else if ((this.props.gene !== prevProps.gene) && this.props.gene !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.genePath(this.props.gene);
      this.onDownloadChange(url);
      const message = "Gene " + this.props.gene;
      this.setState({ loading_message: message });
      if (this.cache.has(this.props.gene)) {
        const cy = this.cache.get(this.props.gene);
        setTimeout(() => {
          this.cy = this.buildNetwork(cy.elements().jsons());
        }, 500);
      } else if (this.props.gene !== "Choose") {
        setTimeout(() => {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.cache.set(this.props.gene, this.buildNetwork(cy_json_elements));
          this.cy = this.cache.get(this.props.gene);
        }, 500);
      }

    } else if ((this.props.range !== prevProps.range) && this.props.range !== "Choose") {
      this.setState({ cytoscape_loading: true });
      const url = this.rangePath(this.props.range);
      this.onDownloadChange(url);
      const message = "Range " + this.props.range;
      this.setState({ loading_message: message });
      if (this.cache.has(this.props.range)) {
        const cy = this.cache.get(this.props.range);
        setTimeout(() => {
          this.cy = this.buildNetwork(cy.elements().jsons());
        }, 500);
      } else if (this.props.range !== "Choose") {
        setTimeout(() => {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.cache.set(this.props.range, this.buildNetwork(cy_json_elements));
          this.cy = this.cache.get(this.props.range);
        }, 500);
      }

    } else if ((this.props.search !== prevProps.search) && this.props.search !== "") {
      this.setState({ cytoscape_loading: true });
      const url = this.searchPath(this.props.search);
      const message = "Search " + this.props.search;
      this.setState({ loading_message: message });
      this.onDownloadChange(url);
      setTimeout(() => {
        if (this.cache.has(this.props.search)) {
          const cy = this.cache.get(this.props.search);
          this.cy = this.buildNetwork(cy.elements().jsons());
          this.cy.style()
            .selector("node")
            .style({
              "width": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "height": (ele: any) => 20 + 1.5 * ele.data("degree"),
              "border-color": "mapData(chr, 1, 21, blue, darkorange)",
            }).update();
        } else if (this.props.search !== "Choose") {
          const cy_json_elements = this.fetchAsyncJson(url);
          this.cache.set(this.props.search, this.buildNetwork(cy_json_elements));
          this.cy = this.cache.get(this.props.search);
          this.cy.on("layoutstop", (event: any) => {
            event.cy.style()
              .selector("node")
              .style({
                "width": (ele: any) => 20 + 1.5 * ele.data("degree"),
                "height": (ele: any) => 20 + 1.5 * ele.data("degree"),
                "border-color": "mapData(chr, 1, 21, blue, darkorange)",
              }).update();
          });
        }
      }, 500);

    } else if (this.props.feature !== prevProps.feature) {
      this.cy.style()
        .selector("node")
        .style({
          "background-color": "mapData(" + this.props.feature + ", 0, 1, black, green)",
        })
        .update();
    }
  }

  public componentDidMount() {
    setTimeout(() => {
      const url = this.chromosomePath(this.props.chromosome);
      this.onDownloadChange(url);
      const message = "Chromosome " + this.props.chromosome;
      this.setState({ loading_message: message });
      const cy_json_elements = this.fetchAsyncJson(url);
      this.cache.set(this.props.chromosome, this.buildNetwork(cy_json_elements));
      this.cy = this.cache.get(this.props.chromosome);
    }, 500);
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

  public buildNetwork(cy_json_elements: any) {
    return cytoscape({

      container: document.getElementById("cytoscape_container"), // container to render in

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
        stop: () => this.setState({ cytoscape_loading: false }),
      },
    });
  }

  public render() {

    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
    };

    return (
      <div className="container-fluid">
        <Modal isOpen={this.state.cytoscape_loading} centered={true} className="text-center">
          <ModalBody>
            Be patient please
            <br />
            Rendering {this.state.loading_message}
            <div className="spinner"></div>
          </ModalBody>
        </Modal>
        <div id="cytoscape_container" style={margin_style}></div>
      </div>
    );
  }
}
