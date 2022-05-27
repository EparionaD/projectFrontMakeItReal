import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../context/postContext';
import axios from 'axios';

const Create = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const { createPost } = usePost();

  const [inputsFile, setInputsFile] = useState({
    title: '',
    description: '',
    user: `${auth.user.id}`,
  });

  const [file, setFile] = useState(null);

  const handleChangeInput = ({ target: { name, value } }) => {
    // console.log(name, value);
    setInputsFile({ ...inputsFile, [name]: value });
  };
  const handleChangeFile = ({ target: { files } }) => {
    // console.log(files);
    setFile(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const innerValues = {
      title: inputsFile.title,
      description: inputsFile.description,
      user: inputsFile.user,
    };
    // console.log(innerValues);
    const data = new FormData();
    for (let i = 0; i < file.length; i++) {
      // console.log(file[i]);
      data.append('files.image', file[i]);
    }
    data.append('data', JSON.stringify(innerValues));
    console.log(data.get('data'));
    console.log(data.get('files.image'));

    const jwtToken = `${auth.jwt}`;

    const res = await fetch('http://localhost:1337/api/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: data,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mb-4'>
          <label className='text-sm mb-1'>Título</label>
          <input
            className='border border-gray-200 rounded h-9 pl-2'
            name='title'
            type='text'
            onChange={handleChangeInput}
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='text-sm mb-1'>Descripción</label>
          <input
            as='textarea'
            className='border border-gray-200 rounded h-9 pl-2'
            name='description'
            type='text'
            onChange={handleChangeInput}
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='text-sm mb-1'>Imagen</label>
          <input
            className='border border-gray-200 rounded h-9 pl-2'
            name='image'
            type='file'
            onChange={handleChangeFile}
          />
        </div>
        <button className='px-6 py-2 h-max rounded-md font-semibold bg-third text-white'>
          Crear
        </button>
      </form>
      {/* <Formik
        initialValues={{
          title: '',
          description: '',
          image: null,
          user: `${auth.user.id}`,
        }}
        onSubmit={async (values) => {
          console.log(values);
          // const image = 'files.image';
          const valuesModificated = {
            title: values.title,
            description: values.description,
            user: values.user,
          };
          // console.log(data);

          const data = new FormData();
          for (let i = 0; i < values.image.length; i++) {
            console.log(values.image[i]);
            data.append('files.image', values.image[i]);
          }
          console.log('data solo del archivo', data.get('data'));

          data.append('data', JSON.stringify(valuesModificated));
          console.log('data de todos archivos', data.get('data'));
          const jwtToken = `${auth.jwt}`;
          // createPost(data, jwtToken);
          // createPost(values, jwtToken);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label className='text-sm mb-1'>Título</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='title'
                type='text'
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='text-sm mb-1'>Descripción</label>
              <Field
                as='textarea'
                className='border border-gray-200 rounded h-9 pl-2'
                name='description'
                type='text'
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='text-sm mb-1'>Imagen</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='image'
                type='file'
              />
            </div>
            <button
              className='px-6 py-2 h-max rounded-md font-semibold bg-third text-white'
              type='submit'
            >
              Crear
            </button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default Create;
