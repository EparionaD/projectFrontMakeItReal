import React, { useEffect, useState } from 'react';
import * as YUP from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAuth } from '../context/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import { usePost } from '../context/postContext';

const Create = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const { createPost, getPost, updatePost } = usePost();

  const [file, setFile] = useState(null);

  // const [post, setPost] = useState({
  //   title: '',
  //   description: '',
  //   user: `${auth.user.id}`,
  // });

  const handleChangeFile = ({ target: { files } }) => {
    // console.log(files);
    setFile(files);
  };

  // useEffect(() => {
  //   (async () => {
  //     if (params.id) {
  //       const jwtToken = `${auth.jwt}`;
  //       const res = await getPost(params.id, jwtToken);
  //       const postID = res.data.data.attributes;

  //       const updatePostID = {
  //         title: postID.title,
  //         description: postID.description,
  //       };
  //       setPost(updatePostID);
  //     }
  //   })();
  // }, []);

  return (
    <div className='w-2/5 mt-[-15rem] bg-white rounded-xl p-10'>
      <Formik
        initialValues={{
          title: '',
          description: '',
          image: '',
          user: `${auth.user.id}`,
        }}
        validationSchema={YUP.object({
          title: YUP.string().required('El título es requerido'),
          description: YUP.string().required('El contenido es requerido'),
          // image: YUP.mixed().required('La imagen es requerida'),
        })}
        onSubmit={async (values) => {
          // console.log(values.image);
          // console.log(values);
          // console.log(file);
          const valuesModificated = {
            title: values.title,
            description: values.description,
            user: values.user,
          };
          const data = new FormData();
          for (let i = 0; i < file.length; i++) {
            // console.log(file[i]);
            data.append('files.image', file[i]);
          }
          data.append('data', JSON.stringify(valuesModificated));
          // console.log(data.get('files.image'));

          const jwtToken = `${auth.jwt}`;
          // if (params.id) {
          //   await updatePost(params.id, post, jwtToken);
          // } else {
          //   await createPost(data, jwtToken);
          // }
          await createPost(data, jwtToken);

          navigate('/dashboard');

          // const data = new FormData();
          // data.append('files.image', values.image);
          // data.append('data', JSON.stringify(valuesModificated));
          // console.log(data.get('files.image'));
          // console.log(data.get('data'));
          // const jwtToken = `${auth.jwt}`;
          // await createPost(data, jwtToken);
          // navigate('/dashboard');
        }}
        enableReinitialize
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
              <ErrorMessage
                component='p'
                className='text-rose-900'
                name='title'
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='text-sm mb-1'>Descripción</label>
              <Field
                component='textarea'
                className='border border-gray-200 rounded pl-2 h-40'
                name='description'
                type='text'
              />
              <ErrorMessage
                component='p'
                className='text-rose-900'
                name='description'
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='text-sm mb-1'>Imagen</label>

              <input
                className='border border-gray-200 rounded h-9 pl-2 focus:outline-none'
                name='image'
                type='file'
                // onChange={(e) => setFieldValue('image', e.target.files[0])}
                onChange={handleChangeFile}
              />
              <ErrorMessage
                component='p'
                className='text-rose-900'
                name='image'
              />
            </div>
            <button
              className='px-6 py-2 h-max rounded-md font-semibold bg-third text-white'
              type='submit'
            >
              Guardar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
