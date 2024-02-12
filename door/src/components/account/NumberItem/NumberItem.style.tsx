import styled from '@emotion/styled';

export const Contaner = styled.div`
  padding: 0px 20px;
  margin: 5px 0px;
`;
export const Box = styled.div``;

export const ClickBox = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #dcdcdc;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAZxJREFUaEPtlkFOwzAQRetN1r0JHKG9AVkkWQI34AaIG3ADYJlkEW5Aj9DehHU2YaZKqwrhxBnPt1A12SSV+r/z/rdju9WVXO5KOFYG8t+atEasEVACNrVAwYptrRFxdCChNQIKVmxrjYijAwmtEVCwYtvZRuq6viP3e+fcS1mWe/FIAmHTNLfDMDyT9KOqqs8pi0mQtm03ZPQ1GnzTfZsKhiFoPB57zeNTkNuiKHY+mEkQMnsg4duFOAnMb4hx/EcK8V0EwiKaWntK4yYVzF8QNCsONLW4Ie81u0a6rlv3fb9LAeODyLJsk+c5zwY5CCtTwMRAHNdQ6McECRMLsQgE1YwGxGIQbRgtCBGIFowmhBgkFkYbIgpECoOAiAZZCoOCUAEJhUFCqIHMwYx71fkAyL/52BGyY4fuc8EbYojhxKbJ8uMpFgGh2sjpJT0w5xy0mzgZqzYyB4OCgDTig0FCQEEuPgCv/EwL+2nuKB6yDn3/gUytmBeSag1EmhxKZ42gkpX6WiPS5FA6awSVrNTXGpEmh9JZI6hkpb4/n+cvQh1P6WkAAAAASUVORK5CYII=);
  background-size: 26px auto;
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) 50%;
  cursor: pointer;
  background-color: #303030;
  color: white;
  font-family: GowunDodum-Regular;
`;

export const OpenBox = styled.div`
  padding: 10px 15px;
  background-size: 26px auto;
  background-position: calc(100% - 20px) 50%;
  background-color: #fff;
`;

export const NumberListBox = styled.div`
  display: none;
  align-items: center;
  font-family: GowunDodum-Regular;
  font-weight: 100;
  &.is-active {
    display: flex;
  }
`;

export const NumberList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// =============================================================
// bankListCompo 스타일

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
  align-items: flex-start;
`;

export const BankInfo = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  font-weight: 100;
  font-size: 15px;
  margin: 2px 0px;
`;

export const OwnerName = styled.div`
  font-weight: 1000;
  margin: 3px 0px;
`;
export const CopyButton = styled.div`
  width: 70px;
  height: 32px;
  background-color: #303030;
  color: white;
  font-family: GowunDodum-Regular;
  position: absolute;
  right: 0;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
