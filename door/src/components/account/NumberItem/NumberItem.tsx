import {
  Contaner,
  ClickBox,
  Box,
  OpenBox,
  NumberListBox,
  NumberList,
  // ============
  ListItem,
  BankInfo,
  OwnerName,
  CopyButton,
} from './NumberItem.style';
import React, { useState } from 'react';
import useSnackbar from '@/hooks/useSnackbar';
import SNACKBAR_MESSAGE from '@/constants/snackbar'
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
  const { showSnackbar } = useSnackbar()
  const [className, setClassName] = useState('');
  const cilckChangeIsActive = () => {
    if (className === '') {
      setClassName('is-active');
    } else {
      setClassName('');
    }
  };
  const copyText = (bank: BankItem) => {
    navigator.clipboard.writeText(`${bank.bank} ${bank.number}`)
    showSnackbar(SNACKBAR_MESSAGE.ACCOUNT_COPY)
  }
  const bankListCompo = () => {
    return bankList.map((bank, index) => (
      <React.Fragment key={index}>
        <ListItem>
          <OwnerName>{bank.name}</OwnerName>
          <BankInfo>
            {bank.bank} <CopyButton onClick={()=> copyText(bank)}>복사하기</CopyButton>
          </BankInfo>
          <BankInfo>{bank.number}</BankInfo>
        </ListItem>
      </React.Fragment>
    ));
  };

  return (
    <>
      <Contaner>
        <Box>
          <ClickBox onClick={cilckChangeIsActive} className={className}>
            {role}측 마음 전하는 곳
          </ClickBox>
          <OpenBox>
            <NumberListBox className={className}>
              <NumberList>{bankListCompo()}</NumberList>
            </NumberListBox>
          </OpenBox>
        </Box>
      </Contaner>
    </>
  );
};
export default NumberItem;
