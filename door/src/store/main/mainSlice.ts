import { createSlice } from '@reduxjs/toolkit';
import { getMainPhoto } from './thunkFunctions';
const initialState = {
  mainPhoto: {
    _id: '',
    weddingKey: '',
    imageTypeCode: '',
    key: '',
    originalFileName: '',
    createdAt: '',
    updatedAt: '',
    __v: null,
  },
  isLoading: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMainPhoto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainPhoto.fulfilled, (state, action) => {
        state.mainPhoto = action.payload;
      })
      .addCase(getMainPhoto.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default mainSlice.reducer;
