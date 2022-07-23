import { FC } from 'react';
import MainLayout from './Layout/MainLayout';
import './App.css';

import { Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </div>
  );
};

export default App;
