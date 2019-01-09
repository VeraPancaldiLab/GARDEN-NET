export const CHANGED_GENE = "CHANGED_GENE";

export const change_gene = (gene: string) => ({
  type: CHANGED_GENE,
  gene,
});
