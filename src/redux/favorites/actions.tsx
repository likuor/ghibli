interface FilmData {
  color: string;
  description: string;
  director: string;
  id: string;
  image: string;
  locations: string;
  movie_banner: string;
  original_title: string;
  original_title_romanised: string;
  people: string[];
  release_date: string;
  rt_score: string;
  running_time: string;
  species: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export const addFavorite = (film: FilmData) => {
  return {
    type: 'ADD_FAVORITE',
    payload: { film },
  };
};

export const removeFavorite = (film: FilmData) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: { film },
  };
};
