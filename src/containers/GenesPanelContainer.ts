import { connect } from "react-redux";
import { change_chromosome, change_gene, change_range } from "../actions/index";
import { GenesPanel } from "../components/Viewer/ControlPanel/SubPanels/GenesPanel";

export const mapStateToProps = (state: { gene: string }) => {
  return { gene: state.gene };
};

export const mapDispatchToProps = {
  onGeneChange: change_gene,
  onChromosomeChange: change_chromosome,
  onRangeChange: change_range,
};

export const GenesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenesPanel);
