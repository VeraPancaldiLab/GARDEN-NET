import { combineReducers } from 'redux'
import { size_reducer, DEFAULT_SIZE } from './size_reducer'
import { color_reducer, DEFAULT_COLOR } from './color_reducer'
import { selection_reducer, DEFAULT_SELECTION, ESELECTION } from './selection_reducer'

export { size_reducer, color_reducer, selection_reducer, DEFAULT_SIZE, DEFAULT_COLOR, DEFAULT_SELECTION, ESELECTION }

export const root_reducers = combineReducers({
  size: size_reducer,
  color: color_reducer,
  selection: selection_reducer
})
