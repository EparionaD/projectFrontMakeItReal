import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../context/authContext';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = '/auth/local';

function Login() {
  const { signin, userLocalStorage } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='bg-white rounded-xl w-1/4 p-10 h-max'>
      <Formik
        initialValues={{
          identifier: '',
          password: '',
        }}
        onSubmit={async (values) => {
          const res = await axios.post(LOGIN_URL, values);
          signin(res.data);
          userLocalStorage(res.data);
          navigate('/dashboard');
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label className='text-sm mb-1'>Usuario</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='identifier'
                type='email'
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='text-sm mb-1'>Password</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='password'
                type='password'
              />
            </div>
            <button
              className='px-6 py-2 h-max rounded-md font-semibold bg-third text-white'
              type='submit'
            >
              Iniciar Sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
