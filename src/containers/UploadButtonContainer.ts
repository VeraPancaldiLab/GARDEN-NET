import { connect } from "react-redux";
import { change_feature, change_features_list, change_features_metadata, change_features_new } from "../actions/index";
import { UploadButton } from "../components/Viewer/ControlPanel/SubPanels/UploadButton";

interface IFeatureMetadataMap {
  [key: string]: string;
}

interface IFeatureNewMap {
  [key: string]: number;
}

interface IUploadProps {
  feature: string;
  features_list: string[];
  features_metadata: IFeatureMetadataMap;
  features_new: IFeatureNewMap;
  cell_type: string;
  organism: string;
}

export const mapStateToProps = (state: IUploadProps) => {
  return {
    cell_type: state.cell_type,
    feature: state.feature,
    features_list: state.features_list,
    features_metadata: state.features_metadata,
    features_new: state.features_new,
    organism: state.organism,
  };
};

export const mapDispatchToProps = {
  onFeatureChange: change_feature,
  onFeaturesListChange: change_features_list,
  onFeaturesMetadataChange: change_features_metadata,
  onFeaturesNewChange: change_features_new,
};

export const UploadButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadButton);
