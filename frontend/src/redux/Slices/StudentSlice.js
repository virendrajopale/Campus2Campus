import { createSlice } from '@reduxjs/toolkit';
import { addEducation, addExperience, addProject, deleteEducation, deleteExperience, deleteProject, displayEducation, displayExperience, displayProject, fetchMyProfile, fetchProfileByID, updateEducation, updateExperience, updateProject } from '../Actions/StudentAction';

const initialState = {
  loading: false,
  error: null,
  profile: null,
  education: [],
  experience: [],
  project: [],
  status: null
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    resetProfileState(state) {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch my profile
      .addCase(fetchMyProfile.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status = action.status
      })
      .addCase(fetchMyProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.status = action.status

      })
      .addCase(fetchMyProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = action.status
      })
      // Fetch profile by ID
      .addCase(fetchProfileByID.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status = action.status
      })
      .addCase(fetchProfileByID.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.status = action.status
      })
      .addCase(fetchProfileByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = action.status
      })
      //
      .addCase(displayProject.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status = action.status
      })
      .addCase(displayProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
        state.status = action.status

      })
      .addCase(displayProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = action.status
      })
      // Add project
      .addCase(addProject.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status = action.status
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = (action.payload);
        state.status = action.status
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = action.status
      })
      // Update project
      .addCase(updateProject.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status = action.status
      })
      // Update project
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;

        const updatedProject = action.payload.newproject; 
        // const index = state.project.findIndex((project) => project._id === updatedProject._id);
        // if (index !== -1) {
          state.project = action.payload;
        // }
        state.status=action.status
      })

      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.status
      })
      // Delete project
      .addCase(deleteProject.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted project from the profile
        state.project = action.project;
        state.status=action.status
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.status
      })
      //
      .addCase(displayEducation.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(displayEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.education = action.payload;
        state.status=action.status

      })
      .addCase(displayEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.status
      })
      // Add education
      .addCase(addEducation.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(addEducation.fulfilled, (state, action) => {
        state.loading = false;
        // Update profile with the new education
        state.education.push(action.payload.education);
        state.status=action.status
      })
      .addCase(addEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status=action.status
      })
      // Update education
      .addCase(updateEducation.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        state.status=action.status
      })
      .addCase(updateEducation.fulfilled, (state, action) => {
        state.loading = false;
        // Update profile with the updated education
        // const index = state.education.find((edu) => edu._id === action.payload.edu._id);
        state.education= action.payload;
      })
      .addCase(updateEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete education
      .addCase(deleteEducation.pending, (state,action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEducation.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted education from the profile
        state.education = action.payload
        // state.education = state.education.filter((edu) => edu._id !== action.payload.edu._id);
      })
      .addCase(deleteEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //
      .addCase(displayExperience.pending, (state,action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(displayExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action.payload;


      })
      .addCase(displayExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add experience, update experience, delete experience
      .addCase(addExperience.pending, (state,action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.loading = false;
        // Update profile with the new experience
        state.experience = action.payload;
      })
      .addCase(addExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateExperience.pending, (state,action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.loading = false;
        // Update profile with the updated experience
        // const index = state.experience.findIndex((exp) => exp._id === action.payload.edu._id);
        state.experience = action.payload;
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteExperience.pending, (state,action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted experience from the profile
        state.experience = action.payload;
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProfileState } = profileSlice.actions;

export default profileSlice.reducer;
