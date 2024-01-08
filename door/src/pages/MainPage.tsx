// import Main from '@/components/main';
// import Text from '@/components/text';
// import Contact from '@/components/contact';
import Date from '@/components/date';
import Photo from '@/components/photo';
import Map from '@/components/map';
import Account from '@/components/account';
import Comment from '@/components/comment';
// import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import React, { useEffect, useRef, useCallback, Suspense, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const LazyMain = lazy(() => import('@/components/main'))
const LazyText = lazy(() => import('@/components/text'))
const LazyContact = lazy(() => import('@/components/contact'))
const LazyDate = lazy(() => import('@/components/date'))

const MainPage = () => {
  const isTextLoad = useSelector((state: any) => state?.load?.isTextLoad);
  const isContactLoad = useSelector((state: any) => state?.load?.isContactLoad);


  return (
    <>
      <div className="card-main">
        <Suspense fallback={null}>
          <LazyMain />
        </Suspense>
        <Suspense fallback={null}>
          {isTextLoad ? <LazyText /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isContactLoad ? <LazyContact /> : null}
        </Suspense>
        <Date />
        <Photo />
        <Map />
        <Account />
        <Comment/>
      </div>
      {/* <ContactInfoPopup /> */}
    </>
  );
};
export default MainPage;
