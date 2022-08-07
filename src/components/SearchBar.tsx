import { FC } from 'react';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { FilmData, reduxDataObj } from '../interface/Interface';
import { SEARCH_FILM } from '../redux/search/actions';

const SearchBar: FC = () => {
  const state = useSelector((state: reduxDataObj) => state.api);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputVal = event.currentTarget.value;
    setSearchValue(inputVal);
  };

  useEffect(() => {
    const makeSearchResult = () => {
      let searchedFilms: FilmData[] = [];
      state.filter((element: FilmData) => {
        if (
          (searchValue && element.title.toLowerCase().includes(searchValue)) ||
          element.title.includes(searchValue)
        ) {
          searchedFilms.push(element);
        }
        return searchedFilms;
      });
      return searchedFilms;
    };

    dispatch({
      type: SEARCH_FILM,
      payload: makeSearchResult(),
    });
  }, [dispatch, state, searchValue]);

  return (
    <>
      <Input
        placeholder='Search Title'
        onChange={handleChange}
        prefix={<SearchOutlined />}
      />
    </>
  );
};

export default SearchBar;
