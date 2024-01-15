import React, { useEffect } from 'react';
import NumberItem from '../NumberItem/NumberItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAccountInfo } from '@/store/account/thunkFunctions';
import { RootState } from '@/store';
const NumberList = () => {
  const dispatch = useDispatch();
  const { groomAccountList, brideAccountList } = useSelector(
    (state: RootState) => state.account.accountListInfo
  );
  const { weddingKey } = useParams();
  useEffect(() => {
    dispatch(getAccountInfo(weddingKey));
  }, []);

  return (
    <>
      <React.Fragment>
        <NumberItem role={'신랑'} bankList={groomAccountList}></NumberItem>
      </React.Fragment>
      <React.Fragment>
        <NumberItem role={'신부'} bankList={brideAccountList}></NumberItem>
      </React.Fragment>
    </>
  );
};
export default NumberList;
