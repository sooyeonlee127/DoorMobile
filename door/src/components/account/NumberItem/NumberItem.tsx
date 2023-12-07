import { NumberContaner, NumberTitleBox, NumberBox, NumberContentBox, NumberContentBankName, NumberContentBankAccount, NumberContent, NumberList, NumberListItem } from './NumberItem.style';
import React, { useState } from 'react';

interface BankItem {
  ownerName: string;
  bankName: string;
  accountNumber: string;
}

interface NumberItemProps {
  role: string;
  bankList: BankItem[]
}

const NumberItem = ({role, bankList}: NumberItemProps) => {
  const [className, setClassName] = useState('')
  const cilckChangeIsActive = () => {
    if (className === '') {
      setClassName('is-active')
    } else {
      setClassName('')
    }
  }
  const bankListCompo = () => {
    return bankList.map((bank, index) => (
      <React.Fragment key={index}>
        <NumberListItem>
        <NumberContentBankName>{bank.bankName}</NumberContentBankName>
        <NumberContentBankAccount>{bank.accountNumber}</NumberContentBankAccount>
        </NumberListItem>
      </React.Fragment>
    ));
  };

  return (
    <>
    <NumberContaner>
      <NumberBox>
        <NumberTitleBox onClick={cilckChangeIsActive}>{role}측 계좌번호</NumberTitleBox>
        <NumberContentBox>
          <NumberContent className={className}>
            <NumberList>
            {bankListCompo()}
            </NumberList>
          </NumberContent>
        </NumberContentBox>
      </NumberBox>
    </NumberContaner>
    </>
  );
};
export default NumberItem;
