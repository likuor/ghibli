import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  LikeOutlined,
  HeartOutlined,
  DislikeOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';

type Props = {
  film: any;
};

const { Meta } = Card;

const Cards: React.FC<Props> = (props) => {
  const { film } = props;

  const favoriteData = useSelector((state: any) => state.favoriteReducer);
  const dispatch = useDispatch();

  const changeFavorite = (film: any) => {
    if (favoriteData.film.find((favFilm: any) => favFilm.id === film.id)) {
      console.log('remove', film.title);
      dispatch({ type: 'REMOVE_FAVORITE', film: film });
      return 'gray';
    } else {
      console.log('add', film.title);
      dispatch({ type: 'ADD_FAVORITE', film: film });
      return 'red';
    }
  };

  return (
    <Card
      hoverable
      cover={<img src={film.image} alt={film.title} />}
      actions={[
        <LikeOutlined key='like' />,
        <HeartOutlined
          key='heart'
          onClick={() => changeFavorite(film)}
          // style={{
          //   color: favoriteData.film[0].color ? 'red' : 'gray',
          // }}
          style={{
            color: changeFavorite(film),
          }}
        />,
        <DislikeOutlined key='dislike' />,
      ]}
    >
      <Meta
        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
        title={film.title}
        description={`Rating: ${film.rt_score}`}
      />
    </Card>
  );
};

export default Cards;
