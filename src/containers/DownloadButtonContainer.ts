import { connect } from 'react-redux'
import { DownloadButton } from '../components/Viewer/ControlPanel/SubPanels/DownloadButton'

interface IDownloadProps {
  download: string
  feature: string
}

export const mapStateToProps = (state: IDownloadProps) => {
  return {
    download: state.download,
    feature: state.feature
  }
}

export const DownloadButtonContainer = connect(
  mapStateToProps,
  null
)(DownloadButton)
