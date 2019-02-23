import * as React from "react";
import { Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

export class SearchPanel extends React.Component<any, any> {

  private BASE_URL = "http://localhost:8080/data/";
  private suggestions: string[];

  constructor(props: any) {
    super(props);
    this.suggestions = [];
    this.state = { filtered_suggestions: [] };
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url).then((response) => {
      const json = response.json();
      return json;
    }).catch((_err) => {
      setTimeout(() => {
        alert("There are not any suggestions to be downloaded");
      }, 0);
    });
  }

  public componentDidUpdate = () => {
    if (this.suggestions.length == 0) {
      this.fetchAsyncJson(this.BASE_URL + this.props.organism + "/" + this.props.cell_type + "/" + "suggestions.json").then((json) => {
        this.suggestions = json;
      });
    }
  }

  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input_text = e.target.value;
    if (input_text.length !== 0) {
      this.setState({ filtered_suggestions: this.suggestions.filter((suggestion: string) => suggestion.toLowerCase().startsWith(input_text.toLowerCase())) });
    }
    this.props.onTextChange(e.target.value);
  }

  public onSubmit = () => {
    this.props.onSearchChange(this.props.text);
    this.props.onTextChange("");
  }

  public handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.onSubmit();
    }
  }

  public onSuggestChange = (event: any) => {
    const suggestion_selected = event.target.innerText;
    this.props.onTextChange(suggestion_selected);
    this.props.onSearchChange(suggestion_selected);
    this.props.onTextChange("");
  }

  public boldText(word: string, length: number) {
    return <span><b>{word.slice(0, length)}</b>{word.slice(length)}</span>;
  }

  public render() {

    return (
      <Form className="text-center">
        <FormGroup>
          <Label for="searcher">Search</Label>
          <Input className="text-center" value={this.props.text} type="text" name="Search" placeholder="Hoxa1 6:52155590 6:52155590-52158317" onChange={this.onInputChange} onKeyPress={this.handleEnterKey} />
          <ListGroup className="text-center container-fluid" style={{ height: "auto", maxHeight: "110px", overflowX: "hidden", padding: "0px", display: ((this.props.text.length !== 0 && this.state.filtered_suggestions.length !== 0) ? "block" : "none") }}>
            {this.state.filtered_suggestions.map((suggestion: string) => <ListGroupItem key={suggestion} value={suggestion} onClick={this.onSuggestChange} style={{ padding: "0px", cursor: "pointer" }}>{this.boldText(suggestion, this.props.text.length)}</ListGroupItem>)}
          </ListGroup>
        </FormGroup>
        <Button disabled={this.props.text == ""} style={{ marginBottom: "15px" }} onClick={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}
