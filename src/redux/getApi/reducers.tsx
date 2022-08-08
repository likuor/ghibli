import initialState from '../store/initialState';
import { FilmData } from '../../Types/Types';
import { GET_API_DATA } from './actions';

type Action = {
  type: string;
  payload: FilmData[];
};

type State = FilmData[];

export const getApiReducer = (
  state: State = initialState.getApi,
  action: Action
) => {
  switch (action.type) {
    case GET_API_DATA:
      return [...action.payload];

    default:
      return state;
  }
};
