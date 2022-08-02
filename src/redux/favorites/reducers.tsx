import * as Actions from './actions';
import initialState from '../store/initialState';

export const favoriteReducer = (
  state: any = initialState.favorites,
  action: any
) => {
  switch (action.type) {
    case Actions.ADD_FAVORITE:
      return (state = [...state, action.payload]);

    case Actions.REMOVE_FAVORITE:
      const filmKey = state.findIndex((element: any) => {
        return element.id === action.payload.id;
      });
      state.splice(filmKey, 1);
      return state;

    default:
      return state;
  }
};
