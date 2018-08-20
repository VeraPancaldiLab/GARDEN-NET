import { CHANGED_SIZE } from '../actions/index'
export const DEFAULT_SIZE = 25;

interface ISizeAction {
  type?: string,
  size?: number
}

export const size_reducer = (state: number = DEFAULT_SIZE , action: ISizeAction) => {
  switch (action.type) {
    case CHANGED_SIZE:
      return action.size;
    default:
      return state;
  }
}
