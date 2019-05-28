import { CHANGED_FEATURES_LIST } from "../actions/index";

export const DEFAULT_FEATURES_LIST = [];

interface IFeaturesListAction {
  type?: string;
  features_list?: string[];
}

export const features_list_reducer = (state: string[] = DEFAULT_FEATURES_LIST, action: IFeaturesListAction) => {
  switch (action.type) {
    case CHANGED_FEATURES_LIST:
      if (action.features_list === undefined) {
        return DEFAULT_FEATURES_LIST;
      }
      return action.features_list;
    default:
      return state;
  }
};
