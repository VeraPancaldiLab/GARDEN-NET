import { connect } from "react-redux";
import { change_features_metadata } from "../actions/index";
import { FeaturesMetadataPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesMetadataPanel";

interface IFeatureMetadataMap {
  [key: string]: string;
}

interface IFeatureNewMap {
  [key: string]: number;
}

export const mapStateToProps = (state: { chromosome: string, feature: string, features_metadata: IFeatureMetadataMap, features_new: IFeatureNewMap, organism: string, cell_type: string }) => {
  return {
    feature: state.feature,
    features_metadata: state.features_metadata,
    features_new: state.features_new,
    organism: state.organism,
    cell_type: state.cell_type,
  };
};

export const mapDispatchToProps = {
  onFeaturesMetadataChange: change_features_metadata,
};

export const FeaturesMetadataPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesMetadataPanel);
