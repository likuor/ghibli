import { Input, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const SearchBar: React.FC = () => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  // console.log(redux);

  return (
    <>
      <Space>
        <Search
          placeholder='input search text'
          onSearch={onSearch}
          enterButton
        />
      </Space>
    </>
  );
};

export default SearchBar;
