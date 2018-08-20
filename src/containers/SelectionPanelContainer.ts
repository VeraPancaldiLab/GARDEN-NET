import { connect } from 'react-redux'
import { change_selection } from '../actions/index'
import { ESELECTION } from '../reducers/index'
import { SelectionPanel } from '../components/Viewer/ControlPanel/SubPanels/SelectionPanel'

export const mapStateToProps = (state: {selection: ESELECTION}) => {
  return { selection: state.selection}
}

export const mapDispatchToProps = {
  onSelectionChange: change_selection
}

export const SelectionPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionPanel)
