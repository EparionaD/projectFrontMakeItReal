import React from 'react';
import Button from './Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { usePost } from '../context/postContext';

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { setPosts, setPostsUser, postsUser, posts } = usePost();
  const navigate = useNavigate();

  const logoutUser = () => {
    window.localStorage.removeItem('userLocal');
    setAuth(null);
    setPosts([]);
    setPostsUser([]);
    navigate('/posts');
  };
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
              name='Tus publicaciones'
              buttonStyle='bg-fourth text-black hover:bg-primary hover:border hover:border-fourth hover:text-black'
              linkTo='/dashboard'
            />
            {/* <Button
              name='Cerrar sesión'
              buttonStyle='border border-black hover:bg-third hover:text-white hover:border-third'
              linkTo='/login'
            /> */}
            <button
              className='px-6 py-2 h-max rounded-md font-semibold border border-black hover:bg-third hover:text-white hover:border-third'
              onClick={logoutUser}
            >
              Cerrar sesión
            </button>
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
