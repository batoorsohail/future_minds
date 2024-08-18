import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogsData: [],
  status: 'idle',
  error: null
}

const blogsSlice = createSlice({
  initialState,
  name: "blog",
  reducers: {}
})

export default blogsSlice.reducer;