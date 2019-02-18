import { CHANGED_CELL_TYPE } from "../actions/index";
export const DEFAULT_CELL_TYPE = "";

interface ICellTypeAction {
  type?: string;
  cell_type?: string;
}

export const cell_type_reducer = (state: string = DEFAULT_CELL_TYPE, action: ICellTypeAction) => {
  switch (action.type) {
    case CHANGED_CELL_TYPE:
      return action.cell_type;
    default:
      return state;
  }
};
