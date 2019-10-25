export const CHANGED_FEATURES_METADATA = "CHANGED_FEATURES_METADATA";

interface IFeatureMetadataMap {
  [key: string]: string;
}

export const change_features_metadata = (
  features_metadata: IFeatureMetadataMap
) => ({
  features_metadata,
  type: CHANGED_FEATURES_METADATA
});
