import {
  PopupBackground,
  PopupContainer,
  Header,
  Hr,
} from './ContactInfoPopup.style';
import { RootState } from '@/store';
import { IContactItem } from '@/types/contact';
import { useSelector, useDispatch } from 'react-redux';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { getContactList } from '@/store/contact/thunkFunctions';

const ContactInfoPopup = () => {
  const dispatch = useDispatch()
  const { contactList } = useSelector((state: RootState) => state.contact.contactListInfo || {});
  const { weddingKey } = useSelector((state: RootState) => state.wedding.weddingInfo || {});

  console.log(contactList)
  useEffect(() => {
    dispatch(getContactList(weddingKey))
  }, [])
  return (
    <PopupBackground>
      <PopupContainer>
        <Header>
          <TopNavigation title="Contact" subTitle="연락하기" />
        </Header>
        {contactList[0]}
        {
          contactList && contactList?.forEach((contact: IContactItem) => {
            <ContactItem
              role={contact.memberTypeCode}
              name={contact.name}
              color="black"
              phoneNum={contact.number}
            />
          })
        }

      </PopupContainer>
    </PopupBackground>
  );
};
export default ContactInfoPopup;
