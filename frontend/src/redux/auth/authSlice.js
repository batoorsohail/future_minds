// import { createSlice } from '@reduxjs/toolkit';
// import { signInUser } from './authActions';

// const initialState = {
//   loading: false,
//   userInfo: {},
//   userToken: null,
//   error: null,
//   success: false
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [signInUser.pending]: (sate) => {
//       state.loading = true
//       state.error = null
//     },
//     [signInUser.fulfilled]: (state, {payload}) => {
//       state.loading = false
//       state.error = null
//     },
//     [signInUser.rejected]: (state, {payload}) => {
//       state.loading = false
//       state.error = payload
//     }
//   }
// })

// export default authSlice.reducer;