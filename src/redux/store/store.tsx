// import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { createStore, combineReducers } from 'redux';
import { getApiReducer } from '../getApi/reducers';
import { favoriteReducer } from '../favorites/reducers';

// const rootReducer = combineReducers({
//   favorite: favoriteReducer,
//   getApi: getApiReducer,
// });

// export default function createStore() {
//   return reduxCreateStore(
//     combineReducers({
//       favorite: favoriteReducer,
//       getApi: getApiReducer,
//     })
//   );
// }

const rootReducer = combineReducers({
  favoriteReducer,
  getApiReducer,
});

const store = createStore(rootReducer);

export default store;
