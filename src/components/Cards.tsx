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

  return (
    <Card
      cover={<img src={film.image} alt={film.title} />}
      actions={[
        <LikeOutlined key='like' />,
        <HeartOutlined key='heart' />,
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
