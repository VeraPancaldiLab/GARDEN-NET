export const CHANGED_DOWNLOAD = "CHANGED_DOWNLOAD";

export const change_download = (download: string) => ({
  type: CHANGED_DOWNLOAD,
  download,
});
