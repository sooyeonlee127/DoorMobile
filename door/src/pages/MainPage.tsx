import Main from '@/components/main';
import Text from '@/components/text';
import Contact from '@/components/contact';
import Date from '@/components/date';
import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
const MainPage = () => {
  return (
    <>
      <div className="card-main">
        <Main />
        <Text />
        <Contact />
        <Date />
      </div>
      {/* <ContactInfoPopup /> */}
    </>
  );
};
export default MainPage;
