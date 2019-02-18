import { connect } from "react-redux";
import { change_organism, change_cell_type } from "../actions/index";
import { Frontend } from "../components/Frontend";

export const mapStateToProps = (state: { organism: string, cell_type: string }) => {
  return {
    cell_type: state.cell_type,
    organism: state.organism,
  };
};

export const mapDispatchToProps = {
  onCellTypeChange: change_cell_type,
  onOrganismChange: change_organism,
};

export const FrontendContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Frontend);
