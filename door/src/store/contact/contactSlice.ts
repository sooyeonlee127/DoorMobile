import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getContactList } from './thunkFunctions';
import { IResponseContactList } from '@/types/contact';

interface IcontactInitalState {
    isLoading: boolean
    contactListInfo: any
}


const initialState: IcontactInitalState = {
    isLoading: false,
    contactListInfo: {}
};


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContactList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getContactList.fulfilled, (state, action) => {
                state.contactListInfo = action.payload
            })
            .addCase(getContactList.rejected, (state) => {
                state.isLoading = true;
            })
    }
})


export default contactSlice.reducer;
