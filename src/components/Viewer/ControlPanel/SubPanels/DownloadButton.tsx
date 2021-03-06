import * as React from "react";
import { Button } from "reactstrap";

export class DownloadButton extends React.Component<any, {}> {
  public onDownload = () => {
    fetch(this.props.download)
      .then(response => {
        const json = response.json();
        return json;
      })
      .then(json => {
        // Create a hidden 'a' element; click it and remove it
        const blob = new Blob([JSON.stringify(json, null, 2)], {
          type: "application/json"
        });
        const hiddenElement = document.createElement("a");
        document.body.appendChild(hiddenElement);
        hiddenElement.href = window.URL.createObjectURL(blob);
        hiddenElement.setAttribute(
          "download",
          this.props.download.split("/").pop()
        );
        hiddenElement.style.display = "none";
        hiddenElement.click();
        document.body.removeChild(hiddenElement);
      });
  };

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      fontSize: "small",
      marginTop: "5px"
    };

    return (
      <div className="text-center">
        <Button
          outline={true}
          color="secondary"
          onClick={this.onDownload}
          style={margin_style}
        >
          Download
        </Button>
      </div>
    );
  }
}
