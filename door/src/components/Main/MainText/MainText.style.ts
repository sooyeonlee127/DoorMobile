import styled from '@emotion/styled';
import { BaseTextResponsive, LgTextResponsive } from '@/styles';
import theme from '@/styles/theme';

export const MainTextContainer = styled.div`
  padding: 20px 0 30px;
`;

export const MainTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Date = styled.span`
  margin: 2px 4px;
  font-size: ${theme.fontSizes.base};
  ${BaseTextResponsive}
`;

export const Name = styled.span`
  margin: 12px 10px;
  font-size: ${theme.fontSizes.lg}
  letter-spacing: 1px;
  ${LgTextResponsive}
`;
