export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (film: any) => {
  return {
    type: 'ADD_FAVORITE',
    payload: { film },
    color: 'red',
  };
};

export const removeFavorite = (film: any) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: { film },
    color: 'gray',
  };
};
