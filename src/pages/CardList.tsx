import { FC, useState } from 'react';
import Cards from '../components/Cards';
import style from './CardList.module.css';
import { Typography } from 'antd';
import DropDowns from '../components/DropDowns';
import { FilmData, reduxDataObj } from '../interface/Interface';
import { useSelector } from 'react-redux';

const CardList: FC = () => {
  const reduxData: reduxDataObj = useSelector((state: reduxDataObj) => state);
  const { Title } = Typography;
  const [categoryYear, setCategoryYear] = useState<string>('1980');

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
    <>
      <div>
        <Title level={3}>All movies</Title>
        <ul className={style.cardListContainer}>{renderFilms()}</ul>
      </div>

      <div>
        <Title level={3}>
          <DropDowns
            categoryYear={categoryYear}
            setCategoryYear={setCategoryYear}
          />
        </Title>
        <ul className={style.cardListContainer}>
          {renderCategorizedFilms(categoryYear)}
        </ul>
      </div>
    </>
  );
};

export default CardList;
