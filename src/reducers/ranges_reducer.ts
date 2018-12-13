import { CHANGED_RANGE } from '../actions/index'
export const DEFAULT_RANGE = 'Choose';

interface IRangeAction {
  type?: string,
  range?: string
}

export const ranges_reducer = (state: string = DEFAULT_RANGE, action: IRangeAction) => {
  switch (action.type) {
    case CHANGED_RANGE:
      return action.range;
    default:
      return state;
  }
}
