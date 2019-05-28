import { connect } from "react-redux";
import { change_feature, change_features_list, change_features_metadata } from "../actions/index";
import { UploadButton } from "../components/Viewer/ControlPanel/SubPanels/UploadButton";

interface IFeatureMetadataMap {
  [key: string]: string;
}

interface IUploadProps {
  feature: string;
  features_list: string[];
  features_metadata: IFeatureMetadataMap;
  cell_type: string;
  organism: string;
}

export const mapStateToProps = (state: IUploadProps) => {
  return {
    cell_type: state.cell_type,
    feature: state.feature,
    features_list: state.features_list,
    features_metadata: state.features_metadata,
    organism: state.organism,
  };
};

export const mapDispatchToProps = {
  onFeatureChange: change_feature,
  onFeaturesListChange: change_features_list,
  onFeaturesMetadataChange: change_features_metadata,
};

export const UploadButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadButton);
