import { connect } from "react-redux";
import { change_feature } from "../actions/index";
import { FeaturesPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesPanel";

export const mapStateToProps = (state: { feature: string }) => {
  return { feature: state.feature };
};

export const mapDispatchToProps = {
  onFeatureChange: change_feature,
};

export const FeaturesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesPanel);
