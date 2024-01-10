import Account from '@/components/account';
import Comment from '@/components/comment';
import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import React, { Suspense, lazy, useState } from 'react';
import { useSelector } from 'react-redux'
import ImageGallery from "react-image-gallery";

const LazyMain = lazy(() => import('@/components/main'))
const LazyText = lazy(() => import('@/components/text'))
const LazyContact = lazy(() => import('@/components/contact'))
const LazyDate = lazy(() => import('@/components/date'))
const LazyPhoto = lazy(() => import('@/components/photo'))
const LazyMap = lazy(() => import('@/components/map'))

const MainPage = () => {
  const isTextLoad = useSelector((state: any) => state?.load?.isTextLoad);
  const isContactLoad = useSelector((state: any) => state?.load?.isContactLoad);
  const isDateLoad = useSelector((state: any) => state?.load?.isDateLoad);
  const isPhotoLoad = useSelector((state: any) => state?.load?.isPhotoLoad);
  const isMapLoad = useSelector((state: any) => state?.load?.isPhotoLoad);
  const isContactPopup = useSelector((state: any) => state?.load?.isContactPopup);
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <>
      <div className="card-main">
        <ImageGallery items={images} ></ImageGallery>

        <Suspense fallback={null}>
          <LazyMain />
        </Suspense>
        <Suspense fallback={null}>
          {isTextLoad ? <LazyText /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isContactLoad ? <LazyContact /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isDateLoad ? <LazyDate /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isPhotoLoad ? <LazyPhoto /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isMapLoad ? <LazyMap /> : null}
        </Suspense>
        <Account />
        <Comment/>
      </div>
      {isContactPopup ? <ContactInfoPopup /> :  null}
    </>
  );
};
export default MainPage;
