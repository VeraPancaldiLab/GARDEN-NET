import { connect } from "react-redux";
import { UploadButton } from "../components/Viewer/ControlPanel/SubPanels/UploadButton";

interface IUploadProps {
  cell_type: string;
  organism: string;
  // base_url: string;
}

export const mapStateToProps = (state: IUploadProps) => {
  return {
    cell_type: state.cell_type,
    organism: state.organism,
    // base_url: state.base_url;
  };
};

export const UploadButtonContainer = connect(
  mapStateToProps,
  null,
)(UploadButton);
