import { createStore, combineReducers } from 'redux';
import { getApiReducer } from '../getApi/reducers';
import { searchFilm } from '../searchResult/reducers';
import { favoriteReducer } from '../favorites/reducers';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  api: getApiReducer,
  search: searchFilm,
});

const store = createStore(rootReducer);

export default store;
