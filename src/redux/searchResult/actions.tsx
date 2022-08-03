export const SEARCH_FILM = 'SEARCH_FILM';

export const searchFilm = (films: any) => {
  return {
    type: 'SEARCH_FILM',
    payload: { films },
  };
};
