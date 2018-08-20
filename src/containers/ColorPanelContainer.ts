import { connect } from 'react-redux'
import { change_color } from '../actions/index'
import { ColorPanel } from '../components/Viewer/ControlPanel/SubPanels/ColorPanel'

export const mapStateToProps = (state: {color: string}) => {
  return { color: state.color }
}

export const mapDispatchToProps = {
  onColorChange: change_color
}

export const ColorPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPanel)
