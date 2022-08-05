import Cards from '../components/Cards';
import style from './CardList.module.css';
import { Typography } from 'antd';
import DropDowns from '../components/DropDowns';
import React, { useState } from 'react';

type Props = {
  films: any;
};

const CardList: React.FC<Props> = (props) => {
  const { Title } = Typography;
  const { films }: any = props;
  const [categoryYear, setCategoryYear] = useState<string>('1980');

  const renderSwitch = (year: string) => {
    const numyear: number = Number(year);
    const res: [] = films.api.filter((film: any) => {
      return (
        film.release_date % numyear < 10 && film.release_date % numyear > 0
      );
    });

    switch (year) {
      case year:
        return res.map((film: any, index: number) => (
          <li key={index} className={style.card}>
            <Cards film={film} color={film.color} />
          </li>
        ));

      default:
        return 'the others';
    }
  };

  return (
    <>
      <div>
        <Title level={3}>All movies</Title>
        <ul className={style.cardContainer}>
          {films && films.search.length !== 0
            ? films.search.map((film: any, index: number) => (
                <li key={index} className={style.card}>
                  <Cards film={film} color={film.color} />
                </li>
              ))
            : films.api.map((film: any, index: number) => (
                <li key={index} className={style.card}>
                  <Cards film={film} color={film.color} />
                </li>
              ))}
        </ul>
      </div>

      <div>
        <Title level={3}>
          <DropDowns
            categoryYear={categoryYear}
            setCategoryYear={setCategoryYear}
          />
        </Title>
        <ul className={style.cardContainer}>{renderSwitch(categoryYear)}</ul>
      </div>
    </>
  );
};

export default CardList;
