import { css } from '@emotion/react';
import { basicTheme } from './theme';

const THEME = basicTheme // 추후 스타일 추가

export const GlobalStyle = css({
  '.card-main': {
    position: 'relative',
    width: '100%',
    maxWidth: '430px',
    padding: '0',
    margin: 'auto',
    backgroundColor: THEME.colors.page,
  },


  '.App': {
    backgroundColor: THEME.colors.backgroud,
    width: '100%',
    padding: '0',
    margin: '0',
  },
});