import styled from '@emotion/styled';

export const PopupBackground = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  background: white;
  position: relative;
  width: 350px;
`;

export const Header = styled.div`
  background: lightgray;
  width: 100%;
`;

export const Hr = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 90%;
`;
