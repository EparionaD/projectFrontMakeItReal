import axios from './axios';

const POSTS_URL = '/posts?populate=%2A';
const POSTS_URL_USER = `/posts?populate=%2A&filters[user][id]=`;
const POSTS_URL_DELETE = '/posts/';
const POST_URL = '/posts/';
const POPULATE = '?populate=%2A';

export const getPostsRequests = async () => await axios.get(POSTS_URL);

export const getPostsUserRequests = async (idUser) =>
  await axios.get(POSTS_URL_USER + `${idUser}`);

export const createPostsRequests = async (post, jwtToken) => {
  const res = await axios.post('/posts', post, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return res;
};

export const deletePostRequest = async (idPost, jwtToken) =>
  await axios.delete(POSTS_URL_DELETE + `${idPost}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
export const getPostRequest = async (idPost, jwtToken) =>
  await axios.get(POST_URL + `${idPost}` + POPULATE, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

export const detailPostRequest = async (idPost) =>
  await axios.get(POST_URL + `${idPost}` + POPULATE);

export const updatePostRequest = async (idPost, post, jwtToken) =>
  await axios.put(POST_URL + `${idPost}`, post, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
