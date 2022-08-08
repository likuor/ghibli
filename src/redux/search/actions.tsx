import { FilmData } from '../../Types/Types';
export const SEARCH_FILM = 'SEARCH_FILM';

export const searchFilm = (film: FilmData) => {
  return {
    type: SEARCH_FILM,
    payload: { film },
  };
};
