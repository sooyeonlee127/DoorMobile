import MainPhoto from './MainPhoto/MainPhoto';
import MainDate from './MainDate/MainDate';
import MainText from './MainText/MainText';
import { ComponentContainer } from './index.style';
const main = () => {
  return (
    <ComponentContainer>
      <MainDate />
      <MainPhoto />
      <MainText />
    </ComponentContainer>
  );
};
export default main;
