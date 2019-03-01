import { connect } from "react-redux";
import { MetadataPanel } from "../components/Header/MetadataPanel";

export const mapStateToProps = (state: { chromosome: string, organism: string, cell_type: string }) => {
  return {
    chromosome: state.chromosome,
    cell_type: state.cell_type,
    organism: state.organism,
  };
};

export const MetadataPanelContainer = connect(
  mapStateToProps,
  null,
)(MetadataPanel);
