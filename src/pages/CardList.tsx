import { FC, useState } from 'react';
import { Typography } from 'antd';
import DropDowns from '../components/DropDowns';
import AllMovies from '../components/AllMovies';
import CategorizedMovies from '../components/CategorizedMovies';

const CardList: FC = () => {
  const { Title } = Typography;
  const [categoryYear, setCategoryYear] = useState<string>('1980');

  return (
    <>
      <div>
        <Title level={3}>All movies</Title>
        <AllMovies />
      </div>

      <div>
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
