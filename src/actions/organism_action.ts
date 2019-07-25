export const CHANGED_ORGANISM = "CHANGED_ORGANISM";

export const change_organism = (organism: string) => ({
  type: CHANGED_ORGANISM,
  organism
});
