import * as React from "react";
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

interface ISizeProps {
  onSizeChange:(size: string) => void,
  size: number
}

export class SizePanel extends React.Component<ISizeProps, {}> {
    constructor(props: any) {
      super(props)
      this.handleSizeChange = this.handleSizeChange.bind(this);
    }

  handleSizeChange (event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onSizeChange(event.target.value)
  }

  render() {
    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px'
    };
    return (
      <Form style={margin_style}>
        <FormGroup className='text-center' inline={true}>
          <Label style={{margin: '5px'}}>
            Size: {this.props.size}
          </Label>
          <Input type="range" className="text-center" onChange={this.handleSizeChange} min="1" max="50" step="1" value={this.props.size}
          />
        </FormGroup>
      </Form>
    );
  }
}
