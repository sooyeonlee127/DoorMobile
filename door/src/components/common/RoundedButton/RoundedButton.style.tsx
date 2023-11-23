import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { ButtonHTMLAttributes } from 'react';

interface RoundedFillButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: SerializedStyles;
}
export const RoundedStrokeButtonBox = styled.button`
  width: 220px;
  border: 1px ${theme.colors.pointFont};
  border-style: solid;
  color: ${theme.colors.pointFont};
`;

export const RoundedButtonBox = styled.button<RoundedFillButtonProps>`
  ${(props) => props.css}
  padding: 7px;
  border-radius: 30px;
  margin: 10px 20px;
  border: 1px;
  border-style: solid;
`;
