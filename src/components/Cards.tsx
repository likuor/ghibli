import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { LikeOutlined, HeartFilled, DislikeOutlined } from '@ant-design/icons';
import { Card, Modal, Button } from 'antd';
import style from './Cards.module.css';

type Props = {
  film: any;
  color: string;
};

const { Meta } = Card;

const Cards: React.FC<Props> = (props) => {
  const { film, color }: any = props;
  const favoriteData: any = useSelector((state: any) => state.favorites);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible]: any = useState<boolean>(false);

  const changeFavorite = (film: any) => {
    if (favoriteData.find((favFilm: any) => favFilm.id === film.id)) {
      console.log('remove', film.title);
      dispatch({ type: 'REMOVE_FAVORITE', payload: film, color: 'gray' });
    } else {
      console.log('add', film.title);
      dispatch({ type: 'ADD_FAVORITE', payload: film, color: 'red' });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card
      className={style.card}
      hoverable
      cover={<img src={film.image} alt={film.title} onClick={showModal} />}
      actions={[
        <LikeOutlined key='like' />,
        <HeartFilled
          key='heart'
          onClick={() => changeFavorite(film)}
          style={{
            color: color,
          }}
        />,
        <DislikeOutlined key='dislike' />,
      ]}
    >
      <Meta
        // avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
        style={{ fontSize: '14px' }}
        title={film.title}
        description={`Rating: ${film.rt_score}`}
      />
      <Modal
        title={film.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key='back' type='primary' onClick={handleOk}>
            Got it
          </Button>,
        ]}
      >
        <div>
          <p>{film.description}</p>
          <p>{film.release_date}</p>
        </div>
      </Modal>
    </Card>
  );
};

export default Cards;
