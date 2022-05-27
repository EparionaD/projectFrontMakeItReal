import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../context/authContext';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const REGISTER_URL = '/auth/local/register';

const Register = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  return (
    <div className='bg-white rounded-xl p-10 h-max w-4/12'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          const res = await axios.post(REGISTER_URL, values);
          signup(res.data);
          navigate('/dashboard');
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label className='text-sm mb-1'>Usuario</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='username'
                type='text'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-sm mb-1'>Email</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='email'
                type='email'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-sm mb-1'>Password</label>
              <Field
                className='border border-gray-200 rounded h-9 pl-2'
                name='password'
                type='password'
              />
            </div>
            <button
              className='px-6 py-2 h-max rounded-md font-semibold bg-secundary text-white'
              type='submit'
            >
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
