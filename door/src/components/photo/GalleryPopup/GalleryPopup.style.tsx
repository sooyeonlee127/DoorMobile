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

export const GalleryPopupContainer = styled.div`
  position: relative;
  max-width: 420px;
  min-height: 500px;

  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 420px;
  object-fit: none;
`;
