import FamousSaying from './FamousSaying/FamousSaying';
import InvitationSentence from './InvitationSentence/InvitationSentence';
import { ComponentContainer, CheckEndBox } from './index.style';
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadContact } from '../../store/load/loadSlice'

const Text = () => {
  const checkRef = useRef(null)
  const dispatch = useDispatch();
  const isContactLoad = useSelector((state: any) => state?.load?.isContactLoad);

  const loaderMore = useCallback(() => {
    if (!isContactLoad) {
      dispatch(loadContact())
    }
  }, [isContactLoad])
  
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
      <FamousSaying />
      <InvitationSentence />
      <CheckEndBox ref={checkRef}></CheckEndBox>
    </ComponentContainer>
  );
};
export default Text;
