import * as React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, Button, DropdownItem, Form, FormGroup, Label } from 'reactstrap';

interface IChromosomeProps {
  onChromosomeChange:(feature: string) => void,
    onGeneChange:(gene: string) => void,
    onRangeChange:(gene: string) => void,
    chromosome: string
}

export class ChromosomesPanel extends React.Component<IChromosomeProps, any> {

  constructor(props: any) {
    super(props)
    this.state = {dropdownOpen: false}
  }

  onChromosomeChange = (event: React.MouseEvent<HTMLElement>) => {
    const selector = event.target as HTMLInputElement
    this.props.onChromosomeChange(selector.value)
    this.props.onGeneChange('Choose')
    this.props.onRangeChange('Choose')
  }

  toggle=() => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px',
      paddingLeft: '5px',
      paddingRight: '5px',
      marginBottom: '15px'
    };

    const chromosomes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'X', 'Y']

    return (
      <Form style={margin_style}>
        <FormGroup className='text-center'>
          <Label for="Select">Chromosomes</Label>
          <br/>
          <ButtonDropdown style={{display: 'grid'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.chromosome}
            </DropdownToggle>
            <DropdownMenu className='text-center container-fluid' style={{ height: 'auto',  maxHeight: '200px', overflowX: 'hidden'}}>
              { chromosomes.slice(0,-1).map(chromosome => <div key={chromosome}><DropdownItem value={chromosome} onClick={this.onChromosomeChange}>{chromosome}</DropdownItem><DropdownItem style={{margin: 0}} divider/></div>) }
              { chromosomes.slice(-1).map(chromosome => <DropdownItem style={{marginTop: '5px'}}  key={chromosome} value={chromosome} onClick={this.onChromosomeChange}>{chromosome}</DropdownItem>) }
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
