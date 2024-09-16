import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./blogs/blogsSlice"
import authReducer from "./auth/authSlice"

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    auth: authReducer
  }
})

export default store;