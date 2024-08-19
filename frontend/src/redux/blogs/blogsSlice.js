import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogsData: [],
  status: 'idle',
  error: null
}

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  const response = await axios.get('http://localhost:4000/api/blogs');
  return response.data.map((blog) => ({
    id: blog._id,
    title: blog.title,
    content: blog.content,
    createdAt: blog.createdAt
  }))
})

const blogsSlice = createSlice({
  initialState,
  name: "blog",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.blogsData = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
})

export const selectAllBlogs = ((state) => state.blogs.blogsData);

export default blogsSlice.reducer;