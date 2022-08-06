import initialState from '../store/initialState';

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

type Actions =
  | {
      type: 'ADD_FAVORITE';
      payload: FilmData;
      color: 'red';
    }
  | {
      type: 'REMOVE_FAVORITE';
      payload: FilmData;
      color: 'gray';
    };

type State = FilmData[];

export const favoriteReducer = (
  state: State = initialState.favorites,
  action: Actions
) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      action.payload.color = action.color;
      return (state = [...state, action.payload]);

    case 'REMOVE_FAVORITE':
      const filmKey = state.findIndex((film) => {
        return film.id === action.payload.id;
      });
      state[filmKey].color = action.color;
      state.splice(filmKey, 1);
      return [...state];

    default:
      return state;
  }
};
