import { CHANGED_FEATURES_NEW } from "../actions/index";

export const DEFAULT_FEATURES_NEW: IFeatureNewMap = {};

interface IFeatureNewMap {
  [key: string]: number;
}

interface IFeaturesNewAction {
  type?: string;
  features_new?: IFeatureNewMap;
}

export const features_new_reducer = (state: IFeatureNewMap = DEFAULT_FEATURES_NEW, action: IFeaturesNewAction) => {
  switch (action.type) {
    case CHANGED_FEATURES_NEW:
      if (action.features_new === undefined) {
        return DEFAULT_FEATURES_NEW;
      }
      return action.features_new;
    default:
      return state;
  }
};
