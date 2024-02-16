import Account from '@/components/account';
import Comment from '@/components/comment';
import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import CommentCreatePopup from '@/components/comment/CommentCreatePopup/CommentCreatePopup';
import CommentDetailPopup from '@/components/comment/CommentDetailPopup/CommentDetailPopup';
import SnackBar from '@/components/common/SnackBar/SnackBar';
import React, { Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
  loadText,
  loadContact,
  loadDate,
  loadPhoto,
  loadMap,
} from '@/store/load/loadSlice';
import {
  changeContactPopup,
  changeCommentContent,
  changeCommentCreatePopup,
  changeCommentDetailPopup,
  changePhotoPopup,
} from '@/store/popup/popupSlice';

const LazyMain = lazy(() => import('@/components/main'));
const LazyText = lazy(() => import('@/components/text'));
const LazyContact = lazy(() => import('@/components/contact'));
const LazyDate = lazy(() => import('@/components/date'));
const LazyPhoto = lazy(() => import('@/components/photo'));
const LazyMap = lazy(() => import('@/components/map'));

const MainPage = () => {
  const dispatch = useDispatch();
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
  const isCommentCreatePopup = useSelector(
    (state: RootState) => state?.popup?.isCommentCreatePopup
  );
  const isCommentDetailPopup = useSelector(
    (state: RootState) => state?.popup?.isCommentDetailPopup
  );
  const isMainLoading = useSelector((state: RootState) => state.main.isLoading);
  const isVisible = useSelector((state:RootState) => state.snackbar.isVisible)
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      // dispatch(changeCommentDetailPopup(false));
      // dispatch(changeCommentCreatePopup(false));
      // dispatch(changePhotoPopup(false));
      // dispatch(changeContactPopup(false));
      dispatch(loadText(false));
      dispatch(loadContact(false));
      dispatch(loadDate(false));
      dispatch(loadPhoto(false));
      dispatch(loadMap(false));

      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <div className="card-main">
        <Suspense fallback={null}>
          <LazyMain />
        </Suspense>
        {/* <Suspense fallback={null}>
          <LazyText />
        </Suspense> */}
        <Suspense fallback={null}>
          <LazyContact />
        </Suspense>
        <Suspense fallback={null}>
          <LazyDate /> 
        </Suspense>
        <Suspense fallback={null}>
          <LazyPhoto />
        </Suspense>
        {/* <Suspense fallback={null}>
          <LazyMap />
        </Suspense> */}
        <Account />
        <Comment />
      </div>
      {isContactPopup ? <ContactInfoPopup /> : null}
      {isCommentCreatePopup ? <CommentCreatePopup /> : null}
      {isCommentDetailPopup ? <CommentDetailPopup /> : null}
      {isVisible ? <SnackBar /> : null}
    </>
  );
};
export default MainPage;
