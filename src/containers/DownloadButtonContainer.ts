import { connect } from 'react-redux'
import { DownloadButton } from '../components/Viewer/ControlPanel/SubPanels/DownloadButton'

interface IDownloadProps {
  download: string
}

export const mapStateToProps = (state: IDownloadProps) => {
  return {
    download: state.download
  }
}

export const DownloadButtonContainer = connect(
  mapStateToProps,
  null
)(DownloadButton)
