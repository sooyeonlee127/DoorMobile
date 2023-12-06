import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px 40px;
`;

export const PhotoBox = styled.div`
  position: relative;
  width: calc(33.333% - 10px);
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 2%;
`;

export const Photo = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;
