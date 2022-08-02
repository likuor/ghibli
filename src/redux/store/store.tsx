import { createStore, combineReducers } from 'redux';
import { getApiReducer } from '../getApi/reducers';
import { favoriteReducer } from '../favorites/reducers';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  api: getApiReducer,
});

const store = createStore(rootReducer);

export default store;
