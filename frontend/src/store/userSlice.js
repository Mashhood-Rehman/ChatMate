import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers" , async ( ) => {
    const response = await axios.get("http://localhost:5000/GetAllUsers")
    return response.data
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        users : [],
        loading:false,
        error: null


    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending , (state) => {
            state.loading =true;
            state.error =null;
        })  
        builder.addCase(fetchUsers.fulfilled , (state , action) => {
            state.loading = false;
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
})
export default userSlice.reducer