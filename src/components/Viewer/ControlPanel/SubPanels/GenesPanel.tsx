import * as React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label } from 'reactstrap';

interface IGeneProps {
  onGeneChange:(gene: string) => void,
    onChromosomeChange:(gene: string) => void,
    onRangeChange:(gene: string) => void,
    gene: string
}

export class GenesPanel extends React.Component<IGeneProps, any> {

  constructor(props: any) {
    super(props)
    this.state = {dropdownOpen: false}
  }

  onGeneChange = (event: React.MouseEvent<HTMLElement>) => {
    const selector = event.target as HTMLInputElement
    this.props.onGeneChange(selector.value)
    this.props.onChromosomeChange('Choose')
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
      marginTop: '15px',
      marginBottom: '15px'
    };

    const genes = ['hoxa1']

    return (
      <Form style={margin_style}>
        <FormGroup className='text-center'>
          <Label for="Select">Genes</Label>
          <br/>
          <ButtonDropdown style={{display: 'grid'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.gene}
            </DropdownToggle>
            <DropdownMenu className='text-center container-fluid' style={{ height: 'auto',  maxHeight: '200px', overflowX: 'hidden'}}>
              { genes.slice(0,-1).map(gene => <div key={gene}><DropdownItem value={gene} onClick={this.onGeneChange}>{gene}</DropdownItem><DropdownItem style={{margin: 0}} divider/></div>) }
              { genes.slice(-1).map(gene => <DropdownItem style={{marginTop: '5px'}} key={gene} value={gene} onClick={this.onGeneChange}>{gene}</DropdownItem>) }
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
