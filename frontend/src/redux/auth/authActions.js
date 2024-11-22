// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendURL = 'localhost:4000';

// export const signInUser = createAsyncThunk(
//   'auth/signin',
//   async ({user_name, email, password}, {rejectWithValue}) => {
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       }
//       await axios.post(
//         `${backendURL}/api/user/signin`,
//         { user_name, email, password },
//         config
//       )
//     } catch (error) {
//       // return custom error message from backend if present
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )