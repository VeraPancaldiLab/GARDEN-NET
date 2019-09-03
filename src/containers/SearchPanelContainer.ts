import { connect } from "react-redux";
import {
  change_chromosome,
  change_search,
  change_text
} from "../actions/index";
import { SearchPanel } from "../components/SearchPanel";

interface ISearchProps {
  search: string;
  text: string;
  organism: string;
  cell_type: string;
}

export const mapStateToProps = (state: ISearchProps) => {
  return {
    cell_type: state.cell_type,
    organism: state.organism,
    search: state.search,
    text: state.text
  };
};

export const mapDispatchToProps = {
  onSearchChange: change_search,
  onTextChange: change_text,
  onChromosomeChange: change_chromosome
};

export const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
