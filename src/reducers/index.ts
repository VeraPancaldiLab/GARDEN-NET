import { combineReducers } from "redux";
import { cell_type_reducer, DEFAULT_CELL_TYPE } from "./cell_type_reducer";
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from "./chromosomes_reducer";
import { DEFAULT_FEATURES_LIST, features_list_reducer } from "./features_list_reducer";
import { DEFAULT_FEATURES_METADATA, features_metadata_reducer } from "./features_metadata_reducer";
import { DEFAULT_FEATURES_NEW, features_new_reducer } from "./features_new_reducer";
import { DEFAULT_FEATURE, features_reducer } from "./features_reducer";
import { DEFAULT_ORGANISM, organism_reducer } from "./organism_reducer";
import { DEFAULT_SEARCH, search_reducer } from "./search_reducer";
import { DEFAULT_TEXT, text_reducer } from "./text_reducer";

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer,
  features_list: features_list_reducer,
  features_metadata: features_metadata_reducer,
  features_new: features_new_reducer,
  search: search_reducer,
  text: text_reducer,
  organism: organism_reducer,
  cell_type: cell_type_reducer,
});

export { root_reducers, features_reducer, features_list_reducer, features_metadata_reducer, features_new_reducer, chromosomes_reducer, search_reducer, text_reducer, organism_reducer, cell_type_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE, DEFAULT_FEATURES_LIST, DEFAULT_FEATURES_METADATA, DEFAULT_FEATURES_NEW, DEFAULT_SEARCH, DEFAULT_TEXT, DEFAULT_ORGANISM, DEFAULT_CELL_TYPE };
