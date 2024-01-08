// import Main from '@/components/main';
// import Text from '@/components/text';
// import Contact from '@/components/contact';
// import Date from '@/components/date';
// import Photo from '@/components/photo';
// import Map from '@/components/map';
import Account from '@/components/account';
import Comment from '@/components/comment';
// import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux'

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
      {/* <ContactInfoPopup /> */}
    </>
  );
};
export default MainPage;
