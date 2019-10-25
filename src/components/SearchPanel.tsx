import * as React from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

export class SearchPanel extends React.Component<any, any> {

  private BASE_URL = "https://pancaldi.bsc.es/garden-net/data/";
  private suggestions: string[];

  constructor(props: any) {
    super(props);
    this.suggestions = [];
    this.state = { filtered_suggestions: [], suggestions_error: false };
  }

  public async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url)
      .then(response => {
        const json = response.json();
        return json;
      })
      .catch(_err => {
        this.setState({ suggestions_error: true });
      });
  }

  public componentDidUpdate = () => {
    if (this.suggestions.length === 0) {
      this.fetchAsyncJson(
        this.BASE_URL +
          this.props.organism +
          "/" +
          this.props.cell_type +
          "/" +
          "suggestions.json"
      ).then(json => {
        this.suggestions = json;
      });
    }
  };

  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input_text = e.target.value;
    if (input_text.length !== 0) {
      this.setState({
        filtered_suggestions: this.suggestions.filter((suggestion: string) =>
          suggestion.toLowerCase().startsWith(input_text.toLowerCase())
        )
      });
    }
    this.props.onTextChange(e.target.value);
  };

  public onSubmit = () => {
    this.props.onSearchChange(this.props.text);
    this.props.onTextChange("");
  };

  public handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.onSubmit();
    }
  };

  public onSuggestChange = (event: any) => {
    event.preventDefault();
    const suggestion_selected = event.target.innerText;
    this.props.onTextChange(suggestion_selected);
    this.props.onSearchChange(suggestion_selected);
    this.props.onTextChange("");
  };

  public boldText(word: string, length: number) {
    return (
      <span>
        <b>{word.slice(0, length)}</b>
        {word.slice(length)}
      </span>
    );
  }

  public render() {
    const organism: any = {
      Homo_sapiens: "Homo sapiens",
      Mus_musculus: "Mus musculus"
    };

    const cell_type: any = {
      Homo_sapiens: {
        EP: "Endothelial precursors",
        Ery: "Erythroblasts",
        FoeT: "Fetal thymus",
        MK: "Megakaryocytes",
        Mac0: "Macrophages M0",
        Mac1: "Macrophages M1",
        Mac2: "Macrophages M2",
        Mon: "Monocytes",
        Neu: "Neutrophils",
        aCD4: "Activated total CD4+T cells",
        nCD4: "Naive CD4+ T cells",
        nCD8: "Naive CD8+ T cells",
        naCD4: "Non-activated total CD4+T cells",
        tCD4: "Total CD4+ T cells",
        tCD8: "Total CD8+ T cells"
      },
      Mus_musculus: { Embryonic_stem_cells: "Embryonic stem cells" }
    };
    return (
      <div>
        <Modal
          isOpen={this.state.suggestions_error}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b className="text-danger">Error</b>
          </ModalHeader>
          <ModalBody>There are no suggestions to be downloaded</ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="danger"
              onClick={() => this.setState({ suggestions_error: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Form className="text-center">
          <FormGroup>
            <Alert color="info">
              {this.props.organism ? organism[this.props.organism] : ""} :{" "}
              {this.props.organism
                ? cell_type[this.props.organism][this.props.cell_type]
                : ""}
            </Alert>
            Search gene name, Ensembl ID or genomic range
            <Input
              className="text-center"
              value={this.props.text}
              type="text"
              name="Search"
              placeholder=""
              onChange={this.onInputChange}
              onKeyPress={this.handleEnterKey}
            />
            <ListGroup
              className="text-center container-fluid"
              style={{
                display:
                  this.props.text.length !== 0 &&
                  this.state.filtered_suggestions.length !== 0
                    ? "block"
                    : "none",
                height: "auto",
                maxHeight: "110px",
                overflowX: "hidden",
                padding: "0px"
              }}
            >
              {this.state.filtered_suggestions.map((suggestion: string) => (
                <ListGroupItem
                  key={suggestion}
                  value={suggestion}
                  onClick={this.onSuggestChange}
                  style={{ padding: "0px", cursor: "pointer" }}
                >
                  {this.boldText(suggestion, this.props.text.length)}
                </ListGroupItem>
              ))}
            </ListGroup>
          </FormGroup>
          <Button
            disabled={this.props.text === ""}
            style={{ marginBottom: "15px" }}
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
