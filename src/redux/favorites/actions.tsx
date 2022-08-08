import { FilmData } from '../../Types/Types';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (film: FilmData) => {
  return {
    type: ADD_FAVORITE,
    payload: { film },
  };
};

export const removeFavorite = (film: FilmData) => {
  return {
    type: REMOVE_FAVORITE,
    payload: { film },
  };
};
