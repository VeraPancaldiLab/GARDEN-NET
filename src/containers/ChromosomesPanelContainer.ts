import { connect } from 'react-redux'
import { change_chromosome, change_gene } from '../actions/index'
import { ChromosomesPanel } from '../components/Viewer/ControlPanel/SubPanels/ChromosomesPanel'

export const mapStateToProps = (state: {chromosome: string}) => {
  return { chromosome: state.chromosome }
}

export const mapDispatchToProps = {
  onChromosomeChange: change_chromosome,
  onGeneChange: change_gene
}

export const ChromosomesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChromosomesPanel)
