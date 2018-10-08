import * as React from "react";
import * as Reactstrap from 'reactstrap';
import * as cytoscape from 'cytoscape';
import { ESELECTION } from '../../reducers/index'
import './Cytoscape.css'

export class Cytoscape extends React.Component<any, any> {

  cy: any
  node_size = 25
  edge_size = 5
  node_color = '#000'
  edge_color = '#8a2be2'
  size = 25

  constructor(props: any) {
    super(props);
    this.state = {json_loaded: false, cytoscape_loaded: false};
  }

  componentDidUpdate() {
    let selection: string;
    switch (this.props.selection){
      case ESELECTION.NODE:
        selection = 'node';
        if (this.edge_size != this.props.size)
          this.node_size = this.props.size
        if (this.edge_color != this.props.color)
        this.node_color = this.props.color
        this.size = this.node_size
        break;
      case ESELECTION.EDGE:
        selection = 'edge'
        if (this.node_size != this.props.size)
          this.edge_size = this.props.size
        if (this.node_color != this.props.color)
          this.edge_color = this.props.color
        this.size = this.edge_size
        break;
      case ESELECTION.BOTH:
        this.node_size = this.props.size
        this.node_color = this.props.color
        selection ='node,edge'
        this.edge_size = this.props.size
        this.edge_color = this.props.color
        this.size = this.node_size
        break;
      default:
        selection = 'node';
    }
    // Default style has to be updated
    // this.cy.style()
    //   .selector(selection)
    //   .style({
    //     'width': this.size,
    //     'height': this.size,
    //     'background-color': this.node_color,
    //     'line-color': this.edge_color,
    //   })
    //   .update()
  }

  componentDidMount (){

    async function fetchAsyncJson(_this : Cytoscape ) {
      // Warning: The network file has to be serve before by a http server
      // http-server is provided to help to the development thanks to `yarn serve` command
      // In this case, the port used to serve is the 8080
      let url = 'http://localhost:8080/data/network.json';
      return fetch(url).then(response => {
        const json = response.json();
        _this.setState({json_loaded: true});
        return json;
      });
    }

    this.cy = cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: fetchAsyncJson(this),

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#000',
            'label': 'data(id)',
            'width': 25,
            'height': 25
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 5,
            'line-color': '#8a2be2',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      layout: {
        name: 'cose',
        idealEdgeLength: 100,
        nodeOverlap: 20,
        refresh: 20,
        fit: true,
        padding: 30,
        randomize: false,
        componentSpacing: 100,
        nodeRepulsion: 400000,
        edgeElasticity: 100,
        nestingFactor: 5,
        gravity: 80,
        numIter: 1000,
        initialTemp: 200,
        coolingFactor: 0.95,
        minTemp: 1.0,
        stop: () => {this.setState({cytoscape_loaded: true}); console.log('ready')}
      }

    });

  }

  render() {
    return (
      <div className='container-fluid'>
        {
          this.state.json_loaded ? '' : <h1 className='text-center'>Loading data...</h1>
        }
        {
          this.state.cytoscape_loaded ? '' : <h1 className='text-center'>Rendering...</h1>
        }
        <div id='cytoscape_container'></div>
      </div>
    );
  }
}
