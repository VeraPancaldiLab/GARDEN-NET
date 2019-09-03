export const CHANGED_CELL_TYPE = "CHANGED_CELL_TYPE";

export const change_cell_type = (cell_type: string) => ({
  cell_type,
  type: CHANGED_CELL_TYPE
});
