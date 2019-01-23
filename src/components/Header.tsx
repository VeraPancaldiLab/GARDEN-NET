import * as React from "react";
import * as Reactstrap from "reactstrap";
import { SearchPanelContainer } from "./../containers/SearchPanelContainer";

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center"><a href="https://github.com/VeraPancaldiLab/GARDEN-NET">GARDEN-NET</a></h1>
          </div>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col">
            <Reactstrap.Alert color="primary" className="text-center">Still in development!</Reactstrap.Alert>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <SearchPanelContainer />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }

}
