import React from 'react';
import Create from '../components/Create';
import Header from '../components/Header';

export function CreatePage() {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <div className='bg-gray-100 h-screen flex flex-col justify-center items-center'>
        <Create />
      </div>
    </div>
  );
}
