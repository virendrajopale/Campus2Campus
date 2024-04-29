import { addEligibleStudent, addSelectedStudent, applyToDrive, createDrive, getAllDrives, getSingleDrive, getStudByCategory, getStudsOfDrive, rejectStudent } from "../Actions/DriveAction";
import { createSlice } from "@reduxjs/toolkit";

export const driveSlice=createSlice({
    name:'driveSlice',
    initialState:{
        drives:[],
        drive:{},
        students:[],
        studentCat:null,
        student:{},
        error:null,
        success: false,
        loading:false
    },
    // reducers:{
    //     resetDriveState(state) {
    //         state.loading = false;
    //         state.error = null;
    //       },
    // },
    extraReducers:builder=>{
        //// all drive slice
        builder.addCase(getAllDrives.fulfilled,(state,action)=>{
            state.loading=false; 
            state.drives=action.payload;
        })
        builder.addCase(getAllDrives.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error;
        })
        builder.addCase(getAllDrives.pending,(state,action)=>{
            state.loading=true;
            // state.drives=action.payload;
        })
       // get Single Slice
        builder.addCase(getSingleDrive.fulfilled,(state,action)=>{
            state.loading=false;
            state.drive=action.payload;
        })
        builder.addCase(getSingleDrive.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error;
        })
        builder.addCase(getSingleDrive.pending,(state,action)=>{
            state.loading=true;
            // state.drives=action.payload;
        })
     //create drive
     builder.addCase(createDrive.fulfilled,(state,action)=>{
        state.loading=false;
        state.drive=action.payload;
    })
    builder.addCase(createDrive.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error;
    })
    builder.addCase(createDrive.pending,(state,action)=>{
        state.loading=true;
       
    })
    //  apply to drive
     builder.addCase(applyToDrive.fulfilled,(state,action)=>{
        state.loading=false;
        state.student=action.payload;
        state.students.push(action.payload)
    })
    builder.addCase(applyToDrive.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error;
    })
    builder.addCase(applyToDrive.pending,(state,action)=>{
        state.loading=true;
       
    })
//get list of students
builder.addCase(getStudsOfDrive.pending, (state) => {
  state.loading = true;
  state.error = null;
})
builder.addCase(getStudsOfDrive.fulfilled, (state, action) => {
  state.loading = false;
  state.students = action.payload;
  state.error = null;
})
builder.addCase(getStudsOfDrive.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload ? action.payload.message : 'Failed to fetch students';
});

//by category
builder.addCase(getStudByCategory.pending, (state) => {
  state.loading = true;
  state.error = null;
})
builder.addCase(getStudByCategory.fulfilled, (state, action) => {
  state.loading = false;
  state.studentCat = action.payload;
  state.error = null;
})
builder.addCase(getStudByCategory.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload ? action.payload.message : 'Failed to fetch students by category';
});
//
builder.addCase(addEligibleStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    builder.addCase(addEligibleStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      builder.addCase(addEligibleStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload ? action.payload.message : 'Failed to add eligible student';
      });
     
      builder.addCase(addSelectedStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(addSelectedStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      builder.addCase(addSelectedStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload ? action.payload.message : 'Failed to mark student as selected';
      })
      builder.addCase(rejectStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(rejectStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      builder.addCase(rejectStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload ? action.payload.message : 'Failed to reject student';
      });
    }
    
})
export const { resetDriveState } = driveSlice.actions;
export default driveSlice.reducer