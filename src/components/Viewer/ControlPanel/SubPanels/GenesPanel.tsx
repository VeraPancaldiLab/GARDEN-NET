import * as React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label } from 'reactstrap';

interface IGeneProps {
  onGeneChange:(gene: string) => void,
    onChromosomeChange:(gene: string) => void,
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

    const genes = ['hoxa1', '6:52155590-52158317', '6:52155590-52158317_20K_extended', '6:52155590-52158317_nearest']

    return (
      <Form style={margin_style}>
        <FormGroup className='text-center'>
          <Label for="Select">Genes</Label>
          <br/>
          <ButtonDropdown style={{display: 'grid'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle style={{fontSize: 'x-small'}} caret>
              {this.props.gene}
            </DropdownToggle>
            <DropdownMenu style={{fontSize: 'x-small'}}>
              { genes.map(gene => <DropdownItem key={gene} value={gene} onClick={this.onGeneChange}>{gene}</DropdownItem>) }
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
