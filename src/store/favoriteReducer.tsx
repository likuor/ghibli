export const favoriteReducer = (
  state: any = {
    film: [],
  },
  action: any
) => {
  // console.log(state);
  switch (action.type) {
    case 'ADD':
      state.film.push(action.film);
      return state;

    case 'REMOVE':
      const filmKey = state.film.findIndex((element: any) => {
        return element.id === action.film.id;
      });
      state.film.splice(filmKey, 1);
      return state;

    default:
      return state;
  }
};
