import Main from '@/components/main';
// import Text from '@/components/text';
// import Contact from '@/components/contact';
import Date from '@/components/date';
import Photo from '@/components/photo';
import Map from '@/components/map';
import Account from '@/components/account';
import Comment from '@/components/comment';
// import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
import React, { useEffect, useRef, useCallback, Suspense, lazy, useState } from 'react';
import { TextLoadCheck, ContactLoadCheck, DateLoadCheck } from './MainPage.style';

const LazyMain = lazy(() => import('@/components/main'))
const LazyText = lazy(() => import('@/components/text'))
const LazyContact = lazy(() => import('@/components/contact'))
const LazyDate = lazy(() => import('@/components/date'))

const MainPage = () => {
  const [showText, setShowText] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const textRef = useRef(null)
  const contactRef = useRef(null)
  const dateRef = useRef(null)
  const loaderMore = useCallback(() => {
    console.log('callback')
    if (!showText) {
      setShowText(true)
    } else if (!showContact) {
      setShowContact(true)
    }
  }, [])

  useEffect(() => {
    if (!textRef.current) return
    if (!contactRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loaderMore()
      }
    })
    observer.observe(textRef.current)
    observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="card-main">
        <Suspense fallback={null}>
          <LazyMain />
        </Suspense>
        <Main />
        <TextLoadCheck ref={textRef}></TextLoadCheck>
        <h1>{showText.toString()}</h1>
        <Suspense fallback={null}>
          {showText ? <LazyText /> : null}
        </Suspense>
        <ContactLoadCheck ref={contactRef}></ContactLoadCheck>
        <h1>{showContact.toString()}</h1>
        <Suspense fallback={null}>
          {showContact ? <LazyContact /> : null}
        </Suspense>
        <DateLoadCheck ref={dateRef}></DateLoadCheck>
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
