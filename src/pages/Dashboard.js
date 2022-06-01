import React, { useEffect } from 'react';
import Header from '../components/Header';
import ListPostUser from '../components/ListPostUser';
import { usePost } from '../context/postContext';

export function Dashboard() {
  const { getPostsUser } = usePost();
  useEffect(() => {
    getPostsUser();
  }, []);
  return (
    <>
      <Header />
      <div className='bg-gray-100 pt-15'>
        <ListPostUser />
      </div>
    </>
  );
}

// export default Dashboard;
