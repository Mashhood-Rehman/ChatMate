
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice"
import chatReducer from "./chatSlice"
import usersReducer from "./userSlice"
const store = configureStore({
    reducer: {
        users: usersReducer,
        auth:authReducer,
        chat:chatReducer
    }
})

export default store