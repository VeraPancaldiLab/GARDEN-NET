import { connect } from "react-redux";
import { change_download, change_search } from "../actions/index";
import { Cytoscape_manager } from "../components/Viewer/Cytoscape_manager";

interface ICytoscapeProps {
  chromosome: string;
  feature: string;
  download: string;
  gene: string;
  range: string;
  search: string;
}

export const mapStateToProps = (state: ICytoscapeProps) => {
  return {
    chromosome: state.chromosome,
    feature: state.feature,
    download: state.download,
    gene: state.gene,
    range: state.range,
    search: state.search,
  };
};

export const mapDispatchToProps = {
  onDownloadChange: change_download,
  onSearchChange: change_search,
};

export const CytoscapeManager = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cytoscape_manager);
