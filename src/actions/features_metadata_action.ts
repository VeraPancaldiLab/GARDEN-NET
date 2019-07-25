export const CHANGED_FEATURES_METADATA = "CHANGED_FEATURES_METADATA";

interface IFeatureMetadataMap {
  [key: string]: string;
}

export const change_features_metadata = (
  features_metadata: IFeatureMetadataMap
) => ({
  type: CHANGED_FEATURES_METADATA,
  features_metadata
});
