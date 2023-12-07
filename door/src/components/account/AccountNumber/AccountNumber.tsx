import {
  AccountExplainText,
  Logo,
  TopExplainText,
  SubExplainText,
} from './AccountNumber.style';
import NumberList from '../NumberList/NumberList';
const AccountNumber = () => {
  return (
    <>
      <AccountExplainText>
        <Logo src="/img/logo.png" alt="" />
        <TopExplainText>마음 전하실 곳</TopExplainText>
        <SubExplainText>축복의 의미로 축의금을 전달해보세요.</SubExplainText>
      </AccountExplainText>
      <NumberList/>
    </>
  );
};
export default AccountNumber;
