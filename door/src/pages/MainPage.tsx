import Main from '@/components/main';
import Text from '@/components/text';
import Contact from '@/components/contact';
import Date from '@/components/date';
import Photo from '@/components/photo';
import Map from '@/components/map';
import Account from '@/components/account';
import ContactInfoPopup from '@/components/contact/ContactInfoPopup/ContactInfoPopup';
const MainPage = () => {
  return (
    <>
      <div className="card-main">
        <Main />
        <Text />
        <Contact />
        <Date />
        <Photo />
        <Map />
        <Account />
      </div>
      {/* <ContactInfoPopup /> */}
    </>
  );
};
export default MainPage;
