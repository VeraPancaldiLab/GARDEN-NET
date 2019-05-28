import { connect } from "react-redux";
import { change_features_metadata } from "../actions/index";
import { FeaturesMetadataPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesMetadataPanel";

interface IFeatureMetadataMap {
  [key: string]: string;
}

export const mapStateToProps = (state: { chromosome: string, feature: string, features_metadata: IFeatureMetadataMap, organism: string, cell_type: string }) => {
  return {
    feature: state.feature,
    features_metadata: state.features_metadata,
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
