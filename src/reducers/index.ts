import { combineReducers } from 'redux'
import { chromosomes_reducer, DEFAULT_CHROMOSOME } from './chromosomes_reducer'
import { features_reducer, DEFAULT_FEATURE } from './features_reducer'

export { chromosomes_reducer, features_reducer, DEFAULT_CHROMOSOME, DEFAULT_FEATURE }

export const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer
})
