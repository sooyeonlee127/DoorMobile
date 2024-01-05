import MainPhoto from './MainPhoto/MainPhoto';
import MainDate from './MainDate/MainDate';
import MainText from './MainText/MainText';
import { ComponentContainer } from './index.style';

const Main = () => {

  return (
    <ComponentContainer>
      <MainDate />
      <MainPhoto />
      <MainText />
    </ComponentContainer>
  );
};
export default Main;
