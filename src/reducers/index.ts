import { combineReducers } from "redux";
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from "./chromosomes_reducer";
import { DEFAULT_DOWNLOAD, download_reducer } from "./download_reducer";
import { DEFAULT_FEATURE, features_reducer } from "./features_reducer";
import { DEFAULT_GENE, genes_reducer } from "./genes_reducer";
import { DEFAULT_RANGE, ranges_reducer } from "./ranges_reducer";
import { DEFAULT_SEARCH, search_reducer } from "./search_reducer";
import { DEFAULT_TEXT, text_reducer } from "./text_reducer";

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer,
  download: download_reducer,
  gene: genes_reducer,
  range: ranges_reducer,
  search: search_reducer,
  text: text_reducer,
});

export { root_reducers, features_reducer, chromosomes_reducer, download_reducer, genes_reducer, ranges_reducer, search_reducer, text_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE, DEFAULT_DOWNLOAD, DEFAULT_GENE, DEFAULT_RANGE, DEFAULT_SEARCH, DEFAULT_TEXT };
