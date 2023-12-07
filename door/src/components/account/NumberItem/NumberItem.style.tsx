import styled from '@emotion/styled';

export const NumberContaner = styled.div`
  padding: 0px 20px;
  margin: 5px 0px;

`;
export const NumberBox = styled.div`
`;


export const NumberTitleBox = styled.div`
    padding: 10px 15px;
    border-bottom: 1px solid #dcdcdc;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAZxJREFUaEPtlkFOwzAQRetN1r0JHKG9AVkkWQI34AaIG3ADYJlkEW5Aj9DehHU2YaZKqwrhxBnPt1A12SSV+r/z/rdju9WVXO5KOFYG8t+atEasEVACNrVAwYptrRFxdCChNQIKVmxrjYijAwmtEVCwYtvZRuq6viP3e+fcS1mWe/FIAmHTNLfDMDyT9KOqqs8pi0mQtm03ZPQ1GnzTfZsKhiFoPB57zeNTkNuiKHY+mEkQMnsg4duFOAnMb4hx/EcK8V0EwiKaWntK4yYVzF8QNCsONLW4Ie81u0a6rlv3fb9LAeODyLJsk+c5zwY5CCtTwMRAHNdQ6McECRMLsQgE1YwGxGIQbRgtCBGIFowmhBgkFkYbIgpECoOAiAZZCoOCUAEJhUFCqIHMwYx71fkAyL/52BGyY4fuc8EbYojhxKbJ8uMpFgGh2sjpJT0w5xy0mzgZqzYyB4OCgDTig0FCQEEuPgCv/EwL+2nuKB6yDn3/gUytmBeSag1EmhxKZ42gkpX6WiPS5FA6awSVrNTXGpEmh9JZI6hkpb4/n+cvQh1P6WkAAAAASUVORK5CYII=);
    background-size: 26px auto;
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) 50%;
    cursor: pointer;
    background-color: #f2eeee
`;

export const NumberContentBox = styled.div`
    padding: 10px 15px;
    background-size: 26px auto;
    background-position: calc(100% - 20px) 50%;
    background-color: #fff

`;

export const NumberContent = styled.div`
  display: none;
  align-items: center;

  &.is-active {
    display: flex
  }
`

export const NumberList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`

export const NumberListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0px
`

export const NumberContentBankName = styled.div`
  width: calc(20% - 5px);
  border-right: 1px solid #dcdcdc;
`

export const NumberContentBankAccount = styled.div`
  width: calc(70% - 5px);
`