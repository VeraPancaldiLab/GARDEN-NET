import { combineReducers } from "redux";
import { cell_type_reducer, DEFAULT_CELL_TYPE } from "./cell_type_reducer";
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from "./chromosomes_reducer";
import { DEFAULT_DOWNLOAD, download_reducer } from "./download_reducer";
import { DEFAULT_FEATURE, features_reducer } from "./features_reducer";
import { DEFAULT_ORGANISM, organism_reducer } from "./organism_reducer";
import { DEFAULT_SEARCH, search_reducer } from "./search_reducer";
import { DEFAULT_TEXT, text_reducer } from "./text_reducer";

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer,
  download: download_reducer,
  search: search_reducer,
  text: text_reducer,
  organism: organism_reducer,
  cell_type: cell_type_reducer,
});

export { root_reducers, features_reducer, chromosomes_reducer, download_reducer, search_reducer, text_reducer, organism_reducer, cell_type_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE, DEFAULT_DOWNLOAD, DEFAULT_SEARCH, DEFAULT_TEXT, DEFAULT_ORGANISM, DEFAULT_CELL_TYPE };
