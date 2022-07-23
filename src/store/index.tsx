import { createStore, combineReducers } from 'redux';
import { favoriteReducer } from './favoriteReducer';
import { likeReducer } from './likeReducer';

const rootReducer = combineReducers({
  favoriteReducer,
  likeReducer,
});

const store = createStore(rootReducer);
// console.log(store.getState());

export default store;
