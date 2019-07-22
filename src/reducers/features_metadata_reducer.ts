import { CHANGED_FEATURES_METADATA } from "../actions/index";

export const DEFAULT_FEATURES_METADATA: IFeatureMetadataMap = {};

interface IFeatureMetadataMap {
  [key: string]: string;
}

interface IFeaturesMetadataAction {
  type?: string;
  features_metadata?: IFeatureMetadataMap;
}

export const features_metadata_reducer = (
  state: IFeatureMetadataMap = DEFAULT_FEATURES_METADATA,
  action: IFeaturesMetadataAction
) => {
  switch (action.type) {
    case CHANGED_FEATURES_METADATA:
      if (action.features_metadata === undefined) {
        return DEFAULT_FEATURES_METADATA;
      }
      return action.features_metadata;
    default:
      return state;
  }
};
