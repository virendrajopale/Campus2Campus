import { createSlice } from '@reduxjs/toolkit';
import { acceptRegistrationRequest, fetchAllStudents, fetchRegistrationRequests, generateOTP, login, registerAdmin, registerDeptAdmin, registerStudent, rejectRegistrationRequest, verifyotp } from '../Actions/UserAction';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState :{
    users:[],
    reqUsers:[],
    user:null,
    adminUser:null,
    loading:null,
    error:null,
    message:null,
    status:null
  }
  ,
  
  extraReducers: (builder) => {
    builder
      // Register Student
      .addCase(registerStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register Admin
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admunUser = action.payload;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register Department Admin
      .addCase(registerDeptAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerDeptAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admunUser = action.payload;
      })
      .addCase(registerDeptAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.payload
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.status=action.payload.status
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.status=action.payload.status
      })

      // Fetch Registration Requests
      .addCase(fetchRegistrationRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegistrationRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.reqUsers = action.payload;
      })
      .addCase(fetchRegistrationRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Accept Registration Request
      .addCase(acceptRegistrationRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptRegistrationRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.reqUsers = action.payload;
      })
      .addCase(acceptRegistrationRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reject Registration Request
      .addCase(rejectRegistrationRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectRegistrationRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.reqUsers = action.payload;
      })
      .addCase(rejectRegistrationRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch All Students
      .addCase(fetchAllStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //opt genn
      .addCase(generateOTP.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.status=action.payload.status
      })
      .addCase(generateOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.payload.status
      })
      //verify otp
      .addCase(verifyotp.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(verifyotp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.status=action.payload.status
      })
      .addCase(verifyotp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.payload.status
      })
  },
});

export default userSlice.reducer;
