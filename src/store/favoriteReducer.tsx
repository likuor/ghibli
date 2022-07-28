export const favoriteReducer = (
  state: any = {
    film: [],
  },
  action: any
) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      state.film = [...state.film, action.film];
      return state;

    case 'REMOVE_FAVORITE':
      const filmKey = state.film.findIndex((element: any) => {
        return element.id === action.film.id;
      });
      state.film.splice(filmKey, 1);
      return state;

    default:
      return state;
  }
};
