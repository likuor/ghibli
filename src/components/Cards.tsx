import { useSelector, useDispatch } from 'react-redux';
import { FC, useState } from 'react';
import { HeartFilled } from '@ant-design/icons';
import { Card, Modal, Button } from 'antd';
import style from './styles/Cards.module.css';
import { FilmData, reduxDataObj } from '../interface/Interface';
import { ADD_FAVORITE } from '../redux/favorites/actions';
import { REMOVE_FAVORITE } from '../redux/favorites/actions';

type Props = {
  film: FilmData;
  color: string;
};

const Cards: FC<Props> = (props) => {
  const { Meta } = Card;
  const { film, color } = props;
  const favoriteData = useSelector((state: reduxDataObj) => state.favorites);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const changeFavorite = (film: FilmData) => {
    if (favoriteData.find((favFilm: FilmData) => favFilm.id === film.id)) {
      dispatch({ type: REMOVE_FAVORITE, payload: film, color: 'gray' });
    } else {
      dispatch({ type: ADD_FAVORITE, payload: film, color: 'red' });
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
        <HeartFilled
          key='heart'
          onClick={() => changeFavorite(film)}
          style={{
            color: color,
          }}
        />,
      ]}
    >
      <Meta
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
