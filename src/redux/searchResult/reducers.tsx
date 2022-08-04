import * as Actions from './actions';
import initialState from '../store/initialState';

export const searchFilm = (state: any = initialState.getApi, action: any) => {
  switch (action.type) {
    case Actions.SEARCH_FILM:
      return [...action.payload];

    default:
      return state;
  }
};
