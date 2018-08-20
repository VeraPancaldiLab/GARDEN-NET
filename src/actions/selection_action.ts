import { ESELECTION } from '../reducers/selection_reducer'
export const CHANGED_SELECTION = 'CHANGED_SELECTION';

export const change_selection = (selection: ESELECTION) => ({
  type: CHANGED_SELECTION,
  selection: selection
})
