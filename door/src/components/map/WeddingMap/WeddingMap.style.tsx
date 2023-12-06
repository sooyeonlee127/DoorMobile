import styled from '@emotion/styled';

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export const Map = styled.div`
  width: 400px;
  height: 300px;
`;

export const MapBtnBox = styled.div`
  width: 400px;
  height: 50px;
  background-color: #f2eeee;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const MapBtn = styled.div`
  width: calc(33.333% - 10px);
  font-size: 13px;
`;
