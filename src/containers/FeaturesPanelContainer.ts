import { connect } from "react-redux";
import { change_feature, change_features_list } from "../actions/index";
import { FeaturesPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesPanel";

export const mapStateToProps = (state: {
  chromosome: string;
  feature: string;
  features_list: string[];
  organism: string;
  cell_type: string;
}) => {
  return {
    cell_type: state.cell_type,
    chromosome: state.chromosome,
    feature: state.feature,
    features_list: state.features_list,
    organism: state.organism
  };
};

export const mapDispatchToProps = {
  onFeatureChange: change_feature,
  onFeaturesListChange: change_features_list
};

export const FeaturesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturesPanel);
