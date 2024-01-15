import { createSlice } from '@reduxjs/toolkit';
import { getCommentList } from './thunkFunctions';
const initialState = {
  commentList: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentList.fulfilled, (state, action) => {
      state.commentList = action.payload;
    });
  },
});

export default commentSlice.reducer;
