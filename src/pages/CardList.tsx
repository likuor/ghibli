import Cards from '../components/Cards';
import style from './CardList.module.css';

type Props = {
  films: any;
};

const CardList: React.FC<Props> = (props) => {
  const { films } = props;

  return (
    <ul className={style.cardContainer}>
      {films &&
        films.api.map((film: any, index: number) => (
          <li key={index} className={style.card}>
            <Cards film={film} color={film.color} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
