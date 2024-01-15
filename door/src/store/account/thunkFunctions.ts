import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetAccountList } from '@/api/account';

export const getAccountInfo: any = createAsyncThunk(
  'account/info',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetAccountList(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
