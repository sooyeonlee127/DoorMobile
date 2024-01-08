import { createAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    isTextLoad: false,
    isContactLoad: false,
    isDateLoad: false,
    isPhotoLoad: false,
    isMapLoad: false
};

export const loadText = createAction('load/text')
export const loadContact = createAction('load/contact')
export const loadDate = createAction('load/date')
export const loadPhoto = createAction('load/photo')
export const loadMap = createAction('load/map')

const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadText, (state) => {
                state.isTextLoad = true;
            })
            .addCase(loadContact, (state) => {
                state.isContactLoad = true;
            })
            .addCase(loadDate, (state) => {
                state.isDateLoad = true;
            })
            .addCase(loadPhoto, (state) => {
                state.isPhotoLoad = true;
            })
            .addCase(loadMap, (state) => {
                state.isMapLoad = true;
            })
    },
});

export default loadSlice.reducer;
