import * as React from "react";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress
} from "reactstrap";

export class UploadButton extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      loading_features: false,
      loading_features_file: false,
      message: "",
      percentage: 0,
      uploaded_features: [],
      input_key: Date.now(),
      file_error: false,
      file_already_processed: false,
      features_filename: "",
      dropdownOpen: false,
      feature_format_option: "match_nodes",
      feature_format_function: "",
      upload_features_modal: false
    };
  }

  public onUpload = () => {
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

  public onFileChange = (event: any) => {
    const features_file = event.target.files[0];
    const form_data = new FormData();

    form_data.append("features", features_file);

    this.setState({ features_filename: features_file.name });
    if (!this.state.uploaded_features.includes(this.state.features_filename)) {
      this.setState({
        uploaded_features: this.state.uploaded_features.concat(
          this.state.features_filename
        ),
        loading_features_file: true
      });
      fetch(
        "https://pancaldi.bsc.es/garden-net_rest/upload_features?" +
          "organism=" +
          this.props.organism +
          "&cell_type=" +
          this.props.cell_type +
          "&feature_format_option=" +
          this.state.feature_format_option +
          "&feature_format_function=" +
          (this.state.feature_format_function == ""
            ? "None"
            : this.state.feature_format_function),
        {
          method: "POST",
          body: form_data
        }
      ).then(
        // Take the json part of the response when the features file is in the server
        (response: any) => {
          const json = response.json();
          const headers = response.headers;
          // Very weird bug in Location path sent from production server
          // Also force to use https
          const location = headers
            .get("location")
            .replace(
              "http://pancaldi.bsc.es/garden-net_reststatus/",
              "https://pancaldi.bsc.es/garden-net_rest/status/"
            );
          this.setState({
            loading_features_file: false,
            feature_format_function: "",
            upload_features_modal: false
          });
          this.features_task_progress(location);
          return json;
        }
      );
    } else {
      // Feature already uploaded
      this.setState({
        file_already_processed: true,
        input_key: Date.now(),
        loading_features_file: false,
        upload_features_modal: false
      });
    }
  };

  public toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  public onFormatChange = (event: React.MouseEvent<HTMLElement>) => {
    const selector = event.target as HTMLInputElement;
    this.setState({ feature_format_option: selector.value });
  };

  public onFeatureFormatFunctionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selector = event.target as HTMLInputElement;
    this.setState({ feature_format_function: selector.value });
  };

  public render() {
    const margin_style = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      fontSize: "small"
    };

    const margin_style_format_selector = {
      border: "#aaa",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "2px",
      padding: "5px",
      fontSize: "small"
    };

    const feature_formats: any = {
      match_nodes: "Match features to the nodes",
      proportion_on_nodes: "Calculate proportion of nodes with feature",
      chromHMM: "Create feature from chromHMM chromatin states",
      features_table: "Table of features already assigned to nodes"
    };

    return (
      <div className="text-center">
        <Modal
          isOpen={this.state.file_already_processed}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b className="text-info">Information</b>
          </ModalHeader>
          <ModalBody>File already processed</ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="info"
              onClick={() => this.setState({ file_already_processed: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.file_error}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ marginLeft: "auto" }}>
            <b className="text-danger">Error</b>
          </ModalHeader>
          <ModalBody>{this.state.message}</ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              color="danger"
              onClick={() => this.setState({ file_error: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.loading_features_file}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ marginLeft: "auto" }}>
            <b>Uploading...</b>
          </ModalHeader>
          <ModalBody>
            Be patient please
            <br />
            {"Uploading file: '" + this.state.features_filename + "'"}
            <Progress
              animated={true}
              value="100"
              style={{ margin: "10px", borderRadius: "10px" }}
            />
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.loading_features}
          centered={true}
          className="text-center"
        >
          <ModalHeader>
            <b style={{ marginLeft: "170px" }}>Processing...</b>
          </ModalHeader>
          <ModalBody>
            Be patient please
            <br />
            {this.state.message}
          </ModalBody>
          <div className="text-center">
            <b>{this.state.percentage}%</b>
          </div>
          <Progress
            animated={true}
            value={this.state.percentage}
            style={{ margin: "10px", borderRadius: "10px" }}
          />
        </Modal>

        <Modal
          isOpen={this.state.upload_features_modal}
          centered={true}
          className="text-center"
        >
          <ModalHeader style={{ margin: "auto" }}>
            <b>Upload features file</b>
          </ModalHeader>
          <ModalBody>
            Feature upload options (see{" "}
            <a href="https://bitbucket.org/eraineri/chaser/src/master/">
              ChAseR
            </a>{" "}
            documentation)
            <Form style={margin_style_format_selector}>
              <FormGroup className="text-center">
                <Label for="Select" style={{ fontSize: "small" }}>
                  <b>Feature formats</b>
                </Label>
                <br />
                <ButtonDropdown
                  style={{ display: "grid" }}
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle
                    caret={true}
                    style={{
                      fontSize: "small",
                      color: "black",
                      backgroundColor: "white"
                    }}
                  >
                    {feature_formats[this.state.feature_format_option]}
                  </DropdownToggle>
                  <DropdownMenu
                    className="text-center container-fluid"
                    style={{
                      height: "auto",
                      maxHeight: "200px",
                      overflowX: "hidden",
                      fontSize: "small"
                    }}
                  >
                    {Object.keys(feature_formats)
                      .slice(0, -1)
                      .map((format: string) => (
                        <div key={format}>
                          <DropdownItem
                            value={format}
                            onClick={this.onFormatChange}
                          >
                            {feature_formats[format]}
                          </DropdownItem>
                          <DropdownItem style={{ margin: 0 }} divider={true} />
                        </div>
                      ))}
                    {Object.keys(feature_formats)
                      .slice(-1)
                      .map((format: string) => (
                        <DropdownItem
                          key={format}
                          value={format}
                          onClick={this.onFormatChange}
                        >
                          {feature_formats[format]}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                </ButtonDropdown>
              </FormGroup>
            </Form>
            <div
              style={{
                display:
                  this.state.feature_format_option != "match_nodes"
                    ? "none"
                    : "block"
              }}
            >
              Aggregation function: mean(default), sum, min,...
            </div>
            <Input
              onChange={this.onFeatureFormatFunctionChange}
              style={{
                display:
                  this.state.feature_format_option != "match_nodes"
                    ? "none"
                    : "block"
              }}
            />
            <Label
              style={{
                fontSize: "small",
                display:
                  this.state.feature_format_option != "match_nodes"
                    ? "none"
                    : "block"
              }}
            >
              where the first three column names are ‘chrom’, ‘start’, ‘end’ and
              the remaining columns are features with corresponding column
              names.
              <br />
              Without header if the file use the BED6 format.
            </Label>
            <Form>
              <FormGroup style={{ marginBottom: "0px" }}>
                <Label
                  for="features_upload_button"
                  style={{ fontSize: "small" }}
                >
                  Note maximum upload file size <b>10MB</b>, use .gz compressed
                  files if necessary
                </Label>
                <Input
                  style={margin_style}
                  type="file"
                  onChange={this.onFileChange}
                  key={this.state.input_key}
                  name="features"
                  id="features_upload_button"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter style={{ margin: "auto" }}>
            <Button
              onClick={() => this.setState({ upload_features_modal: false })}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Button
          outline={true}
          style={{ marginTop: "10px" }}
          onClick={() => this.setState({ upload_features_modal: true })}
        >
          Upload features
        </Button>
      </div>
    );
  }

  private features_task_progress(location: string) {
    fetch(location)
      .then(
        // Take the json par
        response => response.json()
      )
      .then(task => {
        if (
          task.state != "PENDING" &&
          task.state != "PROGRESS" &&
          task.state != "FAILURE"
        ) {
          if ("result" in task) {
            // Finished
            this.setState({
              message: task.message,
              percentage: task.percentage,
              loading_features: true
            });
            // Wait one second to show the finished progress bar before remove it
            const feature_names = Object.keys(task.result.features);
            const features_list = this.props.features_list
              .concat(feature_names)
              .sort();
            this.props.onFeaturesListChange(features_list);

            const features_new = this.props.features_new;
            for (const feature_name of feature_names) {
              features_new[feature_name] = task.result.features[feature_name];
            }
            const features_metadata = this.mergeDeep(
              this.props.features_metadata,
              task.result.features_metadata
            );
            this.props.onFeaturesMetadataChange(features_metadata);
            this.props.onFeaturesNewChange(features_new);
            const first_feature = Object.keys(task.result.features)[0];
            this.props.onFeatureChange(first_feature);
            setTimeout(() => {
              this.setState({ loading_features: false });
            }, 1000);
          }
        } else if (task.state == "FAILURE") {
          this.setState({
            message: task.message,
            loading_features: false,
            file_error: true,
            input_key: Date.now()
          });
        } else {
          this.setState({
            message: task.message,
            percentage: task.percentage,
            loading_features: true
          });
          setTimeout(() => {
            this.features_task_progress(location);
          }, 1000);
        }
      })
      .catch(() => {
        this.setState({
          loading_features: false,
          message: "Error proccesing the feature file",
          file_error: true,
          input_key: Date.now()
        });
      });
  }

  private isObject(item: any) {
    return item && typeof item === "object" && !Array.isArray(item);
  }

  private mergeDeep(target: any, ...sources: any): any {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this.mergeDeep(target, ...sources);
  }
}
