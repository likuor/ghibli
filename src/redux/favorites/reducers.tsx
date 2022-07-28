import * as Actions from './actions';
import initialState from '../store/initialState';

export const favoriteReducer = (
  state: any = initialState.favorites,
  action: any
) => {
  switch (action.type) {
    case Actions.ADD_FAVORITE:
      return (state = [...state, action.payload]);

    case 'REMOVE_FAVORITE':
      const filmKey = state.film.findIndex((element: any) => {
        return element.id === action.film.id;
      });
      state.film.splice(filmKey, 1);
      return state;

    default:
      return state;
  }
};
