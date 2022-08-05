import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';

type Props = {
  categoryYear: string;
  setCategoryYear: any;
};

const DropDowns: React.FC<Props> = (props) => {
  const { categoryYear, setCategoryYear }: any = props;

  const makeDropDown = () => {
    const GHIBLI_STARTED_YEAR: number = 1980;
    const PER_YEAR: number = 10;
    const thisYear: number = new Date().getFullYear();

    interface DropDowntObj {
      key: string;
      label: number;
    }

    interface DropDownArr {
      key: string;
      label: number;
    }

    const DropDownItems: DropDownArr[] = [];

    for (
      let index = GHIBLI_STARTED_YEAR;
      index < thisYear;
      index = index + PER_YEAR
    ) {
      const dropDwonItem: DropDowntObj = {
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
