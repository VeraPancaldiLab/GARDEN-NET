export const CHANGED_FEATURE = 'CHANGED_FEATURE';

export const change_feature = (feature : string) => ({
  type: CHANGED_FEATURE,
  feature: feature
})
