import React from 'react';
import { usePost } from '../context/postContext';

const ListPosts = () => {
  const { posts } = usePost();
  console.log(posts);
  return (
    <div>
      <h1>ListPosts</h1>
      <div>
        {posts.map((post) => (
          <h1 key={post.id}>{post.attributes.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default ListPosts;
