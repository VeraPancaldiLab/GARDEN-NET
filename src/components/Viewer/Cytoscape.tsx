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

        let _this = this
        let promise = new Promise(function(resolve, reject) {
          setTimeout(function() {
            _this.cy = _this.buildNetwork(_this, cy.elements().jsons())
            resolve(_this.cy);
          }, 500);
        });
      } else {
        let _this = this
        let promise = new Promise(function(resolve, reject) {
          setTimeout(function() {
            _this.chromosomes_cache.set(_this.props.chromosome, _this.buildNetwork(_this))
            _this.cy = _this.chromosomes_cache.get(_this.props.chromosome)
            resolve(_this.cy);
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
    let _this = this
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        _this.chromosomes_cache.set(_this.props.chromosome, _this.buildNetwork(_this))
        _this.cy = _this.chromosomes_cache.get(_this.props.chromosome)
        resolve(_this.cy);
      }, 500);
    });
  }

  buildNetwork (_this: Cytoscape, cy_json_elements = null) {

    async function fetchAsyncJson(_this : Cytoscape) {
      // Warning: The network file has to be serve before by a http server
      // http-server is provided to help to the development thanks to `yarn serve` command
      // In this case, the port used to serve is the 8080
      let url = 'https://raw.githubusercontent.com/VeraPancaldiLab/ChAs_Frontend/master/data/chromosomes/chr' + _this.props.chromosome + '.json';
      return fetch(url).then(response => {
        const json = response.json();
        return json;
      });
    }

    return cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: cy_json_elements || fetchAsyncJson(this),

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'mapData('+ _this.props.feature + ', 0, 1, black, green)',
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
