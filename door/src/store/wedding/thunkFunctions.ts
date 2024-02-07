import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetWeddingInfo } from '../../api/wedding'
import { IResponseWeddingInfo } from '../../types/wedding';

export const getWeddingInfo: any = createAsyncThunk(
  'wedding/info',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetWeddingInfo(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
