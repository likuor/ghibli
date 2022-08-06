import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilmData } from '../interface/Interface';

const FetchApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFilms = async () => {
      const res = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await res.json();

      data.forEach((film: FilmData) => {
        film.color = 'gray';
      });

      dispatch({
        type: 'GET_API_DATA',
        payload: data,
      });
    };
    getFilms();
  }, [dispatch]);
};

export default FetchApi;
