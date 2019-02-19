import * as React from "react";
import { Header } from "./Header";
import { Viewer } from "./Viewer/Viewer";

export class Frontend extends React.Component<any, any> {

  public componentDidMount = () => {
    this.onOrganismChange(this.props.match.params.organism);
    this.onCellTypeChange(this.props.match.params.cell_type);
  }

  public onOrganismChange = (organism: string) => {
    this.props.onOrganismChange(organism);
  }

  public onCellTypeChange = (cell_type: string) => {
    this.props.onCellTypeChange(cell_type);
  }

  public render() {
    return (
      <div>
        <Header />
        <Viewer />
      </div>
    );
  }
}
