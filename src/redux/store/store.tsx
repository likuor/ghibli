import { createStore, combineReducers } from 'redux';
import { getApiReducer } from '../getApi/reducers';
import { searchReducer } from '../search/reducers';
import { favoriteReducer } from '../favorites/reducers';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  api: getApiReducer,
  search: searchReducer,
});

const store = createStore(rootReducer);

export default store;
