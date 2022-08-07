import { FC, useState } from 'react';
import { Typography } from 'antd';
import DropDowns from '../components/DropDowns';
import AllMovies from '../components/AllMovies';
import CategorizedMovies from '../components/CategorizedMovies';
import style from './styles/CardList.module.css';

const CardList: FC = () => {
  const { Title } = Typography;
  const [categoryYear, setCategoryYear] = useState<string>('1980');

  return (
    <>
      <div className={style.container}>
        <Title level={3}>All movies</Title>
        <AllMovies />
      </div>

      <div className={style.container}>
        <Title level={3}>
          <DropDowns
            categoryYear={categoryYear}
            setCategoryYear={setCategoryYear}
          />
        </Title>
        <CategorizedMovies categoryYear={categoryYear} />
      </div>
    </>
  );
};

export default CardList;
