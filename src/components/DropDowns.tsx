import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';

type Props = {
  categoryYear: string;
  setCategoryYear: any;
};

const DropDowns: React.FC<Props> = (props) => {
  const { categoryYear, setCategoryYear }: any = props;

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['1980']}
      onSelect={(val) => {
        setCategoryYear(val.key);
        return val.key;
      }}
      items={[
        {
          key: '1980',
          label: '1980',
        },
        {
          key: '1990',
          label: '1990',
        },
        {
          key: '2000',
          label: '2000',
        },
        {
          key: '2010',
          label: '2010',
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
          {categoryYear}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDowns;
