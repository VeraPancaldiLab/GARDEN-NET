import * as React from "react";
import { Form, FormGroup, Input, Modal, ModalBody, Progress } from "reactstrap";

export class UploadButton extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = { loading_features: false, message: "", percentage: 0, uploaded_features: []};
  }

  public onUpload = () => {
    fetch(this.props.download).then((response) => {
      const json = response.json();
      return json;
    }).then((json) => {
      // Create a hidden 'a' element; click it and remove it
      const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
      const hiddenElement = document.createElement("a");
      document.body.appendChild(hiddenElement);
      hiddenElement.href = window.URL.createObjectURL(blob);
      hiddenElement.setAttribute("download", this.props.download.split("/").pop());
      hiddenElement.style.display = "none";
      hiddenElement.click();
      document.body.removeChild(hiddenElement);
    });
  }

  public onFileChange = (event: any) => {
    const features_file = event.target.files[0];
    const form_data = new FormData();

    form_data.append("features", features_file);

    const features_filename = features_file.name;
    if (!this.state.uploaded_features.includes(features_filename)) {
      this.setState({uploaded_features: this.state.uploaded_features.concat(features_filename)});
      fetch("http://CRCT2107:5000/upload_features?" + "organism=" + this.props.organism + "&cell_type=" + this.props.cell_type, {
      method: "POST",
      body: form_data,
    }).then(
      // Take the json part of the response when the features file is in the server
      (response: any) => {
        const json = response.json();
        const headers = response.headers;
        const location = headers.get("location");
        this.features_task_progress(location);
        return json;
      },
    );
    // ).then(
    //   // Use the json part of the response
    //   // (success) => console.log(success),
    // ).catch(
    //   // (error) => console.log(error),
    // );
    } else {
      // Feature already uploaded
    }
  }

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      fontSize: "small",
    };

    return (
      <div className="text-center">
        <Form>
          <FormGroup style={{ marginBottom: "0px" }}>
            <Input style={margin_style} type="file" accept=".bed.gz" onChange={this.onFileChange} name="features" />
          </FormGroup>
        </Form>
        <Modal isOpen={this.state.loading_features} centered={true} className="text-center">
          <ModalBody>
            Be patient please
            <br />
            {this.state.message}
          </ModalBody>
          <div className="text-center"><b>{this.state.percentage}%</b></div>
          <Progress animated={true} value={this.state.percentage} style={{margin: "10px", borderRadius: "10px"}}/>
        </Modal>
      </div>
    );
  }

  private features_task_progress(location: string) {
    fetch(location).then(
      // Take the json par
      (response) => response.json(),
    ).then((task) => {
      if (task.state != "PENDING" && task.state != "PROGRESS") {
        if ("result" in task) {
          // Finished
          this.setState({ message: task.message, percentage: task.percentage, loading_features: true });
          // Wait one second to show the finished progress bar before remove it
          setTimeout(() => { this.setState({ loading_features: false }); }, 1000);
          const feature_name = Object.keys(task.result.features)[0];
          const features_list = this.props.features_list.concat(feature_name).sort();
          this.props.onFeaturesListChange(features_list);
          const features_new = task.result.features;
          this.props.onFeaturesNewChange(features_new);
        }
      } else {
        this.setState({ message: task.message, percentage: task.percentage, loading_features: true });
        setTimeout(() => { this.features_task_progress(location); }, 1000);
      }
    });
  }
}
