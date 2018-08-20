import { connect } from 'react-redux'
import { change_size } from '../actions/index'
import { SizePanel } from '../components/Viewer/ControlPanel/SubPanels/SizePanel'

export const mapStateToProps = (state: {size: number}) => {
  return { size: state.size }
}

export const mapDispatchToProps = {
  onSizeChange: change_size
}

export const SizePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SizePanel)
