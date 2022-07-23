import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import CardList from '../pages/CardList';
import Favorite from '../components/Favorite/Favorite';

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  return (
    <Layout>
      <Sider
        theme='light'
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className='logo'>
          <img
            src='https://logowiki.net/uploads/logo/s/studio-ghibli-logo.svg'
            alt=''
            style={{
              width: 200,
              padding: 20,
            }}
          />
        </div>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['4']}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{
            padding: 20,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Favorite />
            <CardList />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
