import { combineReducers } from 'redux'
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from './chromosomes_reducer'
import { features_reducer, DEFAULT_FEATURE } from './features_reducer'
import { download_reducer, DEFAULT_DOWNLOAD} from './download_reducer'
import { genes_reducer, DEFAULT_GENE} from './genes_reducer'
import { ranges_reducer, DEFAULT_RANGE} from './ranges_reducer'
import { search_reducer, DEFAULT_SEARCH} from './search_reducer'
import { text_reducer, DEFAULT_TEXT} from './text_reducer'

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer,
  download: download_reducer,
  gene: genes_reducer,
  range: ranges_reducer,
  search: search_reducer,
  text: text_reducer
})

export { root_reducers, features_reducer, chromosomes_reducer, download_reducer, genes_reducer, ranges_reducer, search_reducer, text_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE, DEFAULT_DOWNLOAD, DEFAULT_GENE, DEFAULT_RANGE, DEFAULT_SEARCH, DEFAULT_TEXT }

