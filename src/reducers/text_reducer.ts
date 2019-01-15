import { CHANGED_TEXT } from "../actions/index";

export const DEFAULT_TEXT = "";

interface ITextAction {
  type?: string;
  text?: string;
}

export const text_reducer = (state: string = DEFAULT_TEXT, action: ITextAction) => {
  switch (action.type) {
    case CHANGED_TEXT:
      return action.text;
    default:
      return state;
  }
};
