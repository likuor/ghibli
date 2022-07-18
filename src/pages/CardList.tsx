import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import style from './CardList.module.css';
import FetchApi from '../helper/FetchApi';

const CardList = () => {
  const [films, setFilms] = useState<any>([]);

  useEffect(() => {
    FetchApi()
      .then((data) => {
        setFilms(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }, []);

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
