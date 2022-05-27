import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Navbar = () => {
  const { auth } = useAuth();
  return (
    <nav className=''>
      <div className='flex container mx-auto gap-x-4'>
        <div>
          <img className='h-3/5' src={require('../img/logo.png')} alt='' />
        </div>
        <div className='flex gap-x-2 mr-auto pl-12'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `font-bold text-xl h-max px-3 py-2 bg-primary-400 rounded-md`
                : `font-bold text-xl h-max px-3 py-2 hover:bg-primary-300 hover:rounded-md`
            }
            to='/'
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `font-bold text-xl h-max px-3 py-2 bg-primary-400 rounded-md`
                : `font-bold text-xl h-max px-3 py-2 hover:bg-primary-300 hover:rounded-md`
            }
            to='/posts'
          >
            Documentos
          </NavLink>
        </div>
        {auth ? (
          <div className='flex gap-x-2'>
            <Button
              name='Crear documentos'
              buttonStyle='bg-secundary text-white hover:bg-primary hover:border hover:border-secundary hover:text-secundary'
              linkTo='/create'
            />
            <Button
              name='Cerrar sesión'
              buttonStyle='border border-black hover:bg-third hover:text-white hover:border-third'
              linkTo='/login'
            />
          </div>
        ) : (
          <div className='flex gap-x-2'>
            <Button
              name='Iniciar sesión'
              buttonStyle='border border-black hover:bg-third hover:text-white hover:border-third'
              linkTo='/login'
            />
            <Button
              name='Registrarse'
              buttonStyle='bg-secundary text-white hover:bg-primary hover:border hover:border-secundary hover:text-secundary'
              linkTo='/register'
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
