import { HeartOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import CardList from '../pages/CardList';
import FavoriteList from '../pages/FavoriteList';
import SearchBar from '../components/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';
import FetchApi from '../helper/FetchApi';

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
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to='/'>Home</Link>,
            },
            {
              key: '2',
              icon: <HeartOutlined />,
              label: <Link to='/favorite'>Favorite</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{
            padding: '2vw',
          }}
        >
          <SearchBar />
        </Header>

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
            <Routes>
              <Route path='/' element={<CardList films={FetchApi()} />} />;
              <Route path='/favorite' element={<FavoriteList />} />;
            </Routes>
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
