import {
  ContactContainer,
  ContactBox,
  Name,
  Relation,
  BtnStyle,
} from './ContactInfo.style';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/index'
import RoundedButton from '@/components/common/RoundedButton/RoundedButton';
import { useEffect } from 'react';
import { getContactList } from '@/store/contact/thunkFunctions';
import { changeContactPopup } from '@/store/popup/popupSlice';

const ContactInfo = () => {
  const dispatch = useDispatch()
  const { groom, bride } = useSelector((state: RootState) => state.wedding.weddingInfo || {});
  const temp = () => {
    console.log('버튼 클릭')
    dispatch(changeContactPopup(true))
  }

  return (
    <ContactContainer>
      <ContactBox>
        <Name>{groom.parents.father}</Name>
        <Relation>의 {groom.groomRoleTypeName}</Relation>
        <Name>{groom.name}</Name>
      </ContactBox>
      <ContactBox>
        <Name>{bride.parents.father}</Name>
        <Relation>의 {bride.brideRoleTypeName}</Relation>
        <Name>{bride.name}</Name>
      </ContactBox>
      <RoundedButton btnText="연락하기" btnStyle={BtnStyle} clickEvent={temp}/>
    </ContactContainer>
  );
};
export default ContactInfo;
