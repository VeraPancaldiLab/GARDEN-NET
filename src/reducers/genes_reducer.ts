import { CHANGED_GENE } from '../actions/index'
export const DEFAULT_GENE = 'Choose';

interface IGeneAction {
  type?: string,
  gene?: string
}

export const genes_reducer = (state: string = DEFAULT_GENE, action: IGeneAction) => {
  switch (action.type) {
    case CHANGED_GENE:
      return action.gene;
    default:
      return state;
  }
}
