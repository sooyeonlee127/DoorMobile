import {
  FamousSayingContainer,
  FamousSayingBox,
  Logo,
  Text,
} from './FamousSaytng.style';

const FamousSaying = () => {
  return (
    <FamousSayingContainer>
      <FamousSayingBox>
        <Logo src="/img/logo.png" alt="" />
      </FamousSayingBox>
      <FamousSayingBox>
        <Text>하늘 아래 내가 받은</Text>
        <Text>가장 커다란 선물은</Text>
        <Text>오늘입니다.</Text>
      </FamousSayingBox>
    </FamousSayingContainer>
  );
};
export default FamousSaying;
