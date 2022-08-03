import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar: React.FC = () => {
  const state = useSelector((state: any) => state.api);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const makeSearchResult = () => {
    let resArr: any = [];
    state.filter((element: any) => {
      if (
        (searchValue && element.title.toLowerCase().includes(searchValue)) ||
        element.title.includes(searchValue)
      ) {
        resArr.push(element);
      }
      return resArr;
    });
    return resArr;
  };

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch({
      type: 'SEARCH_FILM',
      payload: makeSearchResult(),
    });
  }, [searchValue]);

  return (
    <>
      <Input
        placeholder='input search text'
        onChange={handleChange}
        prefix={<SearchOutlined />}
      />
    </>
  );
};

export default SearchBar;
