import * as React from "react";
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { ESELECTION } from '../../../../reducers/index'

export class SelectionPanel extends React.Component<any, {}> {
    constructor(props: any) {
      super(props)
      this.onSelectionChange = this.onSelectionChange.bind(this)
    }

  onSelectionChange (event: any) {
    this.props.onSelectionChange(ESELECTION[event.target.value])
  }

  render() {
    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px',
      padding: '15px'
    };
    return (
      <Form style={margin_style} className='text-center'>
        <FormGroup check inline={true} style={{margin: '5px'}}>
        {/* <Label for="Select">Select</Label> */}
          <Input type="select" onChange={this.onSelectionChange} name="select" id="exampleSelect">
            <option>{ESELECTION.NODE}</option>
            <option>{ESELECTION.EDGE}</option>
            <option>{ESELECTION.BOTH}</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}
