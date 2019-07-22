import { connect } from "react-redux";
import { Cytoscape } from "../components/Viewer/Cytoscape";

interface ICytoscapeProps {
  chromosome: string;
  feature: string;
  search: string;
}

export const mapStateToProps = (state: ICytoscapeProps) => {
  return {
    chromosome: state.chromosome,
    feature: state.feature,
    search: state.search
  };
};

export const Cytoscape_container = connect(
  mapStateToProps,
  null
)(Cytoscape);
