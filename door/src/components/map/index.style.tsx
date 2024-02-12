import styled from '@emotion/styled';
import { fadeInStyle } from '@/styles';

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  margin: 5px 0px;
  ${fadeInStyle}
`;

export const MainLocation = styled.div`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 10px 0px;
`;

export const SubLocation = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

export const ComponentContainer = styled.div`
  min-height: 700px;
  position: relative;
`;

export const CheckEndBox = styled.div`
  width: 100px;
  height: 50px;
  bottom: 0;
  // background-color: green;
`;
