import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Navbar from './Navbar';

const Header = () => {
  const { pathname } = useLocation();
  const { auth } = useAuth();

  const params = useParams();

  if (pathname === '/') {
    return (
      <header
        className={
          pathname === '/'
            ? 'bg-primary grid grid-rows-6 h-screen'
            : 'bg-primary grid grid-rows-6'
        }
      >
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          <div className='container mx-auto flex h-full pb-10 items-center'>
            <p className='indent-10 subpixel-antialiased tracking-wide w-9/12 text-2xl leading-relaxed border-8 border-primary border-l-primary-400 pl-5'>
              El objetivo de esta página es servir de medio para el intercambio
              de información e ideas con los estudiantes, abogados y profesores
              del Perú y del extranjero sobre los temas fundamentales del
              Derecho. Está página también tiene por finalidad brindar
              información sobre leyes, doctrina y jurisprudencia y sobre las
              diversas actividades y eventos de los cursos materia de la
              cátedra.
            </p>
          </div>
        </div>
        <div className='row-span-2 flex'>
          <img
            className='w-full object-none'
            src={require('../img/home.jpg')}
            alt=''
          />
        </div>
      </header>
    );
  } else if (pathname === '/posts') {
    return (
      <header className='bg-primary grid grid-rows-4'>
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          <div className='container mx-auto flex flex-col h-full pb-10'>
            <h2 className='text-4xl font-bold border-4 border-primary border-l-primary-400 pl-4'>
              Documentos
            </h2>
            <p className='subpixel-antialiased tracking-wide w-9/12 text-2xl leading-relaxed pl-5'>
              Aqui encontraras investigaciones, boletines, artículos, informes,
              jurisprudencia, normas.
            </p>
          </div>
        </div>
      </header>
    );
  } else if (pathname === '/dashboard') {
    return (
      <header className='bg-primary grid grid-rows-4'>
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          <div className='container mx-auto flex flex-col h-full pb-10'>
            <h2 className='text-4xl font-bold border-4 border-primary border-l-primary-400 pl-4'>
              Bienvenido: {auth.user.username}
            </h2>
          </div>
        </div>
      </header>
    );
  } else if (pathname === '/create') {
    return (
      <header className='bg-primary grid grid-rows-4'>
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          <div className='container mx-auto flex flex-col h-full pb-10'>
            <h2 className='text-4xl font-bold border-4 border-primary border-l-primary-400 pl-4'>
              Crear tu publicación
            </h2>
          </div>
        </div>
      </header>
    );
  } else if (params.id) {
    return (
      <header className='bg-primary grid grid-rows-4'>
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          <div className='container mx-auto flex flex-col h-full pb-10'>
            <h2 className='text-4xl font-bold border-4 border-primary border-l-primary-400 pl-4'>
              Edita tu publicación
            </h2>
          </div>
        </div>
      </header>
    );
  }
  return (
    <>
      <header className='bg-primary grid grid-rows-4'>
        <div className='row-span-4 pt-3 flex flex-col'>
          <Navbar />
          {pathname === '/' ? (
            <div className='container mx-auto flex h-full pb-10 items-center'>
              <p className='indent-10 subpixel-antialiased tracking-wide w-9/12 text-2xl leading-relaxed border-8 border-primary border-l-primary-400 pl-5'>
                El objetivo de esta página es servir de medio para el
                intercambio de información e ideas con los estudiantes, abogados
                y profesores del Perú y del extranjero sobre los temas
                fundamentales del Derecho. Está página también tiene por
                finalidad brindar información sobre leyes, doctrina y
                jurisprudencia y sobre las diversas actividades y eventos de los
                cursos materia de la cátedra.
              </p>
            </div>
          ) : (
            <div className='container mx-auto flex flex-col h-full pb-10'>
              <h2 className='text-4xl font-bold border-4 border-primary border-l-primary-400 pl-4'>
                Documentos
              </h2>
              <p className='subpixel-antialiased tracking-wide w-9/12 text-2xl leading-relaxed pl-5'>
                Aqui encontraras investigaciones, boletines, artículos,
                informes, jurisprudencia, normas.
              </p>
            </div>
          )}
        </div>
        {pathname === '/' ? (
          <div className='row-span-2 flex'>
            <img
              className='w-full object-none'
              src={require('../img/home.jpg')}
              alt=''
            />
          </div>
        ) : (
          <></>
        )}
      </header>
    </>
  );
};

export default Header;
