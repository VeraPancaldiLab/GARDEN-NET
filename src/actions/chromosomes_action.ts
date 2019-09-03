export const CHANGED_CHROMOSOME = "CHANGED_CHROMOSOME";

export const change_chromosome = (chromosome: string) => ({
  chromosome,
  type: CHANGED_CHROMOSOME
});
