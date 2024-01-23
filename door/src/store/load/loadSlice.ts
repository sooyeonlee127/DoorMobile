import { createAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    isTextLoad: false,
    isContactLoad: false,
    isDateLoad: false,
    isPhotoLoad: false,
    isMapLoad: false
};

export const loadText = createAction<boolean>('load/text')
export const loadContact = createAction<boolean>('load/contact')
export const loadDate = createAction<boolean>('load/date')
export const loadPhoto = createAction<boolean>('load/photo')
export const loadMap = createAction<boolean>('load/map')

const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadText, (state,action) => {
                state.isTextLoad = action.payload;
            })
            .addCase(loadContact, (state, action) => {
                state.isContactLoad = action.payload;
            })
            .addCase(loadDate, (state, action) => {
                state.isDateLoad = action.payload;
            })
            .addCase(loadPhoto, (state, action) => {
                state.isPhotoLoad = action.payload;
            })
            .addCase(loadMap, (state, action) => {
                state.isMapLoad = action.payload;
            })
    },
});

export default loadSlice.reducer;
