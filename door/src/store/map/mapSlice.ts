import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMapInfo } from './thunkFunctions';
interface IcontactInitalState {
    isLoading: boolean
    mapInfo: any
}


const initialState: IcontactInitalState = {
    isLoading: false,
    mapInfo: {}
};


const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMapInfo.fulfilled, (state,action) => {
            state.mapInfo = action.payload
        })
    }
})


export default mapSlice.reducer;
