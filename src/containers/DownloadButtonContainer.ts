import { connect } from 'react-redux'
import { change_chromosome } from '../actions/index'
import { DownloadButton } from '../components/Viewer/ControlPanel/SubPanels/DownloadButton'

export const mapStateToProps = (state: {chromosome: string}) => {
  return { chromosome: state.chromosome }
}

export const DownloadButtonContainer = connect(
  mapStateToProps,
  null
)(DownloadButton)
