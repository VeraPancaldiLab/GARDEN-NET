import * as React from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from "reactstrap";

export class UploadButton extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = { loading_features: false, message: "", percentage: 0, uploaded_features: [], input_key: Date.now(), file_error: false, file_already_processed: false};
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
        // Very weird bug in Location path sent from production server
        // Also force to use https
        const location = headers.get("location").replace("http://pancaldi.bsc.es/garden-net_reststatus/", "https://pancaldi.bsc.es/garden-net_rest/status/");
        this.features_task_progress(location);
        return json;
      },
    );
    } else {
      // Feature already uploaded
      this.setState({file_already_processed: true, input_key: Date.now()});
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
        <Modal isOpen={this.state.file_already_processed} centered={true} className="text-center">
          <ModalHeader>
            <b className="text-info" style={{marginLeft: "170px"}}>Information</b>
          </ModalHeader>
          <ModalBody>
            File already processed
          </ModalBody>
          <ModalFooter>
            <Button color="info" style={{marginRight: "200px"}} onClick={() => this.setState({file_already_processed: false})}>Close</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.file_error} centered={true} className="text-center">
          <ModalHeader>
            <b className="text-danger" style={{marginLeft: "210px"}}>Error</b>
          </ModalHeader>
          <ModalBody>
            {this.state.message}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" style={{marginRight: "200px"}} onClick={() => this.setState({file_error: false})}>Close</Button>
          </ModalFooter>
        </Modal>
        <Form>
          <FormGroup style={{ marginBottom: "0px" }}>
            <Label for="features_upload_button">Upload features file</Label>
            <Input style={margin_style} type="file" accept=".bed.gz" onChange={this.onFileChange} key={this.state.input_key} name="features" id="features_upload_button" />
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
      if (task.state != "PENDING" && task.state != "PROGRESS" && task.state != "FAILURE") {
        if ("result" in task) {
          // Finished
          this.setState({ message: task.message, percentage: task.percentage, loading_features: true });
          // Wait one second to show the finished progress bar before remove it
          const feature_names = Object.keys(task.result.features);
          const features_list = this.props.features_list.concat(feature_names).sort();
          this.props.onFeaturesListChange(features_list);

          const features_new = this.props.features_new;
          for (const feature_name of feature_names ) {
            features_new[feature_name] = task.result.features[feature_name];
          }
          const features_metadata = this.mergeDeep(this.props.features_metadata, task.result.features_metadata);
          this.props.onFeaturesMetadataChange(features_metadata);
          this.props.onFeaturesNewChange(features_new);
          const first_feature = Object.keys(task.result.features)[0];
          this.props.onFeatureChange(first_feature);
          setTimeout(() => { this.setState({ loading_features: false }); }, 1000);
        }
      } else if (task.state == "FAILURE") {
        this.setState({ message: task.message, loading_features: false, file_error: true, input_key: Date.now() });
      } else {
        this.setState({ message: task.message, percentage: task.percentage, loading_features: true });
        setTimeout(() => { this.features_task_progress(location); }, 1000);
      }
    }).catch(() => {
      this.setState({ loading_features: false, message: "Error proccesing the feature file", file_error: true, input_key: Date.now() });
  });
  }

  private isObject(item: any) {
    return (item && typeof item === "object" && !Array.isArray(item));
  }

  private mergeDeep(target: any, ...sources: any): any {
    if (!sources.length) { return target; }
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) { Object.assign(target, { [key]: {} }); }
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this.mergeDeep(target, ...sources);
  }
}
