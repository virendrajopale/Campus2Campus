import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/user', // Assuming your API base URL is '/user'
  });
  
  // Set token in default headers
  const setAuthToken = (token) => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };
  
  
  
  // Other action creators remain unchanged
  

// Register a student
export const registerStudent = createAsyncThunk('registerStudent', async (userData, { rejectWithValue }) => {
    try {
        console.log(userData)
        const response = await axios.post('/user/RegisterStu', userData);
        setAuthToken(response.data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Register an admin
export const registerAdmin = createAsyncThunk('registerAdmin', async (adminData, { rejectWithValue }) => {
    try {
        const response = await axios.post('/user/RegisterAdmin', adminData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Register a department admin
export const registerDeptAdmin = createAsyncThunk('registerDeptAdmin', async (deptAdminData, { rejectWithValue }) => {
    try {
        const response = await axios.post('/user/RegisterDeptAdmin', deptAdminData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Login
export const login = createAsyncThunk('login', async (user, { rejectWithValue }) => {
    try {
        console.log(user)
       
        const response = await axios.post('/user/login', user,{
            headers: {
                "auth-tocken": `${sessionStorage.getItem('tocken')}`
            }
        });
        setAuthToken(response.data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Fetch registration requests
export const fetchRegistrationRequests = createAsyncThunk('fetchRegistrationRequests', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/user/registration_req',{
            headers: {
                "auth-tocken": `${sessionStorage.getItem('tocken')}`
            }
        });
        setAuthToken(response.data)
        console.log(response.data)
        return response.data.request;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Accept registration request
export const acceptRegistrationRequest = createAsyncThunk('acceptRegistrationRequest', async (id, { rejectWithValue }) => {
    try {
        const token = sessionStorage.getItem('tocken');
        const response = await axios.post(`/user/req_accept/${id}`, null, {
            headers: {
                "auth-tocken": token
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


// Reject registration request
export const rejectRegistrationRequest = createAsyncThunk('rejectRegistrationRequest', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.post(`/user/req_reject/${id}`,null,{
            headers: {
                "auth-tocken": `${sessionStorage.getItem('tocken')}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Fetch all students
export const fetchAllStudents = createAsyncThunk('fetchAllStudents', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/user/getAllStudents',{
            headers: {
                "auth-tocken": `${sessionStorage.getItem('tocken')}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//otp generator
export const generateOTP=createAsyncThunk('generateOTP',async(email,{rejectWithValue})=>{
    console.log(email)
    try{
        const otp=await axios.post('/user/SendVerificationOTP',{email});
        return otp.data;
    }
    catch(err){
        return rejectWithValue(err);
    }
})
//
export const verifyotp=createAsyncThunk('verifyotp',async({email,otp},{rejectWithValue})=>{
    console.log({email,otp})
    try{
        const optt=await axios.post('/user/VerifyOTP',{email,otp});
        return optt.data
    }catch(err){
        return rejectWithValue(err);
    }
})
export default axiosInstance;