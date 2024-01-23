import {
  NumberContaner,
  NumberTitleBox,
  NumberBox,
  NumberContentBox,
  NumberContent,
  NumberList,
  // ============
  NumberListItem,
  NumberListItemContent,
  NumberListItemPointContent
} from './NumberItem.style';
import React, { useState } from 'react';

interface BankItem {
  name: string;
  memberTypeCode: string;
  bank: string;
  number: string;
}

interface NumberItemProps {
  role: string;
  bankList: BankItem[];
}

const NumberItem = ({ role, bankList }: NumberItemProps) => {
  const [className, setClassName] = useState('');
  const cilckChangeIsActive = () => {
    if (className === '') {
      setClassName('is-active');
    } else {
      setClassName('');
    }
  };
  const bankListCompo = () => {
    return bankList.map((bank, index) => (
      <React.Fragment key={index}>
        <NumberListItem>
          <NumberListItemPointContent>{bank.name}</NumberListItemPointContent>
          <NumberListItemContent>{bank.bank}</NumberListItemContent>
          <NumberListItemContent>{bank.number}</NumberListItemContent>
        </NumberListItem>
      </React.Fragment>
    ));
  };

  return (
    <>
      <NumberContaner>
        <NumberBox>
          <NumberTitleBox onClick={cilckChangeIsActive}>
            {role}측 계좌번호
          </NumberTitleBox>
          <NumberContentBox>
            <NumberContent className={className}>
              <NumberList>{bankListCompo()}</NumberList>
            </NumberContent>
          </NumberContentBox>
        </NumberBox>
      </NumberContaner>
    </>
  );
};
export default NumberItem;
