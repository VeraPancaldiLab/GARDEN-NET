import * as React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label } from 'reactstrap';

interface IGeneProps {
  onRangeChange:(gene: string) => void,
  onGeneChange:(gene: string) => void,
    onChromosomeChange:(gene: string) => void,
    range: string,
}

export class RangesPanel extends React.Component<IGeneProps, any> {

  constructor(props: any) {
    super(props)
    this.state = {dropdownOpen: false}
  }

  onRangeChange = (event: React.MouseEvent<HTMLElement>) => {
    const selector = event.target as HTMLInputElement
    this.props.onRangeChange(selector.value)
    this.props.onGeneChange('Choose')
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

    const ranges = ['6:52155590-52158317', '6:52155590-52158317_20K_extended', '6:52155590-52158317_nearest']

    return (
      <Form style={margin_style}>
        <FormGroup className='text-center'>
          <Label for="Select">Ranges</Label>
          <br/>
          <ButtonDropdown style={{display: 'grid'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle style={{fontSize: 'x-small'}} caret>
              {this.props.range}
            </DropdownToggle>
            <DropdownMenu style={{fontSize: 'x-small'}}>
              { ranges.slice(0,-1).map(range => <div key={range}><DropdownItem value={range} onClick={this.onRangeChange}>{range}</DropdownItem><DropdownItem style={{margin: 0}} divider/></div>) }
              { ranges.slice(-1).map(range => <div key={range}><DropdownItem style={{marginTop: '5px'}} value={range} onClick={this.onRangeChange}>{range}</DropdownItem></div>) }
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
