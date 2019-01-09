export const CHANGED_CHROMOSOME = "CHANGED_CHROMOSOME";

export const change_chromosome = (chromosome: string) => ({
  type: CHANGED_CHROMOSOME,
  chromosome,
});
