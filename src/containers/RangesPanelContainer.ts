import { connect } from 'react-redux'
import { change_gene, change_chromosome, change_range } from '../actions/index'
import { RangesPanel } from '../components/Viewer/ControlPanel/SubPanels/RangesPanel'

export const mapStateToProps = (state: {range: string}) => {
  return { range: state.range}
}

export const mapDispatchToProps = {
  onGeneChange: change_gene,
  onChromosomeChange: change_chromosome,
  onRangeChange: change_range
}

export const RangesPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangesPanel)
