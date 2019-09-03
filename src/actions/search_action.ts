export const CHANGED_SEARCH = "CHANGED_SEARCH";

export const change_search = (search: string) => ({
  search,
  type: CHANGED_SEARCH
});
