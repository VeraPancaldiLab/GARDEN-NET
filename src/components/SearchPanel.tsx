import * as React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export class SearchPanel extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  onInputChange=  (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onTextChange(e.target.value)
  }

  onSubmit = () => {
    this.props.onSearchChange(this.props.text)
    this.props.onChromosomeChange('Choose')
    this.props.onGeneChange('Choose')
    this.props.onRangeChange('Choose')
  }

  handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.onSubmit()
    }
  }

  render() {

    return (
      <Form className='text-center'>
        <FormGroup>
          <Label for="searcher">Search</Label>
          <Input className='text-center' type="text" name="Search" placeholder="Hoxa1 6:52155590 6:52155590-52158317" onChange={this.onInputChange} onKeyPress={this.handleEnterKey} />
        </FormGroup>
        <Button disabled={this.props.text == ''} style={{marginBottom: '15px'}} onClick={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}
