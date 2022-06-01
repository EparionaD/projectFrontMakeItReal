import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/authContext';
import { usePost } from '../context/postContext';

export function DetailPage() {
  const params = useParams();
  const { auth } = useAuth();
  const { detail, detailPost, setDetail } = usePost();
  console.log(detail);

  const urlImage = detail.attributes.image.data.attributes.formats.large.url;
  // console.log(urlImage);

  useEffect(() => {
    detailPost(params.id);
  }, [auth]);

  return (
    <>
      <Header />
      <div className='container mx-auto pt-14'>
        <h1 className='text-4xl font-bold'>{detail.attributes.title}</h1>
        <div className='py-10'>{/* <img src={urlImage} alt='' /> */}</div>
        <p className='tracking-wide subpixel-antialiased leading-relaxed'>
          {detail.attributes.description}
        </p>
      </div>
    </>
  );
}
