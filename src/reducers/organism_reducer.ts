import { CHANGED_ORGANISM } from "../actions/index";
export const DEFAULT_ORGANISM = "";

interface IOrganismAction {
  type?: string;
  organism?: string;
}

export const organism_reducer = (state: string = DEFAULT_ORGANISM, action: IOrganismAction) => {
  switch (action.type) {
    case CHANGED_ORGANISM:
      return action.organism;
    default:
      return state;
  }
};
