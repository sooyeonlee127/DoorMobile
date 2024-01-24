import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const CommentContainer = styled.div`
  position: relative;
  padding: 0.75rem 1rem;
  text-align: left;
  line-height: 1.5rem;
  background: hsla(0, 0%, 100%, 0.75);
  border-radius: 8px;
  margin-bottom: 6px;
  box-shadow: 1px 1px 2px rgb(0 0 0/5%);
`;
export const TopBox = styled.div`
  display: flex;
`;
export const NameText = styled.div`
    font-size: ${theme.fontSizes.xs}
    position: absolute;
    left: 1rem;
`;

export const DateText = styled.div`
  position: absolute;
  right: 1rem;
  font-size: ${theme.fontSizes.xxs};
  display: flex;
`;
export const CloseIcon = styled.div`
  margin: 0rem 0rem 0rem 0.5rem;
`;

export const BottomBox = styled.div`
  font-size: ${theme.fontSizes.xs};
`;
