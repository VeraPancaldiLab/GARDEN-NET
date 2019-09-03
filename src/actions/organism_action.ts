export const CHANGED_ORGANISM = "CHANGED_ORGANISM";

export const change_organism = (organism: string) => ({
  organism,
  type: CHANGED_ORGANISM
});
