import styled from '@emotion/styled';

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
  position: relative;
  width: 430px;
  margin-bottom: 10px;
`;

export const SelectImg = styled.img`
  width: 100%;
`;

export const BtnGroup = styled.div``;
