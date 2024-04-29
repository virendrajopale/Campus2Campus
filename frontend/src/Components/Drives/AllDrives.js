import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrives } from '../../redux/Actions/DriveAction';
import { Link, useNavigate } from 'react-router-dom';
import DriveItem from './DriveItem';
import { FaUserCheck, FaRegPaperPlane } from 'react-icons/fa';
import { fetchMyProfile } from '../../redux/Actions/StudentAction';
import toast from 'react-hot-toast';
import SingleDrive from './SingleDrive';

export const AllDrives = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { drives } = useSelector(state => state.drives);
  const { profile } = useSelector(state => state.profile);
  const [getId, setGetId] = useState(drives && drives[0] && drives[0]._id);
  const role = sessionStorage.getItem('role');
  const [isApllied, setIsApplied] = useState();

  const toast1 = () => {
    toast.success('Already Applied');
  };

  useEffect(() => {
    
    dispatch(getAllDrives());
    dispatch(fetchMyProfile());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-screen font-sand">
        <div className="overflow-y-auto h-screen md:h-auto">
          <div className="flex flex-col gap-2">
            {drives &&
              drives.map((dt, index) => {
                const applicationIndex = profile && profile.applicationHistory.findIndex(app => app.DriveId === dt._id);
                const applied = applicationIndex !== -1;
                const applicationStatus = applied ? profile && profile.applicationHistory[applicationIndex].status : null;
                return (
                  <div key={index} className="border-[1px] rounded border-gray-300 bg-black/30 backdrop-blur-sm shadow-sm mb-2">
                    <div onClick={() => setGetId(dt)}>
                      <DriveItem Drive={dt} />
                    </div>
                    <div className="p-2 gap-4 flex flex-col text-sm justify-between items-center">
                      <button
                        type="button"
                        className="btn btn-success mx-2 text-white"
                        onClick={() => navigate(`/drives/InterestedStu/${dt._id}`)}
                      >
                        Applications
                      </button>
                      <Link
                        to={`/drives/selectedStudents/${dt._id}`}
                        type="submit"
                        className="text-white col-span-2 relative inline-flex bg-gray-500/90 hover:bg-green-600/100 items-center justify-center 
                        w-full  overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group p-4"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                          <FaUserCheck />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Selected Candidates
                        </span>
                      </Link>
                      {role !== "TPO_Admin" && (
                        <Link
                          to={applied ? "" : `/apply/${dt._id}`}
                          onClick={applied ? toast1 : null}
                          type="submit"
                          className="text-white col-span-2 relative inline-flex bg-gray-500/90 hover:bg-green-600/100 items-center justify-center p-4 
                          w-full  overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                            <FaRegPaperPlane />
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            {applied ? applicationStatus : 'Apply'}
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="md:col-span-3 md:block ">
          {getId && <SingleDrive drive={getId} />}
        </div>
      </div>
    </>
  );
};
