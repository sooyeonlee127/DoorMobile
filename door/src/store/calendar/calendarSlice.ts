import { createSlice } from '@reduxjs/toolkit';
import { getCalendarPhoto } from './thunkFunctions';
const initialState = {
  calendarPhoto: {
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

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCalendarPhoto.fulfilled, (state, action) => {
      state.calendarPhoto = action.payload;
    });
  },
});

export default calendarSlice.reducer;
