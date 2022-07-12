import { useState, useEffect } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import style from './Api.module.css';

const { Meta } = Card;

const Api = () => {
  const [films, setFilms] = useState<any[]>([]);
  const url: string = 'https://ghibliapi.herokuapp.com/films';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setFilms(res));
  }, []);

  // console.log(films);

  return (
    <div>
      <ul className={style.cardContainer}>
        {films &&
          films.map((film, index) => (
            <li key={index}>
              <Card
                className={style.card}
                cover={<img src={film.image} alt={film.title} />}
                actions={[
                  <SettingOutlined key='setting' />,
                  <EditOutlined key='edit' />,
                  <EllipsisOutlined key='ellipsis' />,
                ]}
              >
                <Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title={film.title}
                  description={`Rating: ${film.rt_score}`}
                />
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Api;
