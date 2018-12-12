import { connect } from 'react-redux'
import { change_gene, change_chromosome } from '../actions/index'
import { GenesPanel } from '../components/Viewer/ControlPanel/SubPanels/GenesPanel'

export const mapStateToProps = (state: {gene: string, chromosome: string}) => {
  return { gene: state.gene , chromosome: state.chromosome}
}

export const mapDispatchToProps = {
  onGeneChange: change_gene,
  onChromosomeChange: change_chromosome
}

export const GenesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GenesPanel)
