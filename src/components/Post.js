import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { usePost } from '../context/postContext';
import { useAuth } from '../context/authContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  console.log(post);
  const urlImage = post.attributes.image.data.attributes.formats.small.url;
  const { deletePost } = usePost();
  const { auth } = useAuth();
  const jwtToken = `${auth?.jwt}`;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleDelete = (idPost) => {
    toast((t) => (
      <div>
        <p>
          Quieres eliminar la publicacion
          <strong> {post.attributes.title}</strong>
        </p>
        <div className='flex gap-x-4 mt-5'>
          <button
            className='bg-green-600 hover:bg-green-700 px-3 text-white rounded-md'
            onClick={() => {
              deletePost(idPost, jwtToken);
              toast.dismiss(t.id);
            }}
          >
            Si
          </button>
          <button
            className='bg-red-600 hover:bg-rose-700 px-3 text-white rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className='flex bg-white rounded-xl shadow-lg flex-col justify-between h-full'>
      <img className='w-100 rounded-t-xl' src={urlImage} alt='' />
      <div className='p-5'>
        {/* <h1 className='text-xl font-semibold'>{post.attributes.title}</h1> */}
        <Link
          to={`/posts/${post.id}`}
          className='text-xl font-semibold hover:text-primary-600'
        >
          {post.attributes.title}
        </Link>
      </div>
      {pathname === '/posts' ? (
        <></>
      ) : (
        <div className='flex p-5 border-t border-gray-100 gap-x-5 bg-gray-200 justify-end'>
          {/* <button onClick={() => navigate(`/update/${post.id}`)}>
            <FaEdit className='w-7 h-7 text-third' />
          </button> */}
          <button onClick={() => handleDelete(post.id)}>
            <MdDelete className='w-8 h-8 text-secundary' />
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
