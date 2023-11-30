import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { MdTextResponsive } from '@/styles';
import { css } from '@emotion/react';

export const ContactContainer = styled.div`
  padding: 25px 0px;
`;

export const ContactBox = styled.div`
  padding: 5px 0px;
`;

export const Name = styled.span`
  font-size: ${theme.fontSizes.md};
  ${MdTextResponsive}
`;

export const Relation = styled.span`
  padding: 0px 9px;
  letter-spacing: 1px;
`;
const maxWidth = 460
const widthSize = 230

export const BtnStyle = css({
  width: '230px',
  color: theme.colors.pointFont,
  '&:hover': {
    backgroundColor: theme.colors.pointFont,
    color: 'white',
  },
    '@media (max-width: 420px)': {
      width: `${(widthSize * 420) / maxWidth}px`,
    },
    '@media (max-width: 410px)': {
      width: `${(widthSize * 410) / maxWidth}px`,
    },
    '@media (max-width: 400px)': {
      width: `${(widthSize * 400) / maxWidth}px`,
    },
    '@media (max-width: 390px)': {
      width: `${(widthSize * 390) / maxWidth}px`,
    },
    '@media (max-width: 380px)': {
      width: `${(widthSize * 380) / maxWidth}px`,
    },
    '@media (max-width: 370px)': {
      width: `${(widthSize * 370) / maxWidth}px`,
    },
    '@media (max-width: 360px)': {
      width: `${(widthSize * 360) / maxWidth}px`,
    },
    '@media (max-width: 350px)': {
      width: `${(widthSize * 350) / maxWidth}px`,
    },
    '@media (max-width: 340px)': {
      width: `${(widthSize * 340) / maxWidth}px`,
    },
    '@media (max-width: 330px)': {
      width: `${(widthSize * 330) / maxWidth}px`,
    },
    '@media (max-width: 310px)': {
      width: `${(widthSize * 310) / maxWidth}px`,
    },
    '@media (max-width: 300px)': {
      width: `${(widthSize * 300) / maxWidth}px`,
    },
});
