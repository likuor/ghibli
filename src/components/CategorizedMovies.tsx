import { FC } from 'react';
import Cards from './Cards';
import { FilmData, reduxDataObj } from '../interface/Interface';
import style from './styles/MovieSection.module.css';
import { useSelector } from 'react-redux';

type Props = {
  categoryYear: string;
};

const CategorizedMovies: FC<Props> = (props) => {
  const { categoryYear } = props;
  const reduxData: reduxDataObj = useSelector((state: reduxDataObj) => state);

  const renderCategorizedFilms = (year: string) => {
    const categorizedFilms: FilmData[] = reduxData.api.filter(
      (film: FilmData) => {
        const numYear: number = Number(year);
        const numReleaseDate: number = Number(film.release_date);
        return numReleaseDate % numYear < 10 && 0 < numReleaseDate % numYear;
      }
    );

    switch (year) {
      case year:
        return categorizedFilms.map((film: FilmData, index: number) => (
          <li key={index} className={style.cardList}>
            <Cards film={film} color={film.color} />
          </li>
        ));

      default:
        console.log('ERR');
        return 'the others';
    }
  };
  return (
    <ul className={style.cardListContainer}>
      {renderCategorizedFilms(categoryYear)}
    </ul>
  );
};

export default CategorizedMovies;
