import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all users (already implemented)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/GetAllUsers");
  return response.data;
});

// export const loginUser = createAsyncThunk("users/loginUser", async (userData) => {
//   const request = await axios.post("http://localhost:5000/login", userData);
//   const response = await request.data.data;
//   localStorage.setItem('user', JSON.stringify(response)); // Fix: removed extra space
//   return response;
// });


export const loginUser = createAsyncThunk("users/loginUser", async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/login", userData);
    const userDataResponse = response.data.data; // Check if the structure is correct
    localStorage.setItem('user', JSON.stringify(userDataResponse)); // Save user to localStorage
    return userDataResponse; // Make sure this returns the correct user data
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed"); // Handle errors appropriately
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
      state.loggedInUser = null; // clear user info on logout
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
    builder
    // Handle user login
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload; // This should correctly set the logged-in user
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; // This should capture any errors
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
