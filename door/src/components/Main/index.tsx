import MainPhoto from './MainPhoto/MainPhoto';
// import MainDate from './MainDate/MainDate';
// import MainText from './MainText/MainText';
import { ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback, Suspense, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadText } from '../../store/load/loadSlice'

const Main = () => {
  const checkRef = useRef(null)
  const dispatch = useDispatch();
  const isTextLoad = useSelector((state: any) => state?.load?.isTextLoad);

  const loaderMore = useCallback(() => {
    if (!isTextLoad) {
      dispatch(loadText())
    }
  }, [isTextLoad])

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
      {/* <MainDate /> */}
      <MainPhoto />
      {/* <MainText /> */}
      <CheckEndBox ref={checkRef}></CheckEndBox>
    </ComponentContainer>
  );
};
export default Main;
