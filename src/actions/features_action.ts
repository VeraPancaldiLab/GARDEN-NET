export const CHANGED_FEATURE = "CHANGED_FEATURE";

export const change_feature = (feature: string) => ({
  feature,
  type: CHANGED_FEATURE
});
