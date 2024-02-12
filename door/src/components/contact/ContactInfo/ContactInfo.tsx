import {
  ContactContainer,
  ContactBox,
  Name,
  Relation,
} from './ContactInfo.style';
import { FaPhone } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/index';
import { useEffect } from 'react';
import { getContactList } from '@/store/contact/thunkFunctions';
import { changeContactPopup } from '@/store/popup/popupSlice';
import CommonButton from '@/components/common/CommonButton/CommonButton';
const ContactInfo = () => {
  const dispatch = useDispatch();
  const { groom, bride } = useSelector(
    (state: RootState) => state.wedding.weddingInfo || {}
  );
  const temp = () => {
    dispatch(changeContactPopup(true));
  };
  const clickCall = (phoneNum: string) => {
    window.location.href = 'tel:' + phoneNum;
  };
  return (
    <ContactContainer>
      <ContactBox>
        <Name>
          {groom.parents.father} · {groom.parents.father}
        </Name>
        <Relation>의 {groom.groomRoleTypeName}</Relation>
        <Name>{groom.name}</Name>
        <FaPhone
          size={'20px'}
          style={{
            backgroundColor: '#303030',
            borderRadius: '100%',
            padding: '5px',
            marginLeft: '10px',
          }}
          color={'white'}
        />
      </ContactBox>
      <ContactBox>
        <Name>
          {bride.parents.father} · {bride.parents.mother}
        </Name>
        <Relation>의 {bride.brideRoleTypeName}</Relation>
        <Name>{bride.name}</Name>
        <FaPhone
          size={'20px'}
          style={{
            backgroundColor: '#303030',
            borderRadius: '100%',
            padding: '5px',
            marginLeft: '10px',
          }}
          color={'white'}
        />
      </ContactBox>
      <CommonButton btnText="연락하기" clickEvent={temp}></CommonButton>
    </ContactContainer>
  );
};
export default ContactInfo;
