import React, { createContext, useContext, useState, useEffect } from 'react';
import { getPostsRequests, createPostsRequests } from '../api/posts';

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data.data);
  };

  const createPost = async (post, jwtToken) => {
    const res = await createPostsRequests(post, jwtToken);
    console.log(res);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, getPosts, createPost }}>
      {children}
    </postContext.Provider>
  );
};
