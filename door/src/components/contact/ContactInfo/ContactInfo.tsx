import {
  ContactContainer,
  ContactBox,
  Name,
  Relation,
  BtnStyle,
} from './ContactInfo.style';
import RoundedButton from '@/components/common/RoundedButton/RoundedButton';
import { css } from '@emotion/react';

const ContactInfo = () => {
  const temp = () => {
    console.log('temp')
  }
  return (
    <ContactContainer>
      <ContactBox>
        <Name>김민철</Name>
        <Relation>의 아들</Relation>
        <Name>민규</Name>
      </ContactBox>
      <ContactBox>
        <Name>이주영</Name>
        <Relation>의 딸</Relation>
        <Name>주현</Name>
      </ContactBox>
      <RoundedButton btnText="연락하기" btnStyle={BtnStyle} clickEvent={temp}/>
    </ContactContainer>
  );
};
export default ContactInfo;
