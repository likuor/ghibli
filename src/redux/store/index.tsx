import { createStore, combineReducers } from 'redux';
import { favoriteReducer } from '../favorites/favoriteReducer';
import { fetchApiReducer } from '../getApi/fetchApiReducer';

const rootReducer = combineReducers({
  favoriteReducer,
  fetchApiReducer,
});

const store = createStore(rootReducer);
// console.log(store.getState());

export default store;
