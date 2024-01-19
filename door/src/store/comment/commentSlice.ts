import { createSlice } from '@reduxjs/toolkit';
import { getCommentList, changeDetailComment } from './thunkFunctions';
const initialState = {
  commentList: [],
  isLoading: false,
  commentDetail: {}
};



const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentList.fulfilled, (state, action) => {
        state.commentList = action.payload;
      })
      .addCase(changeDetailComment, (state, action) => {
        state.commentDetail = action.payload
      })
  },
});

export default commentSlice.reducer;
