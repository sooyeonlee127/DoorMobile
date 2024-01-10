import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isContactPopup: false,
    isPhotoPopup: false,
    isCommentPopup: false
};

export const changeContactPopup = createAction<boolean>('popup/contact')
export const changePhotoPopup = createAction<boolean>('popup/photo')
export const changeCommentPopup = createAction<boolean>('popup/comment')

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeContactPopup, (state, action) => {
                state.isContactPopup = action.payload
            })
            .addCase(changePhotoPopup, (state, action) => {
                state.isPhotoPopup = action.payload
            })
            .addCase(changeCommentPopup, (state, action) => {
                state.isCommentPopup = action.payload
            })
    }
})


export default popupSlice.reducer;
