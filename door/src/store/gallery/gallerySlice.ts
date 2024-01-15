import { createSlice } from '@reduxjs/toolkit';
import { getGalleryPhoto } from './thunkFunctions';
const initialState = {
  isLoading: false,
  galleryPhoto: [
    {
      _id: '',
      weddingKey: '',
      imageTypeCode: '',
      key: '',
      originalFileName: '',
      createdAt: '',
      updatedAt: '',
      __v: null,
    },
  ],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalleryPhoto.fulfilled, (state, action) => {
      state.galleryPhoto = action.payload;
    });
  },
});

export default gallerySlice.reducer;
