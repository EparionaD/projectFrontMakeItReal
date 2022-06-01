import React, { useEffect } from 'react';
import Header from '../components/Header';
import ListPosts from '../components/ListPosts';
import { usePost } from '../context/postContext';

export function PostPage() {
  const { getPosts } = usePost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Header />
      <ListPosts />
    </>
  );
}
