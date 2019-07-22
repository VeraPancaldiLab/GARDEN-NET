export const CHANGED_CELL_TYPE = "CHANGED_CELL_TYPE";

export const change_cell_type = (cell_type: string) => ({
  type: CHANGED_CELL_TYPE,
  cell_type
});
