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
    image: blog.image,
    title: blog.title,
    content: blog.content,
    createdAt: blog.createdAt
  }))
})

export const createBlog = createAsyncThunk('blogs/createBlog', async (blogData) => {
  const response = await axios.post('http://localhost:4000/api/blogs', blogData);
  return response.data;
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
    builder
      .addCase(createBlog.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.blogsData.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
})

export const selectAllBlogs = ((state) => state.blogs.blogsData);

export default blogsSlice.reducer;