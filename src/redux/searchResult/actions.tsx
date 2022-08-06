import { FilmData } from '../../interface/Interface';
export const SEARCH_FILM = 'SEARCH_FILM';

export const searchFilm = (film: FilmData) => {
  return {
    type: SEARCH_FILM,
    payload: { film },
  };
};
