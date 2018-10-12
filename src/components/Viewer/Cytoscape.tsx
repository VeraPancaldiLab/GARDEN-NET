import * as React from "react";
import * as cytoscape from 'cytoscape';
import './Cytoscape.css'

export class Cytoscape extends React.Component<any, any> {

  cy: any
  chromosomes_cache: Map<string, any> = new Map()

  constructor(props: any) {
    super(props);
    this.state = {json_loading: true, cytoscape_loading: true};
  }

  componentDidUpdate(prevProps: any) {
    console.log(this.state)
    if (this.props.chromosome != prevProps.chromosome) {
      this.setState({json_loading: true, cytoscape_loading: true});
      if(this.chromosomes_cache.has(this.props.chromosome)) {
        let cy = this.chromosomes_cache.get(this.props.chromosome)
        this.setState({json_loading: false})

        let _this = this
        this.cy = cytoscape({

          container: document.getElementById('cytoscape_container'), // container to render in

          elements: cy.elements().jsons(),

          style: [ // the stylesheet for the graph
            {
              selector: 'node',
              style: {
                'background-color': 'mapData(features.'+ _this.props.feature + ', 0, 1, black, green)',
                'label': 'data(name)',
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
            }
          ],

          layout: {
            name: 'preset',
            animate: false,
            stop: () => this.setState({cytoscape_loading: false})
          }
        });
        this.cy.style()
          .selector('node')
          .style({
            'background-color': 'mapData(features.'+ this.props.feature + ', 0, 1, black, green)',
          })
          .update()
      } else {
        this.chromosomes_cache.set(this.props.chromosome, this.buildNetwork(this))
        this.cy = this.chromosomes_cache.get(this.props.chromosome)
      }
    } else if (this.props.feature != prevProps.feature) {
      this.cy.style()
        .selector('node')
        .style({
          'background-color': 'mapData(features.'+ this.props.feature + ', 0, 1, black, green)',
        })
        .update()
    }
  }

  componentDidMount (){
    this.chromosomes_cache.set(this.props.chromosome, this.buildNetwork(this))
    this.cy = this.chromosomes_cache.get(this.props.chromosome)
  }

  buildNetwork (_this: Cytoscape) {

    async function fetchAsyncJson(_this : Cytoscape ) {
      // Warning: The network file has to be serve before by a http server
      // http-server is provided to help to the development thanks to `yarn serve` command
      // In this case, the port used to serve is the 8080
      let url = 'http://localhost:8080/data/chromosomes/' + _this.props.chromosome + '/stdout';
      return fetch(url).then(response => {
        const json = response.json();
        _this.setState({json_loading: false});
        return json;
      });
    }

    return cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: fetchAsyncJson(this),

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'mapData(features.'+ _this.props.feature + ', 0, 1, black, green)',
            'label': 'data(name)',
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
        name: 'cose',
        animate: false,
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
        {
        this.state.json_loading ? <h1 className='text-center'>Loading data...</h1> : ''
        }
        {
        this.state.cytoscape_loading ? <h1 className='text-center'>Rendering...</h1> : ''
        }
        <div id='cytoscape_container' style={margin_style}></div>
      </div>
    );
  }
}
