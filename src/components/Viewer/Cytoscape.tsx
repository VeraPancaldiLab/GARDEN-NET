import * as React from "react";
import * as cytoscape from 'cytoscape';
import { Modal, ModalBody } from 'reactstrap'
import './Cytoscape.css'

export class Cytoscape extends React.Component<any, any> {

  cy: any
  chromosomes_cache: Map<string, any> = new Map()

  constructor(props: any) {
    super(props);
    this.state = {cytoscape_loading: true};
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.chromosome != prevProps.chromosome) {
      this.setState({cytoscape_loading: true});
      if(this.chromosomes_cache.has(this.props.chromosome)) {
        let cy = this.chromosomes_cache.get(this.props.chromosome)

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.cy = this.buildNetwork(cy.elements().jsons())
            resolve(this.cy);
          }, 500);
        });
      } else {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.chromosomes_cache.set(this.props.chromosome, this.buildNetwork())
            this.cy = this.chromosomes_cache.get(this.props.chromosome)
            resolve(this.cy);
          }, 500);
        });
      }
    } else if (this.props.feature != prevProps.feature) {
      this.cy.style()
        .selector('node')
        .style({
          'background-color': 'mapData('+ this.props.feature + ', 0, 1, black, green)',
        })
        .update()
    }
  }

  componentDidMount (){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.chromosomes_cache.set(this.props.chromosome, this.buildNetwork())
        this.cy = this.chromosomes_cache.get(this.props.chromosome)
        resolve(this.cy);
      }, 500);
    });
  }

    async fetchAsyncJson() {
      // Warning: The network file has to be serve before by a http server
      // http-server is provided to help to the development thanks to `yarn serve` command
      // In this case, the port used to serve is the 8080
      let url = 'http://localhost:8080/data/chromosomes/chr' + this.props.chromosome + '.json';
      return fetch(url).then(response => {
        const json = response.json();
        return json;
      });
    }

  buildNetwork (cy_json_elements = null) {
    return cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: cy_json_elements || this.fetchAsyncJson(),

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'mapData('+ this.props.feature + ', 0, 1, black, green)',
            'label': 'data(curated_gene_name)',
            'color': 'white',
            'font-size': 4,
            'text-valign': 'center',
            'text-halign': 'center',
            'width': 35,
            'height': 35
          }
        },
        {
          selector: 'node[type = "bait"]',
          style: {
            'shape': 'rectangle',
          }
        },
        {
          selector: 'node[type = "oe"]',
          style: {
            'shape': 'ellipse',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 5,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        },
      ],

      layout: {
        name: 'preset',
        animate: false,
        stop: () => this.setState({cytoscape_loading: false})
      }
    });
  }

  render() {

    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px'
    };

    return (
      <div className='container-fluid'>
        <Modal isOpen={this.state.cytoscape_loading} centered={true} className='text-center'>
              <ModalBody>
                Be patient please
                <br/>
                Rendering chromosome {this.props.chromosome}
                <div className='spinner'></div>
              </ModalBody>
        </Modal>
        <div id='cytoscape_container' style={margin_style}></div>
      </div>
    );
  }
}
