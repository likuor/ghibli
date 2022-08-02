export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (userState: any) => {
  return {
    type: 'ADD_FAVORITE',
    payload: { userState },
  };
};

export const removeFavorite = (userState: any) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: { userState },
  };
};
