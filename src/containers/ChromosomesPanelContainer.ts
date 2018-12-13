import { connect } from 'react-redux'
import { change_chromosome, change_gene, change_range, change_text } from '../actions/index'
import { ChromosomesPanel } from '../components/Viewer/ControlPanel/SubPanels/ChromosomesPanel'

export const mapStateToProps = (state: {chromosome: string}) => {
  return { chromosome: state.chromosome }
}

export const mapDispatchToProps = {
  onChromosomeChange: change_chromosome,
  onGeneChange: change_gene,
  onRangeChange: change_range,
  onTextChange: change_text
}

export const ChromosomesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChromosomesPanel)
