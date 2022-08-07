import { FC } from 'react';
import Cards from '../components/Cards';
import style from '../pages/CardList.module.css';
import { useSelector } from 'react-redux';
import { FilmData, reduxDataObj } from '../interface/Interface';

const AllMovies: FC = () => {
  const reduxData: reduxDataObj = useSelector((state: reduxDataObj) => state);

  const renderFilms = () => {
    return reduxData && reduxData.search.length !== 0
      ? reduxData.search.map((film: FilmData, index: number) => (
          <li key={index} className={style.cardList}>
            <Cards film={film} color={film.color} />
          </li>
        ))
      : reduxData.api.map((film: FilmData, index: number) => (
          <li key={index} className={style.cardList}>
            <Cards film={film} color={film.color} />
          </li>
        ));
  };

  return <ul className={style.cardListContainer}>{renderFilms()}</ul>;
};

export default AllMovies;
