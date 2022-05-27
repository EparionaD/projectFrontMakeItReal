import React from 'react';
import Header from '../components/Header';
import { ReactComponent as Teaching } from '../img/teaching.svg';
import { ReactComponent as Research } from '../img/research.svg';

export function HomePage() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='container mx-auto flex flex-col gap-y-4 py-28'>
        <div className='flex gap-x-10'>
          <article className='bg-white border rounded-xl shadow-lg h-fit self-center'>
            <h3 className='bg-gradient-to-r from-third to-sky-100 rounded-t-xl p-3 text-white text-2xl font-bold'>
              Docencia
            </h3>
            <p className='px-3 py-5 text-lg tracking-wide'>
              Es una de las tareas fundamentales de la cátedra. La enseñanza, el
              conversatorio, la discusión académica, el intercambio de ideas son
              aspectos importantes en la formación profesional.
            </p>
          </article>
          <div>
            <Teaching className='h-5/6' />
          </div>
        </div>
        <div className='flex'>
          <div>
            <Research className='h-5/6' />
          </div>
          <article className='bg-white border rounded-xl shadow-lg h-fit self-center'>
            <h3 className='bg-gradient-to-r from-secundary to-red-100 rounded-t-xl p-3 text-white text-2xl font-bold'>
              Investigación
            </h3>
            <p className='px-3 py-5 text-lg tracking-wide'>
              Forma parte fundamental de la cátedra. Se promueve las
              investigaciones relacionadas con diversas cuestiones del Derecho
              penal y materias afines. Asimismo, se promueve el intercambio
              académico con otras cátedras nacionales e internacionales.
            </p>
          </article>
        </div>
      </main>
      <footer className='flex'>
        <div className='bg-gradient-to-r from-primary via-primary to-white w-1/5 flex justify-center items-center'>
          <img className='h-1/3' src={require('../img/logo.png')} alt='' />
        </div>
        <div className='bg-white w-4/5 container flex justify-center items-center'>
          <h5>Todos los derechos reservados &copy; 2022 </h5>
        </div>
      </footer>
    </div>
  );
}
