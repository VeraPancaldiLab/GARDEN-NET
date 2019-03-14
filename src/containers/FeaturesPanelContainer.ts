import { connect } from "react-redux";
import { change_feature } from "../actions/index";
import { FeaturesPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesPanel";

export const mapStateToProps = (state: { chromosome: string, feature: string, organism: string, cell_type: string }) => {
  return {
    feature: state.feature,
    chromosome: state.chromosome,
    organism: state.organism,
    cell_type: state.cell_type,
  };
};

export const mapDispatchToProps = {
  onFeatureChange: change_feature,
};

export const FeaturesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesPanel);
