import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadDate } from '../../store/load/loadSlice'
import ContactInfo from "./ContactInfo/ContactInfo";
import { ComponentContainer, CheckEndBox } from './index.style';


const Contact = () => {
    const checkRef = useRef(null)
    const dispatch = useDispatch();
    const isDateLoad = useSelector((state: any) => state?.load?.isDateLoad);

    const loaderMore = useCallback(() => {
        if (!isDateLoad) {
            dispatch(loadDate())
        }
    }, [isDateLoad])

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
            <ContactInfo/>
            <CheckEndBox ref={checkRef}></CheckEndBox>
        </ComponentContainer>
    )
}
export default Contact;