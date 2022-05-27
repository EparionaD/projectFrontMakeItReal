import axios from './axios';

const POSTS_URL = '/posts?populate=%2A';

export const getPostsRequests = async () => await axios.get(POSTS_URL);
export const createPostsRequests = async (post, jwtToken) =>
  await axios.post(
    '/posts',
    {
      data: post,
    },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
