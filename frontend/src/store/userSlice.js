import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/GetAllUsers");
  return response.data;
});

export const loginUser = createAsyncThunk("users/loginUser", async (userCredentials) => {
  try {
    const request = await axios.post("http://localhost:5000/login", userCredentials);
    const response = request.data; 
    localStorage.setItem('loggedInUser', JSON.stringify(response)); 
        return response;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed"); 
  }
});


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedInUser: null,  
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.loggedInUser = null; 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload; 
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
