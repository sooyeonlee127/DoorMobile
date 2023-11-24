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

export const BtnStyle = css({
  width: '230px',
  color: theme.colors.pointFont,
  '&:hover': {
    backgroundColor: theme.colors.pointFont,
    color: 'white',
  },
});
