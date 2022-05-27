import React from 'react';
import Register from '../components/Register';
import { ReactComponent as RegisterSvg } from '../img/register.svg';

export const RegisterPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-9/12 flex justify-evenly items-center bg-footerColor'>
        <h1 className='mb-10 font-bold text-3xl'>
          <span className='text-primary'>Cátedra</span> Pariona
        </h1>
        <Register />
      </div>
      <div className='w-3/12 flex justify-center items-center'>
        <RegisterSvg className='w-6/12' />
      </div>
    </div>
  );
};
