import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../components/Cards';
import style from './CardList.module.css';

const CardList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state: any) => state.fetchApiReducer);

  useEffect(() => {
    const getFilms = async () => {
      const res = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await res.json();

      dispatch({
        type: 'GET_FILM_DATA',
        payload: data,
      });
    };
    getFilms();
  }, [dispatch]);

  return (
    <ul className={style.cardContainer}>
      {films &&
        films.map((film: any, index: number) => (
          <li key={index} className={style.card}>
            <Cards film={film} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
