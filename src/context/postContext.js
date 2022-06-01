import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getPostsRequests,
  createPostsRequests,
  getPostsUserRequests,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
  detailPostRequest,
} from '../api/posts';
import { useAuth } from './authContext';

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsUser, setPostsUser] = useState([]);
  const [detail, setDetail] = useState([]);

  const { auth } = useAuth();

  const idUser = auth?.user.id;

  const params = useParams();

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data.data);
  };
  const getPostsUser = async () => {
    const res = await getPostsUserRequests(idUser);
    setPostsUser(res.data.data);
  };

  const createPost = async (post, jwtToken) => {
    const res = await createPostsRequests(post, jwtToken);
    console.log('desde post context', res.data);
  };

  const deletePost = async (idPost, jwtToken) => {
    const res = await deletePostRequest(idPost, jwtToken);
    if (res.status === 200) {
      setPostsUser(postsUser.filter((postUser) => postUser.id !== idPost));
    }
  };

  const getPost = async (idPost, jwtToken) => {
    const res = await getPostRequest(idPost, jwtToken);
    return res;
  };

  const updatePost = async (idPost, post, jwtToken) => {
    const res = await updatePostRequest(idPost, post, jwtToken);
  };

  const detailPost = async (idPost) => {
    const res = await detailPostRequest(idPost);
    console.log('detalle desde el contexto', res.data.data);
    setDetail(res.data.data);
  };

  useEffect(() => {
    getPosts();
    getPostsUser();
  }, [auth]);

  return (
    <postContext.Provider
      value={{
        posts,
        postsUser,
        detail,
        setPosts,
        setPostsUser,
        createPost,
        getPosts,
        getPostsUser,
        deletePost,
        getPost,
        updatePost,
        detailPost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
