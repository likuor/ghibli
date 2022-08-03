import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FetchApi = () => {
  const films = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFilms = async () => {
      const res = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await res.json();

      data.forEach((element: any) => {
        element.color = 'gray';
      });

      dispatch({
        type: 'GET_API_DATA',
        payload: data,
      });
    };
    getFilms();
  }, [dispatch]);

  return films;
};

export default FetchApi;
