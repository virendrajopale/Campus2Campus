import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDrive } from '../../redux/Actions/DriveAction';
import { useParams } from 'react-router-dom';
import { FcBusiness, FcGraduationCap,FcApproval,FcDocument,FcMoneyTransfer,FcManager,FcNumericalSorting12 } from 'react-icons/fc';
import {  FaClipboardList, FaBriefcase, FaMoneyBillAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const SingleDrive = ({drive}) => {
  const dispatch = useDispatch();
  // const { drive } = useSelector(state => state.drives);
  console.log(drive)

  

 

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="h-screen w-full  overflow-y-auto scroll-smooth  mx-auto no-scrollbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {drive && drive && (
        <div className=" bg-blue-400 bg-opacity-20   backdrop-blur-sm rounded-lg shadow-md p-6 flex flex-col gap-2">
          <h2 className="text-3xl bg-black/20 backdrop-blur-sm shadow-md text-white font-bold mb-4 flex items-center self-center border rounded-full p-1 pr-4 pl-4 ">
            <FcBusiness size={30} className="mr-2" />
            {drive.CompanyName}
          </h2>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcApproval size={30} className="mr-2" />
              Eligibility Criteria
            </h3>
            <span className=' px-3 py-4 text-sm font-semibold mr-2 mb-2 hover:scale-[1.01] cursor-pointer'>{drive.EligibilityCriteria}</span>
          </div>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcManager size={30} className="mr-2" />
              Job Title
            </h3>
            <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:scale-[1.01] cursor-pointer'>{drive.JobTitle}</span>
          </div>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcDocument size={30} className="mr-2" />
              Job Description
            </h3>
            <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:scale-[1.01] cursor-pointer'>{drive.JobDescription}</span>
          </div>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcMoneyTransfer size={30} className="mr-2" />
              Package
            </h3>
            <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:scale-[1.2] cursor-pointer'> {drive.Package}</span>
          </div>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcNumericalSorting12 size={30} className="mr-2" />
              Eligible Years
            </h3>
            <div className="flex flex-wrap">
              {drive.EligibleYears &&
                drive.EligibleYears.map((year, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:scale-[1.01] cursor-pointer"
                  >
                    {year}
                  </span>
                ))}
            </div>
          </div>
          <div className="gap-2 bg-gray-500/50 backdrop-blur-lg rounded-md p-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold flex items-center  rounded-full w-fit p-2 border-[1px] border-white">
              <FcGraduationCap size={30} className="mr-2" />
              Eligible Departments
            </h3>
            <div className="flex flex-wrap justify-center">
              {drive.EligibleDepartMents &&
                drive.EligibleDepartMents.map((dept, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:scale-[1.01] cursor-pointer"
                  >
                    {dept}
                  </span>
                ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SingleDrive;