import { connect } from 'react-redux'
import { change_gene, change_chromosome, change_range, change_text } from '../actions/index'
import { GenesPanel } from '../components/Viewer/ControlPanel/SubPanels/GenesPanel'

export const mapStateToProps = (state: {gene: string}) => {
  return { gene: state.gene}
}

export const mapDispatchToProps = {
  onGeneChange: change_gene,
  onChromosomeChange: change_chromosome,
  onRangeChange: change_range,
  onTextChange: change_text
}

export const GenesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenesPanel)
