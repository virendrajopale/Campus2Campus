import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
//all drive fetch
export const getAllDrives=createAsyncThunk('getAllDrives',async(_,{rejectWithValue})=>{

   try{
    const drives=await axios.get('/Drive/getAllDrive')

    return drives.data.drives;
 }
 catch(err){
    console.log(err);
    return rejectWithValue(err)
 }
})
//single drive fetch
export const getSingleDrive=createAsyncThunk('getSingleDrive',async(id,{rejectWithValue})=>{
   try{
    
      const drive=await axios.get(`/Drive/display/${id}`,{
         headers: {
            "auth-tocken": sessionStorage.getItem('tocken')
        }
      });

      return drive.data
   }
   catch(err){
      return rejectWithValue(err);
   }
})
//new drive post
export const createDrive=createAsyncThunk('createDrive',async(newdata,{rejectWithValue})=>{
   console.log(newdata)
   try{
      const data=await axios.post('/Drive/newDrive',newdata,{
         headers: {
            "auth-tocken": `${sessionStorage.getItem('tocken')}`
        }
      });
      return data.data.newdrive
   }catch(err){
      return rejectWithValue(err);
   }
})
//apply to drive button
export const applyToDrive=createAsyncThunk('applyToDrive',async(id,{rejectWithValue})=>{
   try{
      const data=await axios.post(`/Drive/Apply/${id}`,null,{
         headers: {
             "auth-tocken": `${sessionStorage.getItem('tocken')}`
         }
     });
     console.log(data.data)
      return data.data.stu

   }catch(err){
      return rejectWithValue(err);
   }
})
//get selected students list of a drive
export const getStudsOfDrive=createAsyncThunk('getStudsOfDrive',async(id,{rejectWithValue})=>{
   try{
      const data=await axios.get(`/Drive/getSelectedStu/${id}`,{
         headers: {
            "auth-tocken": sessionStorage.getItem('tocken')
        }
      });
      console.log(data.data)
      return data.data.students
   }catch(err){
      return rejectWithValue(err);
   }
})
//Fetch All the Student of the drive->Interested,Eligible,Selected => Must login as Admin
export const getStudByCategory=createAsyncThunk('getStudByCategory',async({id,cat},{rejectWithValue})=>{
   try{
      const studData=await axios.get(`/Drive/getStudent/${cat}/${id}`,{
         headers: {
            "auth-tocken": sessionStorage.getItem('tocken')
        }
      });
      return studData.data.students;
   }
   catch(err){
      return rejectWithValue(err);
   }
})

//Accept the pplication of a student for the particular drive => Must login as Admin
export const addEligibleStudent=createAsyncThunk('addEligibleStudent',async(id,{rejectWithValue})=>{
   try{
      const studData=await axios.post(`/Drive/addEligibleStu//${id}`);
      return studData.data;
   }
   catch(err){
      return rejectWithValue(err);
   }
})

//Mark the student as placed in particular drive => Must login as Admin
export const addSelectedStudent=createAsyncThunk('addSelectedStudent',async(id,{rejectWithValue})=>{
   try{
      const studData=await axios.post(`/Drive/addSelectedStu/${id}`);
      return studData.data;
   }
   catch(err){
      return rejectWithValue(err);
   }
})

//Reject the application of the particular student for the particular drive => Must login as Admin

export const rejectStudent=createAsyncThunk('rejectStudent',async(id,{rejectWithValue})=>{
   try{
      const studData=await axios.post(`/Drive/rejectStu/${id}`);
      return studData.data;
   }
   catch(err){
      return rejectWithValue(err);
   }
})