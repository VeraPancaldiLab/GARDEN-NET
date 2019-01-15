import { CHANGED_FEATURE } from "../actions/index";

export const DEFAULT_FEATURE = "EZH2";

interface IFeatureAction {
  type?: string;
  feature?: string;
}

export const features_reducer = (state: string = DEFAULT_FEATURE, action: IFeatureAction) => {
  switch (action.type) {
    case CHANGED_FEATURE:
      return action.feature;
    default:
      return state;
  }
};
