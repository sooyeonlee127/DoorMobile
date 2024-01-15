import WeddingGallery from './WeddingGallery/WeddingGallery';
import { ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMap } from '../../store/load/loadSlice';
import GalleryPopup from './GalleryPopup/GalleryPopup';
import { RootState } from '@/store';

const Photo = () => {
  const checkRef = useRef(null);
  const dispatch = useDispatch();
  const isMapLoad = useSelector((state: RootState) => state?.load?.isMapLoad);
  const isPhotoPopup = useSelector(
    (state: RootState) => state.popup.isPhotoPopup
  );
  const loaderMore = useCallback(() => {
    if (!isMapLoad) {
      dispatch(loadMap());
    }
  }, [isMapLoad]);

  useEffect(() => {
    if (!checkRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loaderMore();
      }
    });
    observer.observe(checkRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <ComponentContainer>
        <WeddingGallery />
        <CheckEndBox ref={checkRef}></CheckEndBox>
      </ComponentContainer>
      {isPhotoPopup ? <GalleryPopup /> : null}
    </>
  );
};
export default Photo;
