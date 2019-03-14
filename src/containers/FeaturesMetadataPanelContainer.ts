import { connect } from "react-redux";
import { FeaturesMetadataPanel } from "../components/Viewer/ControlPanel/SubPanels/FeaturesMetadataPanel";

export const mapStateToProps = (state: { chromosome: string, feature: string, organism: string, cell_type: string }) => {
  return {
    feature: state.feature,
    organism: state.organism,
    cell_type: state.cell_type,
  };
};

export const FeaturesMetadataPanelContainer = connect(
  mapStateToProps,
  null,
)(FeaturesMetadataPanel);
