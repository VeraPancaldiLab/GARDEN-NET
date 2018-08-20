import { connect } from 'react-redux'
import { Cytoscape } from '../components/Viewer/Cytoscape'
import { ESELECTION } from '../reducers/index'

export const mapStateToProps = (state: {size: number, color: string, selection: ESELECTION}) => {
  return { size: state.size, color: state.color, selection: state.selection }
}

export const Cytoscape_container = connect(
  mapStateToProps,
  null
)(Cytoscape)
