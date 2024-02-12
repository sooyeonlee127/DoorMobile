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
import { changeContactPopup } from '../../../store/popup/popupSlice';

const ContactInfoPopup = () => {
  const dispatch = useDispatch();
  const contactListInfo = useSelector(
    (state: RootState) => state.contact.contactListInfo || {}
  );
  const { weddingKey } = useSelector(
    (state: RootState) => state.wedding.weddingInfo || {}
  );
  const closePopup = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changeContactPopup(false));
    }
  };

  useEffect(() => {
    dispatch(getContactList(weddingKey));
  }, []);

  return (
    <PopupBackground onClick={closePopup}>
      <PopupContainer>
        <Header>연락하기</Header>
        {contactListInfo?.contactList?.map(
          (contact: IContactItem, index: number) => (
            <div key={index}>
              <ContactItem
                role={contact.memberTypeCode}
                name={contact.name}
                color={'#303030'}
                phoneNum={contact.number}
              />
            </div>
          )
        )}
      </PopupContainer>
    </PopupBackground>
  );
};
export default ContactInfoPopup;
