import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './index.css'
import { AllDrives } from "./Components/Drives/AllDrives";
import NewDrive from "./Components/Drives/NewDrive";
import SingleDrive from "./Components/Drives/SingleDrive";
import StudentsList from "./Components/Drives/StudentsList";
import AddDriveForm from "./Components/Drives/AddDriveForm";
import DriveItem from "./Components/Drives/DriveItem";
import DriveRecord from "./Components/Drives/DisplayDriveRecord";
import Signup from "./Components/Drives/Signup";
import Login from "./Components/Drives/Login";
import Profile from "./Components/Profile/Profile";
import Requests from './Components/Pending Requests/Requests'
import AddEducation from "./Components/Profile/Education/AddEducation";
import AddProject from './Components/Profile/Projects/AddProject'
import UpdateProject from './Components/Profile/Projects/UpdateProject'
import UpdateEducationt from "./Components/Profile/Education/UpdateEducation";
import AddExperience from "./Components/Profile/Experience/AddExperience";
import UpdateExperience from "./Components/Profile/Experience/UpdateExperience";
import Navbar from "./Pages/Navbar";
import ApplyToDrive from "./Components/Drives/ApplyToDrive";
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from "./Pages/Sidebar";
import AdminHome from "./Pages/AdminHome";
import AllStudents from "./Components/Drives/AllStudents";
import LogSign from "./Components/Drives/LogSign";
import DriveStudents from "./Components/Drives/DriveStudents";
import Contact from "./Pages/Contact";
import LoginImage from "./Pages/LoginImage";
const App = () => {
  const navigate = useNavigate();
  const [role, setrole] = useState(null);
  const isLoggedIn = sessionStorage.getItem('tocken');
 
  useEffect(() => {
    if (!isLoggedIn) {
    //   navigate('/user/login');
    } else {
      setrole(sessionStorage.getItem('role'));
    }
  }, [isLoggedIn, navigate]);
  

  return (
    <>
      <Navbar  role={role} />  
      <Toaster/>
      { 
      <div className={`${  role!=='Student' && role!=null ?"grid grid-cols-8 w-full":""} bg-[#0b1024]  h-screen bg-[url('./Assets/color-bars.svg')] `}>

      { 
        role!=='Student' && role!=null ?
        <div className=" col-span-1">
         <Sidebar />
        </div>
         :null
        }

      <div className=" pt-16 col-span-7   m-0 h-full no-scrollbar overflow-auto ">

      <Routes >
         
        <Route path="/" element={isLoggedIn ? <AdminHome /> : <Navigate to="/user/login" />} />
        <Route path="/user/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/user/login" />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/apply/:id" element={<ApplyToDrive />} />
        {/* <Route path="/user/login11" element={<LogSign role={role} setrole={setrole} />} /> */}
        <Route path="/user/login" element={<LogSign role={"Student"} setrole={setrole} />} />
        <Route path="/user/admin/login" element={<LogSign role={"Admin"} setrole={setrole} />} />
        <Route path="/user/deptAdmin/login" element={<LogSign role={"TPO_Dept_Admin"} setrole={setrole} />} />
        <Route path="/drives" element={ <AllDrives /> } />
        {/* <Route path="/singledrives/:id" element={isLoggedIn ? <SingleDrive /> : <Navigate to="/user/login" />} /> */}
        <Route path="/drives/new" element={isLoggedIn ? <AddDriveForm /> : <Navigate to="/user/login" />} />
        <Route path="/user/contact/TPO" element={isLoggedIn ? <Contact /> : <Navigate to="/user/login" />} />
        <Route path="/drives/:cat/:id" element={isLoggedIn ? <DriveStudents /> : <Navigate to="/user/login" />} />
        <Route path="/allstudents" element={isLoggedIn ? <AllStudents year={"all"}/> : <Navigate to="/user/login" />} />
        <Route path="/allstudents/first" element={isLoggedIn ? <AllStudents year={"First Year"}/> : <Navigate to="/user/login" />} />
        <Route path="/allstudents/second" element={isLoggedIn ? <AllStudents year={"Second Year"}/> : <Navigate to="/user/login" />} />
        <Route path="/allstudents/third" element={isLoggedIn ? <AllStudents year={"Third Year"}/> : <Navigate to="/user/login" />} />
        <Route path="/allstudents/final" element={isLoggedIn ? <AllStudents year={"Final Year"}/> : <Navigate to="/user/login" />} />
        <Route path="/drives/stdList" element={isLoggedIn ? <DriveItem role={role} /> : <Navigate to="/user/login" />} />
        <Route path="/drives/selectedStudents/:id" element={isLoggedIn ? <StudentsList /> : <Navigate to="/user/login" />} />
        <Route path="/PendingRequests" element={isLoggedIn ? <Requests /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/addEducation" element={isLoggedIn ? <AddEducation /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/addProject" element={isLoggedIn ? <AddProject /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/addExperience" element={isLoggedIn ? <AddExperience /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/updateEducation/:pid/:id" element={isLoggedIn ? <UpdateEducationt /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/updateExperience/:pid/:id" element={isLoggedIn ? <UpdateExperience /> : <Navigate to="/user/login" />} />
        <Route path="/myprofile/updateProject/:pid/:id" element={isLoggedIn ? <UpdateProject /> : <Navigate to="/user/login" />} />
      </Routes>
      </div> 
      </div>
      }
    </>
  )
}

export default App;