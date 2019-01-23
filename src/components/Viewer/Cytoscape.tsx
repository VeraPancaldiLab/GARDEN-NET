import * as React from "react";
import "./Cytoscape.css";

export class Cytoscape extends React.Component<any, any> {

  public render() {

    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
    };

    return (
      <div className="container-fluid">
        <div className="cytoscape_container" id={this.props.cytoscape_container_id} style={margin_style}></div>
      </div>
    );
  }
}
