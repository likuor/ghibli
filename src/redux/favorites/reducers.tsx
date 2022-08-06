import initialState from '../store/initialState';
import { FilmData } from '../../interface/Interface';
import { ADD_FAVORITE } from './actions';
import { REMOVE_FAVORITE } from './actions';

type Actions =
  | {
      type: string;
      payload: FilmData;
      color: 'red';
    }
  | {
      type: string;
      payload: FilmData;
      color: 'gray';
    };

type State = FilmData[];

export const favoriteReducer = (
  state: State = initialState.favorites,
  action: Actions
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      action.payload.color = action.color;
      return (state = [...state, action.payload]);

    case REMOVE_FAVORITE:
      const filmKey = state.findIndex((film) => {
        return film.id === action.payload.id;
      });
      state[filmKey].color = action.color;
      state.splice(filmKey, 1);
      return [...state];

    default:
      return state;
  }
};
