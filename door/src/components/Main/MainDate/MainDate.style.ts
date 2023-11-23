import styled from '@emotion/styled';
import { LgTextResponsive, XxsTextResponsive } from '@/styles';
import theme from '@/styles/theme';

export const MainDateContainer = styled.div`
  padding: 20px 0 30px;
`;

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Date = styled.span`
  margin: 5px 2px;
  font-size: ${theme.fontSizes.lg};
  font-family: GowunBatang-Bold;
  letter-spacing: 1px;
  ${LgTextResponsive}
`;

export const DayOfWeek = styled.span`
  margin: 2px 4px;
  font-size: ${theme.fontSizes.xxs};
  font-family: GowunBatang-Bold;
  letter-spacing: 5px;
  ${XxsTextResponsive}
`;
