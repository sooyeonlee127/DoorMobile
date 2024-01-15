import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetCalendarPhoto } from '@/api/calendar';

export const getCalendarPhoto: any = createAsyncThunk(
  'calendar/image',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetCalendarPhoto(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
