import { FilmData } from '../../Types/Types';
export const GET_API_DATA = 'GET_API_DATA';

export const getApiData = (film: FilmData) => {
  return {
    type: GET_API_DATA,
    payload: { film },
  };
};
