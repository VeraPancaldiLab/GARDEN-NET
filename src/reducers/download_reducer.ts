import { CHANGED_DOWNLOAD } from '../actions/index'

export const DEFAULT_DOWNLOAD = '';

interface IDownloadAction {
  type?: string,
  download?: string
}

export const download_reducer = (state : string = DEFAULT_DOWNLOAD, action : IDownloadAction) => {
  switch (action.type) {
    case CHANGED_DOWNLOAD:
      return action.download;
    default:
      return state;
  }
}
