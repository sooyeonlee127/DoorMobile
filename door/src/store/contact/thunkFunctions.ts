import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetContactList } from "@/api/contact";


export const getContactList: any = createAsyncThunk(
    "contact/info",
    async (weddingKey: string, thunkAPI) => {
        try {
            const response = await requestGetContactList(weddingKey)
            console.log(response.data)
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error?.response.data);
        }
    }
)

