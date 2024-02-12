import { css, keyframes } from '@emotion/react';
import theme from './theme';

const fontSize = 18;
const maxWidth = 420;

export const GlobalStyle = css({
  '.card-main': {
    position: 'relative',
    width: '100%',
    maxWidth: `${maxWidth}px`,
    padding: '0',
    margin: 'auto',
    fontSize: `${fontSize}px`,
    backgroundColor: theme.colors.page,
    color: theme.colors.mainFont,
    // // 폰트 반응형
    '@media (max-width: 420px)': {
      fontSize: `${(fontSize * 420) / maxWidth}px`,
    },
    '@media (max-width: 410px)': {
      fontSize: `${(fontSize * 410) / maxWidth}px`,
    },
    '@media (max-width: 400px)': {
      fontSize: `${(fontSize * 400) / maxWidth}px`,
    },
    '@media (max-width: 390px)': {
      fontSize: `${(fontSize * 390) / maxWidth}px`,
    },
    '@media (max-width: 380px)': {
      fontSize: `${(fontSize * 380) / maxWidth}px`,
    },
    '@media (max-width: 370px)': {
      fontSize: `${(fontSize * 370) / maxWidth}px`,
    },
    '@media (max-width: 360px)': {
      fontSize: `${(fontSize * 360) / maxWidth}px`,
    },
    '@media (max-width: 350px)': {
      fontSize: `${(fontSize * 350) / maxWidth}px`,
    },
    '@media (max-width: 340px)': {
      fontSize: `${(fontSize * 340) / maxWidth}px`,
    },
    '@media (max-width: 330px)': {
      fontSize: `${(fontSize * 330) / maxWidth}px`,
    },
    '@media (max-width: 310px)': {
      fontSize: `${(fontSize * 310) / maxWidth}px`,
    },
    '@media (max-width: 300px)': {
      fontSize: `${(fontSize * 300) / maxWidth}px`,
    },
  },
  '.App': {
    backgroundColor: theme.colors.background,
    width: '100%',
    padding: '0',
    margin: '0',
    textAlign: 'center',
  },
  td: {
    padding: '10px 0px',
  },
  '.wedding-day': {
    color: 'white',
    backgroundColor: '#CDC3C3',
    borderRadius: '50%',
  },
  '.sun-day': {
    color: '#C35663',
  },
});

const TextSizeCheck = (text: number, width: number) => {
  return css({
    '@media (max-width: 420px)': {
      fontSize: `${(text * 420) / width}px`,
    },
    '@media (max-width: 410px)': {
      fontSize: `${(text * 410) / width}px`,
    },
    '@media (max-width: 400px)': {
      fontSize: `${(text * 400) / width}px`,
    },
    '@media (max-width: 390px)': {
      fontSize: `${(text * 390) / width}px`,
    },
    '@media (max-width: 380px)': {
      fontSize: `${(text * 380) / width}px`,
    },
    '@media (max-width: 370px)': {
      fontSize: `${(text * 370) / width}px`,
    },
    '@media (max-width: 360px)': {
      fontSize: `${(text * 360) / width}px`,
    },
    '@media (max-width: 350px)': {
      fontSize: `${(text * 350) / width}px`,
    },
    '@media (max-width: 340px)': {
      fontSize: `${(text * 340) / width}px`,
    },
    '@media (max-width: 330px)': {
      fontSize: `${(text * 330) / width}px`,
    },
    '@media (max-width: 310px)': {
      fontSize: `${(text * 310) / width}px`,
    },
    '@media (max-width: 300px)': {
      fontSize: `${(text * 300) / width}px`,
    },
  });
};

const xxs = 12;
const xs = 13;
const sm = 14;
const base = 16;
const md = 18;
const lg = 20;

export const XxsTextResponsive = TextSizeCheck(xxs, 460);
export const XsTextResponsive = TextSizeCheck(xs, 460);
export const BaseTextResponsive = TextSizeCheck(base, 460);
export const SmTextResponsive = TextSizeCheck(sm, 460);
export const MdTextResponsive = TextSizeCheck(md, 460);
export const LgTextResponsive = TextSizeCheck(lg, 460);

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeInStyle = css({
  animation: `${fadeIn} 3s`,
});
