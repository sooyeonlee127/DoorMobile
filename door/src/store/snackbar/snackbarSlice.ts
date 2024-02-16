import { createAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
    isVisible: false,
    message: ''
};

export const changeSnackbarVisible = createAction<boolean>('snackbar/visible');
export const changeSnackbarMessage = createAction<string>('snackbar/message');

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeSnackbarVisible, (state, action) => {
                state.isVisible = action.payload;
            })
            .addCase(changeSnackbarMessage, (state, action) => {
                state.message = action.payload;
            })
    },
});

export default snackbarSlice.reducer;
