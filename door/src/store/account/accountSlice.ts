import { createSlice } from '@reduxjs/toolkit';
import { getAccountInfo } from './thunkFunctions';
const initialState = {
  accountListInfo: {
    _id: '',
    weddingKey: '',
    groomAccountList: [
      {
        name: '',
        memberTypeCode: '',
        bank: '',
        number: '',
      },
    ],
    brideAccountList: [
      {
        name: '',
        memberTypeCode: '',
        bank: '',
        number: '',
      },
    ],
    __v: null,
  },
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccountInfo.fulfilled, (state, action) => {
      state.accountListInfo = action.payload;
    });
  },
});

export default accountSlice.reducer;
