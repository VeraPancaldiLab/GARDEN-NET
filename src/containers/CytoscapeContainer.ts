import { connect } from 'react-redux'
import { change_download } from '../actions/index'
import { Cytoscape } from '../components/Viewer/Cytoscape'

interface ICytoscapeProps {
  chromosome: string,
  feature: string,
    download: string,
    gene: string,
    range: string,
    search: string
}

export const mapStateToProps = (state: ICytoscapeProps) => {
  return {
   chromosome: state.chromosome,
   feature: state.feature,
    download: state.download,
    gene: state.gene,
    range: state.range,
    search: state.search
  }
}

export const mapDispatchToProps = {
  onDownloadChange: change_download
}

export const Cytoscape_container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cytoscape)
