import {TopNavigationContainer, Title, SubTitle,TopNavigationBox} from './TopNavigation.style'

interface TopNavigationProps {
  title: string;
  subTitle: string;
}

const TopNavigation = ({title, subTitle} : TopNavigationProps) => {

  return <TopNavigationContainer>
    <TopNavigationBox>
      <Title>{title}</Title>
    </TopNavigationBox>
    <TopNavigationBox>
      <SubTitle>{subTitle}</SubTitle>
    </TopNavigationBox>
  </TopNavigationContainer>;
};
export default TopNavigation;
