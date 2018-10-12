import { connect } from 'react-redux'
import { Cytoscape } from '../components/Viewer/Cytoscape'

export const mapStateToProps = (state: {chromosome: string , feature: string}) => {
  return {
   chromosome: state.chromosome,
   feature: state.feature }
}

export const Cytoscape_container = connect(
  mapStateToProps,
  null
)(Cytoscape)
