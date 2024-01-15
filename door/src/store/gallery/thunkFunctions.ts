import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestGetGalleryPhoto } from '@/api/gallery';

export const getGalleryPhoto: any = createAsyncThunk(
  'gallery/image',
  async (weddingKey: string, thunkAPI) => {
    try {
      const response = await requestGetGalleryPhoto(weddingKey);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  }
);
