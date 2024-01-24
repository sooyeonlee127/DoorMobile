import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

type Inputs = {
  nickname: string;
  password: string;
  comment: string;
  commentId: string;
};

const initialState = {
  isContactPopup: false,
  isPhotoPopup: false,
  isCommentCreatePopup: false,
  isCommentDetailPopup: false,
  commentContent: {
    nickname: '',
    password: '',
    comment: '',
    commentId: '',
  },
};

export const changeContactPopup = createAction<boolean>('popup/contact');
export const changePhotoPopup = createAction<boolean>('popup/photo');
export const changeCommentCreatePopup = createAction<boolean>(
  'popup/commentCreate'
);
export const changeCommentDetailPopup = createAction<boolean>(
  'popup/commentDetail'
);

export const changeCommentContent = createAction<Inputs>(
  'popup/commentContent'
);

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeContactPopup, (state, action) => {
        state.isContactPopup = action.payload;
      })
      .addCase(changePhotoPopup, (state, action) => {
        state.isPhotoPopup = action.payload;
      })
      .addCase(changeCommentCreatePopup, (state, action) => {
        state.isCommentCreatePopup = action.payload;
      })
      .addCase(changeCommentDetailPopup, (state, action) => {
        state.isCommentDetailPopup = action.payload;
      })
      .addCase(changeCommentContent, (state, action) => {
        state.commentContent = action.payload;
      });
  },
});

export default popupSlice.reducer;
