import WeddingGallery from './WeddingGallery/WeddingGallery';
import { ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadMap } from '../../store/load/loadSlice'
const Photo = () => {
  const checkRef = useRef(null)
  const dispatch = useDispatch();
  const isMapLoad = useSelector((state: any) => state?.load?.isMapLoad);

  const loaderMore = useCallback(() => {
    if (!isMapLoad) {
      dispatch(loadMap())
    }
  }, [isMapLoad])

  useEffect(() => {
    if (!checkRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loaderMore()
      }
    })
    observer.observe(checkRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <ComponentContainer>
      <WeddingGallery />
      <CheckEndBox ref={checkRef}></CheckEndBox>
    </ComponentContainer>
  );
};
export default Photo;
