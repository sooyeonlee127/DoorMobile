import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetCommentList } from '@/api/comment';

export const getCommentList: any = createAsyncThunk(
  'comment/info',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetCommentList(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
