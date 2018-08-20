import { CHANGED_SELECTION } from '../actions/index'
export enum ESELECTION {
  NODE = 'NODE',
  EDGE = 'EDGE',
  BOTH = 'BOTH'
}
export const DEFAULT_SELECTION = ESELECTION.NODE;

interface ISelectionAction {
  type?: string,
  selection?: ESELECTION
}

export const selection_reducer = (state: ESELECTION = DEFAULT_SELECTION, action: ISelectionAction) => {
  switch (action.type) {
    case CHANGED_SELECTION:
      return action.selection;
    default:
      return state;
  }
}
