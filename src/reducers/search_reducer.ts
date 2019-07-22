import { CHANGED_SEARCH } from "../actions/index";

export const DEFAULT_SEARCH = "";

interface ISearchAction {
  type?: string;
  search?: string;
}

export const search_reducer = (
  state: string = DEFAULT_SEARCH,
  action: ISearchAction
) => {
  switch (action.type) {
    case CHANGED_SEARCH:
      return action.search;
    default:
      return state;
  }
};
