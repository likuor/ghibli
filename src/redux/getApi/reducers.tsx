import * as Actions from './actions';
import initialState from '../store/initialState';

export const getApiReducer = (
  state: any = initialState.getApi,
  action: any
) => {
  switch (action.type) {
    case Actions.GET_API_DATA:
      return [...action.payload];

    default:
      return state;
  }
};
