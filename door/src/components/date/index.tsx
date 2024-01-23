import WeddingCalendar from './WeddingCalendar/WeddingCalendar';
import { ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadPhoto } from '../../store/load/loadSlice'

const Date = () => {
  const checkRef = useRef(null)
  const dispatch = useDispatch();
  const isPhotoLoad = useSelector((state: any) => state?.load?.isPhotoLoad);

  const loaderMore = useCallback(() => {
    if (!isPhotoLoad) {
      dispatch(loadPhoto(true))
    }
  }, [isPhotoLoad])

  useEffect(() => {
    if (!checkRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          loaderMore();
        }, 1000)
      }
    });
    observer.observe(checkRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <ComponentContainer>
      <WeddingCalendar></WeddingCalendar>
      <CheckEndBox ref={checkRef}></CheckEndBox>
    </ComponentContainer>
  );
};
export default Date;
