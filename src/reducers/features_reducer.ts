import { CHANGED_FEATURE } from "../actions/index";

export const DEFAULT_FEATURE = "Choose";

interface IFeatureAction {
  type?: string;
  feature?: string;
}

export const features_reducer = (state: string = DEFAULT_FEATURE, action: IFeatureAction) => {
    switch (action.type) {
      case CHANGED_FEATURE:
        if (action.feature === undefined) {
          return DEFAULT_FEATURE
        }
        return action.feature;
      default:
        return state;
    }
};
