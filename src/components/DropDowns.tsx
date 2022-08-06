import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import React, { FC } from 'react';

type Props = {
  categoryYear: string;
  setCategoryYear: React.Dispatch<React.SetStateAction<string>>;
};

const DropDowns: FC<Props> = (props) => {
  const { categoryYear, setCategoryYear } = props;

  const makeDropDown = () => {
    const GHIBLI_STARTED_YEAR: number = 1980;
    const PER_YEAR: number = 10;
    const thisYear: number = new Date().getFullYear();

    interface DropDownOption {
      key: string;
      label: number;
    }
    const DropDownItems: DropDownOption[] = [];

    for (
      let index = GHIBLI_STARTED_YEAR;
      index < thisYear;
      index = index + PER_YEAR
    ) {
      const dropDwonItem = {
        key: index.toString(),
        label: index,
      };
      DropDownItems.push(dropDwonItem);
    }
    return DropDownItems;
  };

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['1980']}
      onSelect={(selectVal) => {
        setCategoryYear(selectVal.key);
        return selectVal.key;
      }}
      items={makeDropDown()}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
          {categoryYear}
          <DownOutlined style={{ fontSize: '0.9vw' }} />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDowns;
