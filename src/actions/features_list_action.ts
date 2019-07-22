export const CHANGED_FEATURES_LIST = "CHANGED_FEATURES_LIST";

export const change_features_list = (features_list: string[]) => ({
  type: CHANGED_FEATURES_LIST,
  features_list
});
