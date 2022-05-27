import React from 'react';
import Login from '../components/Login';

export function LoginPage() {
  return (
    <div className='bg-gray-100  h-screen flex flex-col justify-center items-center'>
      <h1 className='mb-10 font-bold text-5xl'>
        <span className='text-primary'>Cátedra</span> Pariona
      </h1>
      <Login />
    </div>
  );
}
