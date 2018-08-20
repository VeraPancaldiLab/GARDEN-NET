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
    super(props)
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
    this.cy.style()
      .selector(selection)
      .style({
        'width': this.size,
        'height': this.size,
        'background-color': this.node_color,
        'line-color': this.edge_color,
      })
      .update()
  }

  componentDidMount (){
    this.cy = cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: [ // list of graph elements to start with
        { // node a
          data: { id: 'a' }
        },
        { // node b
          data: { id: 'b' }
        },
        { // node c
          data: { id: 'c' }
        },
        { // edge ab
          data: { id: 'ab', source: 'a', target: 'b' },
        },
        { // edge ab
          data: { id: 'ac', source: 'a', target: 'c' },
        },
        { // edge ab
          data: { id: 'bc', source: 'b', target: 'c' }
        }
      ],

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
        name: 'circle',
        animate: true
      }

    });
  }

  render() {
    return (
      <div className='container-fluid'>
      <div id='cytoscape_container'></div>
      </div>
    );
  }
}
