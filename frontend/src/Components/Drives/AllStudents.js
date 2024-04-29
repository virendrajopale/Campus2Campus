import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../../redux/Actions/UserAction";
import { FaEnvelope, FaUser, FaRegAddressCard, FaUniversity, FaBriefcase, FaCalendar } from 'react-icons/fa';

const AllStudents = ({year}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchAllStudents())
            .unwrap()
            .then(() => {
                console.log(users.Students);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 font-sand ">
                {year!="all"?(users && users.Students && users.Students
                .filter(student=>(student.year==year))
                .map((student, index) => (

                    <div key={index} className="bg-white/20 backdrop-blur-md text-white shadow-lg rounded-md p-4 border border-white">
                        <div className="flex items-center mb-4">
                            <FaUser className="mr-2" />
                            <span className="text-lg font-semibold">{student.name}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaRegAddressCard className="mr-2" />
                            <span>{student.reg_no}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaUniversity className="mr-2" />
                            <span>{student.dept}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaEnvelope className="mr-2" />
                            <span>{student.email}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaCalendar className="mr-2" />
                            <span>{student.year}</span>
                        </div>
                        <div className="mb-2  flex items-center">
                            <FaBriefcase className="mr-2" />
                            <span className={`${student.placed?"text-blue-800":"text-red-500"}`}>{student.placed?'Placed':"Not Placed Yet"}</span>
                        </div>
                    </div>
                )))
                :(users && users.Students && users.Students
                
                .map((student, index) => (

                    <div key={index} className="bg-white/20 backdrop-blur-md text-white shadow-lg rounded-md p-4 border border-white">
                        <div className="flex items-center mb-4">
                            <FaUser className="mr-2" />
                            <span className="text-lg font-semibold">{student.name}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaRegAddressCard className="mr-2" />
                            <span>{student.reg_no}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaUniversity className="mr-2" />
                            <span>{student.dept}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaEnvelope className="mr-2" />
                            <span>{student.email}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaCalendar className="mr-2" />
                            <span>{student.year}</span>
                        </div>
                        <div className="mb-2 flex items-center">
                            <FaBriefcase className="mr-2" />
                            <span className={`${student.placed?"text-blue-800":"text-red-500"}`}>{student.placed?'Placed':"Not Placed Yet"}</span>
                        </div>
                    </div>
                )))}
            </div>
        </>
    );
};

export default AllStudents;
