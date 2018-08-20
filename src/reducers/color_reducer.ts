import { CHANGED_COLOR } from '../actions/color_action'
export const DEFAULT_COLOR = '#000000';

interface IColorAction {
  type?: string,
  color?: string
}

export const color_reducer = (state: string = DEFAULT_COLOR , action: IColorAction) => {
  switch (action.type) {
    case CHANGED_COLOR:
      return action.color;
    default:
      return state;
  }
}
