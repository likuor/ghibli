export const ADD_FAVORITE = 'ADD_FAVORITE';

export const addFavorite = (userState: any) => {
  return {
    type: 'ADD_FAVORITE',
    payload: { userState },
  };
};
