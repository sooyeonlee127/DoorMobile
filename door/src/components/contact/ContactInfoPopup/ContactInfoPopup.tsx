import {
  PopupBackground,
  PopupContainer,
  Header,
  Hr,
} from './ContactInfoPopup.style';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import ContactItem from '../ContactItem/ContactItem';
const ContactInfoPopup = () => {
  return (
    <PopupBackground>
      <PopupContainer>
        <Header>
          <TopNavigation title="Contact" subTitle="연락하기" />
        </Header>
        <ContactItem
          role="신랑"
          name="김민규"
          color="rgb(102, 142, 170)"
          phoneNum="123"
        />
        <ContactItem
          role="신랑 아버지"
          name="김준식"
          color="rgb(102, 142, 170)"
          phoneNum="123"
        />
        <Hr />
        <ContactItem
          role="신부"
          name="김주영"
          color="rgb(206, 131, 131)"
          phoneNum="123"
        />
        <ContactItem
          role="신부 아버지"
          name="김영식"
          color="rgb(206, 131, 131)"
          phoneNum="123"
        />
      </PopupContainer>
    </PopupBackground>
  );
};
export default ContactInfoPopup;
