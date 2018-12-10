import * as React from "react";
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

interface IChromosomeProps {
  onChromosomeChange:(feature: string) => void,
    chromosome: string
}

export class ChromosomesPanel extends React.Component<IChromosomeProps, {}> {

  onChromosomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChromosomeChange(event.target.value)
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
      <Form style={margin_style} className='text-center'>
        <FormGroup>
          <Label for="Select">Chromosomes</Label>
          <Input type="select" defaultValue={this.props.chromosome} className='text-center' onChange={this.onChromosomeChange} name="select">
            { chromosomes.map(chromosome => <option key={chromosome} value={chromosome}>{chromosome}</option>) }
          </Input>
        </FormGroup>
      </Form>
    );
  }
}
