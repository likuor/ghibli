import initialState from '../store/initialState';
import { FilmData } from '../../Types/Types';
import { SEARCH_FILM } from './actions';

type Action = {
  type: string;
  payload: FilmData[];
};

type State = FilmData[];

export const searchReducer = (
  state: State = initialState.search,
  action: Action
) => {
  switch (action.type) {
    case SEARCH_FILM:
      return [...action.payload];

    default:
      return state;
  }
};
