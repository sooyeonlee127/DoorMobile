import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { SmTextResponsive, MdTextResponsive } from '@/styles';

export const Title = styled.h1`
  font-family: CrimsonText-Bold;
  color: ${theme.colors.pointFont};
  font-size: ${theme.fontSizes.sm};
  letter-spacing: 2px;
  ${SmTextResponsive}
  padding: 3px 0px;
`;
export const SubTitle = styled.h3`
  color: ${theme.colors.semiPointFont};
  font-size: ${theme.fontSizes.md};
  ${MdTextResponsive}
`;

export const TopNavigationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TopNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-dirction: row;
  flex-wrap: wrap;
  padding: 30px 0px;
`;
