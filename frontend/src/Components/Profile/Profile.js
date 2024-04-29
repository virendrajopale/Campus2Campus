import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { displayEducation, displayExperience, displayProject, fetchMyProfile } from "../../redux/Actions/StudentAction";
import PlacementStatus from "./PlacementStatus";
import Education from './Education';
import Experience from "./Experience";
import Projects from './Project';
import { FaEnvelope, FaPhoneAlt, FaUniversity, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa'
import PopUp from "../../Pages/PopUp";
import { MdCastForEducation } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi";
import ApplicationHistory from "./ApplicationHistory";
const Profile = () => {
  const { profile, loading, project, education, experience } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [educationPopup, setEducationPopup] = useState(false);
  const [experiencePopup, setExperiencePopup] = useState(false);
  const [projectPopup, setProjectPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMyProfile());
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      dispatch(displayProject(profile._id));
      dispatch(displayEducation(profile._id));
      dispatch(displayExperience(profile._id));
    }
  }, [dispatch, profile]);

  return (
    <div className="w-screen h-full  flex justify-center items-start font-sand">
      <div className="max-w-6xl w-full p-8">
        <div className="rounded-xl bg-white/30 backdrop-blur-md text-white shadow-md p-6 border-2">

          <div className="flex justify-center mb-4">
            
            <HiOutlineUser size={130}/>
              {/* <img className="rounded-full w-32 h-32" src="https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0" alt="Profile Picture" /> */}
           
          </div>
          <div className="text-center mb-4">
            <p className=" mb-1 text-2xl capitalize font-sand"> {profile && profile.name}</p>
            <p className=" mb-1 bg-gray-400/30   rounded-md p-2 hover:scale-[1.01] duration-500 cursor-pointer"><span className="font-semibold">Email:</span> {profile && profile.email}</p>
            <p className=" mb-1 bg-gray-400/30   rounded-md p-2 hover:scale-[1.01] duration-500 cursor-pointer"><span className="font-semibold">Department:</span> {profile && profile.dept}</p>
            <p className=" mb-1 bg-gray-400/30   rounded-md p-2 hover:scale-[1.01] duration-500 cursor-pointer "><span className="font-semibold">Year:</span> {profile && profile.year}</p>
            <p className=" mb-1 bg-gray-400/30   rounded-md p-2 hover:scale-[1.01] duration-500 cursor-pointer"><span className="font-semibold">Contact No.:</span> {profile && profile.mob_no}</p>
            {profile && <PlacementStatus  profileid={profile._id} profile={profile} />}
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl w-full p-8  ">
        <div className="flex flex-col gap-4">
    
        <button onClick={()=>setEducationPopup(!educationPopup)}
              type="submit"
              className="relative inline-flex text-white  bg-white/30 backdrop-blur-md hover:bg-rose-600/100 bg- items-center justify-center p-8 w-full  overflow-hidden font-medium  transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group" >
              <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <MdCastForEducation size={30} className="text-bold" />
              </span>
              <span className="absolute text-3xl   flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">
               Education
              </span>
              <span className="relative invisible">Education</span>
            </button>

            <button onClick={()=>setExperiencePopup(!experiencePopup)}
              type="submit"
              className="relative inline-flex text-white bg-white/30 backdrop-blur-md hover:bg-sky-600/100 items-center justify-center p-8 w-full  overflow-hidden font-medium  transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group" >
              <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <LiaIndustrySolid size={30} className="text-bold" />
              </span>
              <span className="absolute text-3xl   flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
               Experience
              </span>
              <span className="relative invisible">Experience</span>
            </button>


            <button onClick={()=>setProjectPopup(!projectPopup)}
              type="submit"
              className="relative inline-flex text-white bg-white/30 backdrop-blur-md hover:bg-yellow-600/100 items-center justify-center p-8 w-full  overflow-hidden font-medium  transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group" >
              <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <FaProjectDiagram size={30} className="text-bold" />
              </span>
              <span className="absolute text-3xl   flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">
               Projects
              </span>
              <span className="relative invisible">Project</span>
            </button>
            <div  className="relative inline-flex text-white bg-white/30 backdrop-blur-md hover:bg-lime-600/100 items-center justify-center p-8 w-full  overflow-hidden font-medium  transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group" >
         {/* <ApplicationHistory profile={profile && profile.applicationHistory}/> */}
         ApplicationHistory
          </div>
        </div>
      </div>
     <>
     
     </>
      <PopUp popup={educationPopup} setPopup={setEducationPopup} msg={"Education Popup Message"} >
        <Education profileid={profile && profile._id} education={education}/>
      </PopUp>

      <PopUp popup={experiencePopup} setPopup={setExperiencePopup} msg={"Experience Popup Message"} >
        <Experience profileid={profile && profile._id} experience={experience}/>
      </PopUp>

      <PopUp popup={projectPopup} setPopup={setProjectPopup} msg={"Project Popup Message"} >
        <Projects profileid={profile && profile._id} project={project}/>
      </PopUp>
    </div>
  );
}

export default Profile;
