import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
import style from './CardList.module.css';

const Favorite = () => {
  const favoriteData = useSelector((state: any) => state.favorites);

  return (
    <ul className={style.cardListContainer}>
      {favoriteData &&
        favoriteData.map((film: any, index: number) => (
          <li key={index} className={style.cardList}>
            <Cards film={film} color={film.color} />
          </li>
        ))}
    </ul>
  );
};

export default Favorite;
