import React from 'react';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/MainLayout';

const index = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <h1>Добро пожаловать</h1>
          <h3>Начни слушать музыку прямо сейчас</h3>
        </div>
      </MainLayout>
      </>
  );
};

export default index;
