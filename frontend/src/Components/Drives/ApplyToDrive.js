import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMyProfile } from '../../redux/Actions/StudentAction';
import { applyToDrive } from '../../redux/Actions/DriveAction';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GrCompliance } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import PopUp from '../../Pages/PopUp';
import toast from 'react-hot-toast';

const ApplyToDrive = () => {
    const dispatch = useDispatch();
    const { profile,status,error } = useSelector(state => state.profile);
    const navigate = useNavigate();
    const { id } = useParams();
   
    const [msg,setMsg]=useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(fetchMyProfile());
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };
        fetchData();
    }, [dispatch]);

    const ApplyDrive = () => {
        if(profile && profile.Education && profile.Education.Array.length==0 ){
          return  toast((t) => (
                <span>
                  Complete Your  <b>Profile</b>
                  <button className=' border p-2 rounded-md' onClick={() => { navigate('/user/profile'); toast.dismiss(t.id)}}>
                    Edit
                  </button>
                </span>
              ));
        }
        dispatch(applyToDrive(id))
        .unwrap()
        .then((data)=>{
           
            toast.success("Applied Successfully")
            navigate('/drives');

        })
        .catch((err)=>{
            // navigate('/gotohell')
            console.log(err)
            if(err && err.response.status==403){
                toast.error("Sorry For Inconvenience,This is Server Problem We will Get Back To You")
            }
            if(err.response.status==401){
                toast.error("Not Eligible to apply to this Drive")
            }
            if(err.response.status==401){
                toast.error("Not Eligible to apply to this Drive")
            }
            if(err.response.status==404){
                toast.error("Drive Is Not Applicable")
            }
            
          
        })
        // console.log()
        
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>


        <motion.div
            className="relative mx-auto  px-4 py-8 w-[40vw]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='w-full'>
                <h2 className="text-2xl font-bold mb-4 flex justify-center">
                    <FaUserAlt className="mr-2" />
                    Student Profile
                </h2>
                <motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaUserAlt className="mr-2" />
                        <span className="font-semibold">Full Name:</span>
                        <span className="ml-2">{profile && profile.name}</span>
                    </div>
                </motion.div>
                <motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaEnvelope className="mr-2" />
                        <span className="font-semibold">Email Address:</span>
                        <span className="ml-2">{profile && profile.email}</span>
                    </div>
                </motion.div>
                <motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <span className="font-semibold">Mobile Number:</span>
                        <span className="ml-2">{profile && profile.mob_no}</span>
                    </div>
                </motion.div>
                <motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaGraduationCap className="mr-2" />
                        <span className="font-semibold">{profile && profile.Education.Array[0].title}:</span>
                        <span className="ml-2">{profile && profile.Education.Array[0].percentage}</span>
                    </div>
                </motion.div>

                {profile && profile.Education.Array[1] && (<motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaGraduationCap className="mr-2" />
                        <span className="font-semibold">{profile && profile.Education.Array[1].title}:</span>
                        <span className="ml-2">{profile && profile.Education.Array[1].percentage}</span>
                    </div>
                </motion.div>)}
                {profile && profile.Education.Array[2] && (<motion.div className="mb-4" variants={itemVariants}>
                    <div className="form-label flex items-center">
                        <FaGraduationCap className="mr-2" />
                        <span className="font-semibold">{profile && profile.Education.Array[0].title}:</span>
                        <span className="ml-2">{profile && profile.Education.Array[2].percentage}</span>
                    </div>
                </motion.div>)}
                <div className='flex justify-between'>

                    <div className='flex gap-2 items-center justify-center ' onClick={()=>navigate('/user/profile')}>

                        <motion.button
                            className="flex gap-2 items-center justify-center bg-gray-500 text-white shadow-neumorphic hover:bg-gray-600 font-semibold py-2 px-4 h-10 w-32 rounded-lg focus:outline-none "
                            type="button"
                            variants={itemVariants}
                            
                        >

                            <GrCompliance /> 
                                Edit
                           

                        </motion.button>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>

                        <motion.button
                            className="flex gap-2 items-center justify-center bg-gray-500 text-white shadow-neumorphic hover:bg-gray-600 font-semibold py-2 px-4 h-10 w-32 rounded-lg focus:outline-none "
                            type="button"
                            onClick={ApplyDrive}
                            variants={itemVariants}
                        >


                            <GrCompliance /> <h4>
                                Submit
                                
                            </h4>

                        </motion.button>
                    </div>
                </div>
            </div>
           
        </motion.div>
        
        </>
    );
};

export default ApplyToDrive;