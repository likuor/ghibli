import { FC } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
import style from '../components/styles/MovieSection.module.css';
import { FilmData, reduxDataObj } from '../Types/Types';

const Favorite: FC = () => {
  const favoriteData = useSelector((state: reduxDataObj) => state.favorites);

  const renderFavorites = () => {
    return (
      favoriteData &&
      favoriteData.map((film: FilmData, index: number) => (
        <li key={index} className={style.cardList}>
          <Cards film={film} color={film.color} />
        </li>
      ))
    );
  };

  return <ul className={style.cardListContainer}>{renderFavorites()}</ul>;
};

export default Favorite;
