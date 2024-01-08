import { createAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    isTextLoad: false,
    isContactLoad: false
};

export const loadText = createAction('load/text')
export const loadContact = createAction('load/contact')
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
    },
});

export default loadSlice.reducer;
