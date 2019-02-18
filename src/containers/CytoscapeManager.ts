import { connect } from "react-redux";
import { change_chromosome, change_download, change_search } from "../actions/index";
import { Cytoscape_manager } from "../components/Viewer/Cytoscape_manager";

interface ICytoscapeProps {
  chromosome: string;
  feature: string;
  download: string;
  search: string;
  organism: string;
  cell_type: string;
}

export const mapStateToProps = (state: ICytoscapeProps) => {
  return {
    chromosome: state.chromosome,
    feature: state.feature,
    download: state.download,
    search: state.search,
    organism: state.organism,
    cell_type: state.cell_type
  };
};

export const mapDispatchToProps = {
  onChromosomeChange: change_chromosome,
  onDownloadChange: change_download,
  onSearchChange: change_search,
};

export const CytoscapeManager = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cytoscape_manager);
