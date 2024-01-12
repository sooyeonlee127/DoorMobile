import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getWeddingInfo } from './thunkFunctions';
import { IResponseWeddingInfo } from '@/types/wedding';

interface IweddingInitalState {
    weddingInfo: IResponseWeddingInfo,
    isLoading: boolean
}


const initialState: IweddingInitalState = {
    weddingInfo: {
        groom: {
            name: "", 
            groomRoleTypeName: "", 
            parents: {
                mother: "",
                father: ""
            } 
        },
        bride: {
            name: "", 
            brideRoleTypeName: "", 
            parents: {
                mother: "",
                father: ""
            }
},
        _id: "",
        weddingKey: "",
        invitationSentence: "",
        weddingDate: "",
        weddingTime: "",
        createdAt: "",
        updatedAt: "",
        __v: null,
    },
    isLoading: false,
};


const weddingSlice = createSlice({
    name: 'wedding',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getWeddingInfo.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getWeddingInfo.fulfilled, (state, action) => {
            state.weddingInfo = action.payload
        })
        .addCase(getWeddingInfo.rejected, (state, action) => {
            state.isLoading = false;
        })

    }
})


export default weddingSlice.reducer;
