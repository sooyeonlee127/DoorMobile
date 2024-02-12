import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 13px 0px;
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  font-family: GowunDodum-Regular;
  margin: 2px 0px;
`;

export const Role = styled.div(
  {
    textAlign: 'center',
    fontFamily: 'GowunDodum-Regular',
  },
  (props) => ({
    color: props.color,
  })
);

export const Name = styled.div`
  text-align: center;
`;

export const IconGroup = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px;
`;
