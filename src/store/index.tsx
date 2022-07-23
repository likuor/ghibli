import { createStore, combineReducers } from 'redux';
import { favoriteReducer } from './favoriteReducer';
import { likeReducer } from './likeReducer';
import { fetchApiReducer } from './fetchApiReducer';

const rootReducer = combineReducers({
  favoriteReducer,
  likeReducer,
  fetchApiReducer,
});

const store = createStore(rootReducer);
// console.log(store.getState());

export default store;
