import { connect } from "react-redux";
import { change_chromosome, change_gene, change_range, change_search, change_text } from "../actions/index";
import { SearchPanel } from "../components/SearchPanel";

export const mapStateToProps = (state: { search: string, text: string }) => {
  return {
    search: state.search,
    text: state.text,
  };
};

export const mapDispatchToProps = {
  onSearchChange: change_search,
  onTextChange: change_text,
  onGeneChange: change_gene,
  onChromosomeChange: change_chromosome,
  onRangeChange: change_range,
};

export const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanel);
