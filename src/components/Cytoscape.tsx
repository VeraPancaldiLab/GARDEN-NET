import * as React from "react";
import * as Reactstrap from 'reactstrap';
import * as cytoscape from 'cytoscape';
import './Cytoscape.css'

export class Cytoscape extends React.Component<{},{}> {
  componentDidMount (){
    let cy = cytoscape({

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
            'label': 'data(id)'
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
