import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { MdTextResponsive, SmTextResponsive } from '@/styles';
import { css } from '@emotion/react';

export const ContactContainer = styled.div`
  padding: 25px 0px;
  font-family: GowunDodum-Regular;
`;

export const ContactBox = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: ${theme.fontSizes.md};
  ${MdTextResponsive}
  font-weight: 1000;
`;

export const Relation = styled.span`
  padding: 0px 9px;
  font-weight: 50;
  ${SmTextResponsive};
`;
const maxWidth = 460;
const widthSize = 230;
