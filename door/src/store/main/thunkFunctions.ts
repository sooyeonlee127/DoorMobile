import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetMainPhoto } from '@/api/main';

export const getMainPhoto: any = createAsyncThunk(
  'main/image',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetMainPhoto(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
