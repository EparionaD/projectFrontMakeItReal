import React from 'react';
import { usePost } from '../context/postContext';
import Post from './Post';

const ListPosts = () => {
  const { posts } = usePost();

  if (posts.length === 0) {
    return (
      <div className='h-10 container mx-auto pt-10'>
        <h1 className='text-3xl font-bold'>No hay publicaciones</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className='py-16 container mx-auto text-3xl font-bold'>
        Tus documentos publicados
      </h1>
      <div className='container mx-auto grid grid-cols-3 gap-5'>
        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default ListPosts;
