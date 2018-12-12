import { combineReducers } from 'redux'
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from './chromosomes_reducer'
import { features_reducer, DEFAULT_FEATURE } from './features_reducer'
import { download_reducer, DEFAULT_DOWNLOAD} from './download_reducer'
import { genes_reducer, DEFAULT_GENE} from './genes_reducer'

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer,
  download: download_reducer,
  gene: genes_reducer
})

export { root_reducers, features_reducer, chromosomes_reducer, download_reducer, genes_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE, DEFAULT_DOWNLOAD, DEFAULT_GENE}

