import Account from '@/components/account';
import Comment from '@/components/comment';
import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import GuestCommentPopup from '@/components/comment/GuestCommentPopup/GuestCommentPopup';
import React, { Suspense, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const LazyMain = lazy(() => import('@/components/main'));
const LazyText = lazy(() => import('@/components/text'));
const LazyContact = lazy(() => import('@/components/contact'));
const LazyDate = lazy(() => import('@/components/date'));
const LazyPhoto = lazy(() => import('@/components/photo'));
const LazyMap = lazy(() => import('@/components/map'));

const MainPage = () => {
  const isTextLoad = useSelector((state: RootState) => state?.load?.isTextLoad);
  const isContactLoad = useSelector(
    (state: RootState) => state?.load?.isContactLoad
  );
  const isDateLoad = useSelector((state: RootState) => state?.load?.isDateLoad);
  const isPhotoLoad = useSelector(
    (state: RootState) => state?.load?.isPhotoLoad
  );
  const isMapLoad = useSelector((state: RootState) => state?.load?.isPhotoLoad);
  const isContactPopup = useSelector(
    (state: RootState) => state?.popup?.isContactPopup
  );
  const isCommentPopup = useSelector(
    (state: RootState) => state?.popup?.isCommentPopup
  );
  const isMainLoading = useSelector((state: RootState) => state.main.isLoading);
  return (
    <>
      <div className="card-main">
        <Suspense fallback={null}>
          {isMainLoading ? <LazyMain /> : null}
        </Suspense>
        <Suspense fallback={null}>{isTextLoad ? <LazyText /> : null}</Suspense>
        <Suspense fallback={null}>
          {isContactLoad ? <LazyContact /> : null}
        </Suspense>
        <Suspense fallback={null}>{isDateLoad ? <LazyDate /> : null}</Suspense>
        <Suspense fallback={null}>
          {isPhotoLoad ? <LazyPhoto /> : null}
        </Suspense>
        <Suspense fallback={null}>{isMapLoad ? <LazyMap /> : null}</Suspense>
        <Account />
        <Comment />
      </div>
      {isContactPopup ? <ContactInfoPopup /> : null}
      {isCommentPopup ? <GuestCommentPopup /> : null}
    </>
  );
};
export default MainPage;
