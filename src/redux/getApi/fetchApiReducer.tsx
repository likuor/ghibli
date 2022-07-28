export const fetchApiReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case 'GET_FILM_DATA':
      return [...action.payload];

    default:
      return state;
  }
};
