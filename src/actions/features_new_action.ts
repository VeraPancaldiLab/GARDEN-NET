export const CHANGED_FEATURES_NEW = "CHANGED_FEATURES_NEW";

interface IFeatureNewMap {
  [key: string]: number;
}

export const change_features_new = (features_new: IFeatureNewMap) => ({
  type: CHANGED_FEATURES_NEW,
  features_new,
});
