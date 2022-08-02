import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
import style from './CardList.module.css';

const Favorite = () => {
  const favoriteData = useSelector((state: any) => state.favorites);

  return (
    <ul className={style.cardContainer}>
      {favoriteData &&
        favoriteData.map((film: any, index: number) => (
          <li key={index} className={style.card}>
            <Cards film={film} />
          </li>
        ))}
    </ul>
  );
};

export default Favorite;
