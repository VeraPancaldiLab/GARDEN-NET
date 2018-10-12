import { CHANGED_CHROMOSOME } from '../actions/index'
export const DEFAULT_CHROMOSOME = '1';

interface IChromosomeAction {
  type?: string,
  chromosome?: string
}

export const chromosomes_reducer = (state: string = DEFAULT_CHROMOSOME, action: IChromosomeAction) => {
  switch (action.type) {
    case CHANGED_CHROMOSOME:
      return action.chromosome;
    default:
      return state;
  }
}
