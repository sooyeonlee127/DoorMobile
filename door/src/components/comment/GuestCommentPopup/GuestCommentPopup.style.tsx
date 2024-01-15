import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const PopupBackground = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PopupContainer = styled.div`
  background-color: #ffffff;
  min-width: 300px;
  min-height: 100px;
`;

export const TopSection = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  border-bottom: solid 0.3px;
  border-color: #ceb9b9;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
`;

export const FormSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: solid 0.3px;
  border-color: #ceb9b9;
`;

export const InputDiv = styled.div`
  width: calc(50% - 20px);
  height: 40px;
  border: solid 1px #ceb9b9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;

export const NameInput = styled.input`
  border: none;
  padding: 0 10px;
  width: calc(100% - 10px);
  height: 35px;
  font-size: 16px;
  font-family: var(--font-gothic);
  letter-spacing: var(--font-gothic-spacing);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: none;
  -webkit-border-radius: 0;
  box-sizing: border-box;
  vertical-align: top;
`;

export const ContentInput = styled.textarea`
  border: none;
  padding: 3px 10px;
  width: calc(100% - 10px);
  height: 130px;
  color: #000;
  font-size: 16px;
  font-family: var(--font-gothic);
  letter-spacing: var(--font-gothic-spacing);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: none;
  -webkit-border-radius: 0;
  box-sizing: border-box;
  vertical-align: top;
`;

export const TopInputBox = styled.div`
  display: flex;
`;

export const CommentInputDiv = styled.div`
  width: calc(100% - 30px);
  height: 140px;
  border: solid 1px #ceb9b9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;
const maxWidth = 460;
const widthSize = 230;

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
