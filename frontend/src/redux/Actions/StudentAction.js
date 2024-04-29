import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch my profile
export const fetchMyProfile = createAsyncThunk('fetchMyProfile', async (_, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    
    const response = await axios.get('/Student/profile/myprofile', {
      headers: {
          "auth-tocken": token
      }
  });
    // console.log(response.data.student)
    return response.data.student;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Fetch profile by ID
export const fetchProfileByID = createAsyncThunk('fetchProfileByID', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.get(`/Student/profile/display/${id}`, {
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const displayProject = createAsyncThunk('displayProject', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.get(`/Student/profile/displayproject/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
  // console.log(response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
// Add project
export const addProject = createAsyncThunk('addProject', async (projectData, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.post('/Student/profile/addproject', projectData, {
      headers: {
          "auth-tocken": token
      }
  });
  console.log(response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update project
export const updateProject = createAsyncThunk('updateProject', async ({ id, projects }, { rejectWithValue }) => {
  try {

    const token = sessionStorage.getItem('tocken');
    const response = await axios.put(`/Student/profile/updateproject/${id}`, projects,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete project
export const deleteProject = createAsyncThunk('deleteProject', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.delete(`/Student/profile/deleteproject/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

//
export const displayEducation = createAsyncThunk('displayEducation', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.get(`/Student/profile/displayeduction/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
  // console.log(response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
// Add education
export const addEducation = createAsyncThunk('addEducation', async (educationData, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.post('/Student/profile/addeducation', educationData,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update education
export const updateEducation = createAsyncThunk('updateEducation', async ({ id, edu }, { rejectWithValue }) => {
  try {
    console.log(edu)
    const token = sessionStorage.getItem('tocken');
    const response = await axios.put(`/Student/profile/updateeducation/${id}`, edu,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete education
export const deleteEducation = createAsyncThunk('deleteEducation', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.delete(`/Student/profile/deleteeducation/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
//
export const displayExperience = createAsyncThunk('displayExperience', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.get(`/Student/profile/displayexperience/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
  // console.log(response.data)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
// Add experience
export const addExperience = createAsyncThunk('addExperience', async (experienceData, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.post('/Student/profile/addexp', experienceData,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update experience
export const updateExperience = createAsyncThunk('updateExperience', async ({ id, exp }, { rejectWithValue }) => {
  console.log(exp)
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.put(`/Student/profile/updateexp/${id}`, exp,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete experience
export const deleteExperience = createAsyncThunk('deleteExperience', async (id, { rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('tocken');
    const response = await axios.delete(`/Student/profile/deleteexp/${id}`,{
      headers: {
          "auth-tocken": token
      }
  });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
