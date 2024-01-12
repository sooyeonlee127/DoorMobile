import React, { useEffect, useRef, useCallback } from 'react';
import InvitationSentence from './InvitationSentence/InvitationSentence';
import { ComponentContainer, CheckEndBox } from './index.style';
import { useDispatch, useSelector } from 'react-redux'
import { loadContact } from '../../store/load/loadSlice'
import { useParams, useNavigate } from 'react-router-dom'
import { getWeddingInfo } from '@/store/wedding/thunkFunctions';

const Text = () => {
  const params = useParams()
  const checkRef = useRef(null)
  const dispatch = useDispatch();
  const isContactLoad = useSelector((state: any) => state?.load?.isContactLoad);

  const loaderMore = useCallback(() => {
    if (!isContactLoad) {
      dispatch(loadContact()) 
    }
  }, [isContactLoad])


  useEffect(() => {
    const getInfo = async (weddingKey: string) => {
      await dispatch(getWeddingInfo(weddingKey))
    }
    
    const weddingKey = params.weddingKey as string
    if (!checkRef.current) return
    getInfo(weddingKey)

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
      {/* <FamousSaying /> */}
      <InvitationSentence />
      <CheckEndBox ref={checkRef}></CheckEndBox>
    </ComponentContainer>
  );
};
export default Text;
