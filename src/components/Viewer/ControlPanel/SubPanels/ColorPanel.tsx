import * as React from "react";
import { Button, Form, FormGroup, InputGroup, Input } from 'reactstrap';

export class ColorPanel extends React.Component<{onColorChange: (color: string) => void}, {color: string}> {

constructor (props: {onColorChange: (color: string) => void}) {
    super(props)
    this.state = {
      color: ''
    }
    this.handlerColorButton = this.handlerColorButton.bind(this);
    this.handlerColorChange = this.handlerColorChange.bind(this);
  }

  handlerColorButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    this.props.onColorChange(this.state.color)
    this.setState({
      color: ''
    });
  }

  handlerColorChange (event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      color: event.target.value
    });
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
      <Form style={margin_style}>
        <FormGroup check inline={true}>
          <InputGroup inline='true' style={{margin: '5px'}}>
            <Input className='text-center' onChange={this.handlerColorChange} placeholder="color" />
          </InputGroup>
          <Button color="primary" onClick={this.handlerColorButton} style={{margin: '5px'}}>Apply</Button>
        </FormGroup>
      </Form>
    );
  }
}
