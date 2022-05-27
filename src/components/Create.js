import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../context/authContext';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../context/postContext';

const LOGIN_URL = '/auth/local';

const Create = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const { createPost } = usePost();

  // const [file, setFile] = useState();

  // const handleChange = (e) => {
  //   const fileData = e.target.files;
  //   console.log(e.target.files);
  //   setFile(fileData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   if (file) {
  //     console.log('true');
  //     for (let i = 0; i < file.length; i++) {
  //       data.append(`files.image`, file[i], file[i].name);
  //     }
  //   }
  //   console.log(data);
  //   const jwtToken = `${auth.jwt}`;
  //   await createPost(data, jwtToken);
  // };

  return (
    <div>
      {/* <form>
        <div className='flex flex-col mb-6'>
          <label className='text-sm mb-1'>Imagen</label>
          <input
            className='border border-gray-200 rounded h-9 pl-2'
            name='image'
            type='file'
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Crear</button>
      </form> */}
      <Formik
        initialValues={{
          title: '',
          description: '',
          user: `${auth.user.id}`,
        }}
        onSubmit={async (values) => {
          console.log(values);
          const jwtToken = `${auth.jwt}`;
          createPost(values, jwtToken);
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
      </Formik>
    </div>
  );
};

export default Create;
