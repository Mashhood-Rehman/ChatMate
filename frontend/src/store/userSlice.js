import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all users (already implemented)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/GetAllUsers");
  return response.data;
});

// export const loginUser = createAsyncThunk("users/loginUser", async (userData) => {
//   const response = await axios.post("http://localhost:5000/login", userData);
//   const { data } = response;
//   localStorage.setItem("user", JSON.stringify(data.user));
//   localStorage.setItem("token", data.token);  // if you also store token
//   return data.user;
// });

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedInUser: null,  
    loading: false,
    error: null,
  },
  reducers: {
    login : (state , action) => {
        state.users = action.payload
    },
    logoutUser: (state) => {
      state.users = null;
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

    // Handle user login
    // builder.addCase(loginUser.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(loginUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.loggedInUser = action.payload;
    // });
    // builder.addCase(loginUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
