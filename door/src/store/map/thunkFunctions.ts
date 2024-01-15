import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetMapInfo } from "@/api/map";


export const getMapInfo: any = createAsyncThunk(
    "map/info",
    async (weddingKey: string, thunkAPI) => {
        try {
            const response = await requestGetMapInfo(weddingKey)
            console.log(response.data)
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error?.response.data);
        }
    }
)

